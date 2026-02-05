import { auth } from '../lib/auth';
import { db } from '../db';
import { verification } from '../db/schema';
import { desc } from 'drizzle-orm';

export interface GenerateMagicLinkInput {
  email: string;
  callbackURL?: string;
}

export interface GenerateMagicLinkResult {
  success: boolean;
  error?: string;
  magicLinkPath?: string;
}

export async function generateMagicLink(input: GenerateMagicLinkInput): Promise<GenerateMagicLinkResult> {
  try {
    if (!process.env.BETTER_AUTH_SECRET) {
      return { success: false, error: 'BETTER_AUTH_SECRET is missing' };
    }

    const callbackURL = input.callbackURL || '/home';

    // Generate magic link
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
  const [email, callbackURL] = process.argv.slice(2);
  if (!email) {
    console.error('Usage: bun run scripts/generate-magic-link.ts <email> [callbackURL]');
    process.exit(1);
  }

  const result = await generateMagicLink({ email, callbackURL });

  if (result.success) {
    if (result.magicLinkPath) console.log(`MAGIC_LINK_PATH:${result.magicLinkPath}`);
    console.log('SUCCESS');
  } else {
    console.error('ERROR:', result.error);
    process.exit(1);
  }
}

if (require.main === module) main();
