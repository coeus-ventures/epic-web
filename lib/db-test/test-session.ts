import type { LibSQLDatabase } from "drizzle-orm/libsql";
import type { SelectUser, SelectSession } from "@/db/schema";

export type TestUserOptions = {
  id?: string;
  email?: string;
  name?: string;
  role?: "user" | "admin";
  emailVerified?: boolean;
  banned?: boolean;
};

export type TestSessionOptions = {
  id?: string;
  token?: string;
  expiresAt?: Date;
  ipAddress?: string;
  userAgent?: string;
  impersonatedBy?: string;
};

type SchemaWithUserAndSession = {
  user: unknown;
  session: unknown;
};

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}

/**
 * Creates a test user in the database
 */
export async function createTestUser<TSchema extends SchemaWithUserAndSession>(
  db: LibSQLDatabase<TSchema>,
  schema: TSchema,
  options?: TestUserOptions
): Promise<SelectUser> {
  const now = new Date();
  const user = {
    id: options?.id ?? generateId(),
    email: options?.email ?? `test-${generateId()}@example.com`,
    name: options?.name ?? "Test User",
    role: options?.role ?? "user",
    emailVerified: options?.emailVerified ?? true,
    banned: options?.banned ?? false,
    createdAt: now,
    updatedAt: now,
  };

  await db.insert(schema.user as Parameters<typeof db.insert>[0]).values(user);
  return user as SelectUser;
}

/**
 * Creates a test session for a user in the database
 */
export async function createTestSession<TSchema extends SchemaWithUserAndSession>(
  db: LibSQLDatabase<TSchema>,
  schema: TSchema,
  userId: string,
  options?: TestSessionOptions
): Promise<SelectSession> {
  const now = new Date();
  const session = {
    id: options?.id ?? generateId(),
    token: options?.token ?? generateId(),
    userId,
    expiresAt: options?.expiresAt ?? new Date(Date.now() + 24 * 60 * 60 * 1000),
    createdAt: now,
    updatedAt: now,
    ipAddress: options?.ipAddress ?? null,
    userAgent: options?.userAgent ?? null,
    impersonatedBy: options?.impersonatedBy ?? null,
  };

  await db.insert(schema.session as Parameters<typeof db.insert>[0]).values(session);
  return session as SelectSession;
}

/**
 * Creates a test user with a session and returns both
 */
export async function createTestUserWithSession<TSchema extends SchemaWithUserAndSession>(
  db: LibSQLDatabase<TSchema>,
  schema: TSchema,
  userOptions?: TestUserOptions,
  sessionOptions?: TestSessionOptions
): Promise<{ user: SelectUser; session: SelectSession }> {
  const user = await createTestUser(db, schema, userOptions);
  const session = await createTestSession(db, schema, user.id, sessionOptions);
  return { user, session };
}

/**
 * Creates a mock user object without database insertion
 */
export function createMockUser(options?: TestUserOptions): SelectUser {
  const now = new Date();
  return {
    id: options?.id ?? generateId(),
    email: options?.email ?? `test-${generateId()}@example.com`,
    name: options?.name ?? "Test User",
    role: options?.role ?? "user",
    emailVerified: options?.emailVerified ?? true,
    banned: options?.banned ?? false,
    banReason: null,
    banExpires: null,
    image: null,
    createdAt: now,
    updatedAt: now,
  };
}
