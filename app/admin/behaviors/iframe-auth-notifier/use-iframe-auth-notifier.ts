"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth/client";
import { notifyParent } from "./notify-parent";

export function useIframeAuthNotifier() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;
    notifyParent(session?.user?.role === "admin");
  }, [session, isPending]);
}
