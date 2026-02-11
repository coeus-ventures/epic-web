import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('@/lib/auth', () => ({
  auth: {
    api: {
      signUpEmail: vi.fn(),
    },
  },
}));

vi.mock('@/db', () => ({
  db: {
    update: vi.fn(() => ({
      set: vi.fn(() => ({
        where: vi.fn(),
      })),
    })),
  },
}));

import { createAdmin } from '../create-admin';
import { auth } from '@/lib/auth';

describe('createAdmin', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv('BETTER_AUTH_SECRET', 'test-secret');
  });

  it('should create admin user successfully', async () => {
    vi.mocked(auth.api.signUpEmail).mockResolvedValue({} as any);

    const result = await createAdmin({
      email: 'admin@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
    expect(auth.api.signUpEmail).toHaveBeenCalledWith({
      headers: expect.any(Headers),
      body: {
        email: 'admin@example.com',
        password: 'password123',
        name: 'Admin',
      },
    });
  });

  it('should return error when signup throws non-USER_ALREADY_EXISTS error', async () => {
    vi.mocked(auth.api.signUpEmail).mockRejectedValue(
      new Error('UNKNOWN_ERROR')
    );

    const result = await createAdmin({
      email: 'existing@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('UNKNOWN_ERROR');
  });

  it('should handle non-Error exceptions', async () => {
    vi.mocked(auth.api.signUpEmail).mockRejectedValue('Unknown error');

    const result = await createAdmin({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('Unknown error');
  });
});
