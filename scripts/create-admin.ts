import { auth } from '../lib/auth';
import { db } from '../db';
import { verification, user as userTable } from '../db/schema';
import { desc, eq } from 'drizzle-orm';

export interface CreateAdminInput {
  email: string;
  password: string;
  generateMagicLink?: boolean;
}

export interface CreateAdminResult {
  success: boolean;
  error?: string;
  magicLinkPath?: string;
}

export async function createAdmin(input: CreateAdminInput): Promise<CreateAdminResult> {
  try {
    if (!process.env.BETTER_AUTH_SECRET) {
      return { success: false, error: 'BETTER_AUTH_SECRET is missing' };
    }

    // Create user (ignore if already exists)
    try {
      await auth.api.signUpEmail({
        headers: new Headers(),
        body: { email: input.email, password: input.password, name: 'Admin' },
      });
    } catch (err: any) {
      if (!err.message?.includes('USER_ALREADY_EXISTS')) throw err;
    }

    // Set admin role
    await db.update(userTable).set({ role: 'admin' }).where(eq(userTable.email, input.email));

    if (!input.generateMagicLink) return { success: true };

    // Generate magic link
    const callbackURL = '/home';
    await auth.api.signInMagicLink({
      headers: new Headers(),
      body: { email: input.email, callbackURL },
    });

    // Find token in DB
    const records = await db.select().from(verification).orderBy(desc(verification.createdAt)).limit(10);
    const record = records.find((r) => {
      try { return JSON.parse(r.value).email === input.email; } catch { return false; }
    });

    if (!record) return { success: false, error: 'Magic link token not found' };

    return {
      success: true,
      magicLinkPath: `/api/auth/magic-link/verify?token=${record.identifier}&callbackURL=${encodeURIComponent(callbackURL)}`,
    };
  } catch (err: any) {
    return { success: false, error: err?.message || String(err) };
  }
}

async function main() {
  const [email, password, flag] = process.argv.slice(2);
  if (!email || !password) {
    console.error('Usage: bun run scripts/create-admin.ts <email> <password> [--magic-link]');
    process.exit(1);
  }

  const result = await createAdmin({ email, password, generateMagicLink: flag === '--magic-link' });

  if (result.success) {
    if (result.magicLinkPath) console.log(`MAGIC_LINK_PATH:${result.magicLinkPath}`);
    console.log('SUCCESS');
  } else {
    console.error('ERROR:', result.error);
    process.exit(1);
  }
}

if (require.main === module) main();
