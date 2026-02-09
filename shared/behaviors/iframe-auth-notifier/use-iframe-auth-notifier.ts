"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth/client";

/**
 * Notifies parent window (behave) about iframe authentication status.
 * Uses useSession() to observe auth changes and sends postMessage to parent.
 *
 * - isPending: session still loading, don't notify yet
 * - data is null: user not logged in → isAdmin: false
 * - data exists: check user.role for admin status
 */
export function useIframeAuthNotifier() {
  const session = authClient.useSession();

  const isPending = session.isPending;
  const isAdmin = session.data?.user?.role === "admin";
  const isAuthenticated = !!session.data;

  useEffect(() => {
    if (isPending) return;
    if (typeof window === "undefined") return;
    if (window.parent === window) return;

    window.parent.postMessage(
      {
        type: "admin-auth-status",
        isAdmin,
        isAuthenticated,
      },
      "*"
    );
  }, [isPending, isAdmin, isAuthenticated]);
}
