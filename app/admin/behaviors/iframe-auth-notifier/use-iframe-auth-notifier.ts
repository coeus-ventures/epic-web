'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { authClient } from '@/lib/auth/client';
import { iframeAuthState } from './state';

/**
 * Manages iframe authentication status and notifies parent window.
 * - Updates local state (Jotai)
 * - Sends postMessage to parent with auth status
 */
export function useIframeAuthNotifier() {
  const { data: session, isPending } = authClient.useSession();
  const [, setAuthState] = useAtom(iframeAuthState);

  const isAdmin = session?.user?.role === 'admin';
  const isAuthenticated = !!session;

  // Update local state and notify parent iframe
  useEffect(() => {
    if (isPending) return;
    if (window.parent === window) return; // Not in iframe

    // Update local Jotai state
    setAuthState({
      isAdmin,
      isAuthenticated,
      isPending: false,
    });

    // Notify parent window
    window.parent.postMessage(
      {
        type: 'admin-auth-status',
        isAdmin,
        isAuthenticated,
      },
      window.location.origin
    );
  }, [isAdmin, isAuthenticated, isPending, setAuthState]);

  return {
    isAdmin,
    isAuthenticated,
    isPending,
  };
}
