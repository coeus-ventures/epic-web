import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('@/lib/auth', () => ({
  auth: {
    api: {
      createUser: vi.fn(),
    },
  },
}));

import { createAdmin } from '../create-admin';
import { auth } from '@/lib/auth';

describe('createAdmin', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create admin user successfully', async () => {
    vi.mocked(auth.api.createUser).mockResolvedValue({
      user: {
        id: 'user-123',
        email: 'admin@example.com',
        name: 'Admin',
        role: 'admin',
      },
    });

    const result = await createAdmin({
      email: 'admin@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
    expect(auth.api.createUser).toHaveBeenCalledWith({
      body: {
        email: 'admin@example.com',
        password: 'password123',
        name: 'Admin',
        role: 'admin',
      },
    });
  });

  it('should return error when user already exists', async () => {
    vi.mocked(auth.api.createUser).mockRejectedValue(
      new Error('USER_ALREADY_EXISTS')
    );

    const result = await createAdmin({
      email: 'existing@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('USER_ALREADY_EXISTS');
  });

  it('should handle non-Error exceptions', async () => {
    vi.mocked(auth.api.createUser).mockRejectedValue('Unknown error');

    const result = await createAdmin({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('Unknown error');
  });
});
