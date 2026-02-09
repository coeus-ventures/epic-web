"use client";

import { useIframeAuthNotifier } from "./use-iframe-auth-notifier";

/**
 * Notifies parent window (behave) about iframe authentication status.
 * Place once in the root layout — covers all pages.
 */
export function IframeAuthNotifier() {
  useIframeAuthNotifier();
  return null;
}
