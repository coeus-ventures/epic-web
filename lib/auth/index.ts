import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { cache } from "react";
import { headers } from "next/headers";
import { admin } from "better-auth/plugins";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [
    admin({
      defaultRole: "user",
    }),
    magicLink({
      expiresIn: 300, // 5 minutes
      // No-op sendMagicLink - token is stored in verification table
      // and can be retrieved directly for preview auto-login
      sendMagicLink: async ({ email, token, url }) => {
        // In preview/sandbox context, we don't send emails
        // The token is automatically stored in the verification table
        // and can be retrieved for auto-login flows
        console.log(`[Magic Link] Generated for ${email}`);
      },
    }),
    nextCookies(),
  ], // make sure nextCookies is the last plugin in the array
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendEmailVerificationOnSignUp: false,
  },
  user: {
    additionalFields: {},
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      partitioned: true,
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 24 * 60 * 60, // 1 day
    },
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.BETTER_AUTH_URL ||
    "http://localhost:8080",
});

export const getUser = cache(async () => {
  const sessionResponse = await auth.api.getSession({
    headers: await headers(),
  });

  if (!sessionResponse || !sessionResponse.user) {
    return { user: null, isImpersonating: false, impersonatedBy: null };
  }

  // Better Auth getSession returns: { user, session: { id, token, expiresAt, impersonatedBy, ... } }
  // impersonatedBy is stored in session.impersonatedBy
  const sessionData = sessionResponse.session as {
    impersonatedBy?: string | null;
  } & typeof sessionResponse.session;

  // Check impersonatedBy directly from session
  const impersonatedBy = sessionData?.impersonatedBy || null;
  const isImpersonating = !!impersonatedBy;

  return {
    user: sessionResponse.user,
    sessionToken: sessionResponse.session.token,
    isImpersonating,
    impersonatedBy,
  };
});
