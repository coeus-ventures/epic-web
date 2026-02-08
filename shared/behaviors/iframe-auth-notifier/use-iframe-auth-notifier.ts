"use client";

import { useEffect, useMemo } from "react";
import { useAtom } from "jotai";
import { authClient } from "@/lib/auth/client";
import { iframeAuthState } from "./state";

export interface IframeAuthStatus {
  isAdmin: boolean;
  isAuthenticated: boolean;
}

interface UseIframeAuthNotifierOptions extends Partial<IframeAuthStatus> {
  /**
   * When true, observes auth session and notifies on changes.
   * When false/undefined, uses provided isAdmin/isAuthenticated values.
   */
  observeSession?: boolean;
}

/**
 * Notifies parent window (behave) about iframe authentication status.
 *
 * ## Modes
 *
 * **Auto mode** (default): Observes auth session, notifies on changes
 * ```ts
 * useIframeAuthNotifier(); // or { observeSession: true }
 * ```
 *
 * **Manual mode**: Notifies with fixed values (useful for signin page after logout)
 * ```ts
 * useIframeAuthNotifier({ isAdmin: false, isAuthenticated: false });
 * ```
 */
export function useIframeAuthNotifier(
  options: UseIframeAuthNotifierOptions = {}
) {
  const { observeSession = false, ...manualStatus } = options;

  const session = authClient.useSession();
  const [, setAuthState] = useAtom(iframeAuthState);

  // Determine status based on mode
  const status: IframeAuthStatus = useMemo(
    () =>
      observeSession
        ? {
            isAdmin: session.data?.user?.role === "admin",
            isAuthenticated: !!session.data,
          }
        : {
            isAdmin: manualStatus.isAdmin ?? false,
            isAuthenticated: manualStatus.isAuthenticated ?? false,
          },
    [
      observeSession,
      session.data,
      manualStatus.isAdmin,
      manualStatus.isAuthenticated,
    ]
  );

  const isPending = observeSession && session.isPending;

  useEffect(() => {
    if (isPending) return;
    if (typeof window === "undefined") return;
    if (window.parent === window) return; // Not in iframe

    // Update local state
    setAuthState({
      ...status,
      isPending: false,
    });

    // Notify parent window
    window.parent.postMessage(
      {
        type: "admin-auth-status",
        ...status,
      },
      "*"
    );
  }, [status, isPending, setAuthState]);

  return {
    ...status,
    isPending,
  };
}
