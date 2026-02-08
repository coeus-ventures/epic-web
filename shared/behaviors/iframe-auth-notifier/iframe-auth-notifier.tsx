"use client";

import {
  useIframeAuthNotifier,
  IframeAuthStatus,
} from "./use-iframe-auth-notifier";

interface IframeAuthNotifierProps extends Partial<IframeAuthStatus> {
  /**
   * When true, observes auth session and notifies on changes.
   * When false (default), uses provided isAdmin/isAuthenticated values.
   */
  observeSession?: boolean;
}

/**
 * Notifies parent window (behave) about iframe authentication status.
 *
 * ## Usage
 *
 * **Auto mode**: Observes auth session, notifies on changes
 * ```tsx
 * // In admin layout - reacts to login/logout
 * <IframeAuthNotifier observeSession />
 * ```
 *
 * **Manual mode**: Notifies once with fixed values
 * ```tsx
 * // In signin page - immediately tells parent user is logged out
 * <IframeAuthNotifier isAdmin={false} isAuthenticated={false} />
 * ```
 */
export function IframeAuthNotifier({
  observeSession = false,
  isAdmin,
  isAuthenticated,
}: IframeAuthNotifierProps) {
  useIframeAuthNotifier({
    observeSession,
    isAdmin,
    isAuthenticated,
  });

  return null;
}
