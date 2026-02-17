"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth/client";

export function useIframeAuthNotifier() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending || window.parent === window) return;

    window.parent.postMessage(
      { type: "admin-auth-status", isAdmin: session?.user?.role === "admin" },
      window.location.origin
    );
  }, [session, isPending]);
}
