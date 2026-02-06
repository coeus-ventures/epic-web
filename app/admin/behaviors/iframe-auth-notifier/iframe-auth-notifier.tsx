'use client';

import { useIframeAuthNotifier } from './use-iframe-auth-notifier';

/**
 * Notifies parent window about iframe authentication status.
 * Manages authentication state and postMessage communication.
 */
export function IframeAuthNotifier() {
  useIframeAuthNotifier();
  return null;
}
