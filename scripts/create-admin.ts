import { auth } from '../lib/auth';

export interface CreateAdminInput {
  email: string;
  password: string;
}

export interface CreateAdminResult {
  success: boolean;
  error?: string;
}

export async function createAdmin(
  input: CreateAdminInput
): Promise<CreateAdminResult> {
  try {
    await auth.api.createUser({
      body: {
        email: input.email,
        password: input.password,
        name: 'Admin',
        role: 'admin',
      },
    });
    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

async function main() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error(
      'ERROR: Usage: npx tsx scripts/create-admin.ts <email> <password>'
    );
    process.exit(1);
  }

  const result = await createAdmin({ email, password });

  if (result.success) {
    console.log('SUCCESS');
  } else {
    console.error('ERROR:', result.error);
    process.exit(1);
  }
}

// Only run main when executed directly (not when imported)
if (require.main === module) {
  main();
}
