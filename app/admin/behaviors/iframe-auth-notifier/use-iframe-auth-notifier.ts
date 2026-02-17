"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth/client";

export function useIframeAuthNotifier() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;
    if (typeof window === "undefined") return;
    if (window.parent === window) return;

    window.parent.postMessage(
      {
        type: "admin-auth-status",
        isAdmin: session?.user?.role === "admin",
        isAuthenticated: !!session,
      },
      "*"
    );
  }, [session, isPending]);
}
