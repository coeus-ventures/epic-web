"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth/client";

export function useIframeAuthNotifier() {
  useEffect(() => {
    if (window.parent === window) return;

    let lastKey: string | null = null;

    return authClient.$store.atoms.session.subscribe((value) => {
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
  }, []);
}
