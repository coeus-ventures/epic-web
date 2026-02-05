'use client';

import { useEffect } from 'react';
import { authClient } from '@/lib/auth/client';

/**
 * Sends a postMessage to the parent window whenever the admin session state changes.
 * Used when the /admin route is embedded as an iframe inside Behave.
 *
 * Payload: { type: 'admin-auth-status', isAdmin: boolean }
 */
export function IframeAuthNotifier() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    // Don't send while session is still loading
    if (isPending) return;
    // Only send if we're inside an iframe
    if (window.parent === window) return;

    const isAdmin = session?.user?.role === 'admin';

    window.parent.postMessage(
      { type: 'admin-auth-status', isAdmin },
      '*'
    );
  }, [session, isPending]);

  return null;
}
