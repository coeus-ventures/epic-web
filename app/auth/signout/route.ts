import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /auth/signout?redirect=/path
 *
 * Signs out the current user (if any) and redirects to the given path.
 * Used by Behave's "Login as Admin" flow to clear stale sessions
 * before navigating to the magic link.
 */
export async function GET(request: NextRequest) {
  const redirect = request.nextUrl.searchParams.get("redirect") || "/";

  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch {
    // No session to sign out — that's fine, just redirect
  }

  return NextResponse.redirect(new URL(redirect, request.url));
}
