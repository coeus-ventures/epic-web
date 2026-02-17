"use client";

import { useEffect, useRef } from "react";
import { authClient } from "@/lib/auth/client";

export function useIframeAuthNotifier() {
  const statusRef = useRef({ isAdmin: false, isAuthenticated: false });

  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    const postStatus = () => {
      window.parent.postMessage(
        {
          type: "admin-auth-status",
          isAdmin: statusRef.current.isAdmin,
          isAuthenticated: statusRef.current.isAuthenticated,
        },
        "*"
      );
    };

    // 1. Initial status sync
    const currentSession = authClient.$store.atoms.session.get();
    if (currentSession && !currentSession.isPending) {
      statusRef.current = {
        isAdmin: currentSession.data?.user?.role === "admin",
        isAuthenticated: !!currentSession.data,
      };
      postStatus();
    }

    // 2. Reactive Subscription
    const unsubscribe = authClient.$store.atoms.session.subscribe((value) => {
      if (value.isPending) return;

      const isAdmin = value.data?.user?.role === "admin";
      const isAuthenticated = !!value.data;

      // Update ref for heartbeat
      statusRef.current = { isAdmin, isAuthenticated };

      // Immediate notification
      postStatus();
    });

    // 3. Heartbeat (every 4 seconds)
    const intervalId = setInterval(postStatus, 4000);

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, []);
}
