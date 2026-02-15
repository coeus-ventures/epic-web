"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth/client";

/**
 * Notifies parent window (behave) about iframe authentication status.
 *
 * Uses manual subscription to the session atom instead of useSession() hook
 * to avoid infinite render loops when there's no active session.
 * Only sends postMessage when auth state actually changes.
 */
export function useIframeAuthNotifier() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.parent === window) return;

    let lastKey: string | null = null;

    const unsubscribe = authClient.$store.atoms.session.subscribe((value) => {
      if (value.isPending) return;

      const isAdmin = value.data?.user?.role === "admin";
      const isAuthenticated = !!value.data;
      const key = `${isAdmin}:${isAuthenticated}`;

      if (lastKey === key) return;
      lastKey = key;

      window.parent.postMessage(
        { type: "admin-auth-status", isAdmin, isAuthenticated },
        "*"
      );
    });

    return unsubscribe;
  }, []);
}
