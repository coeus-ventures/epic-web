import { atom } from "jotai";
import { IframeAuthStatus } from "./use-iframe-auth-notifier";

export interface IframeAuthState extends IframeAuthStatus {
  isPending: boolean;
}

/**
 * Stores the current authentication status for iframe communication.
 * Used by useIframeAuthNotifier to track and notify auth state changes.
 */
export const iframeAuthState = atom<IframeAuthState>({
  isAdmin: false,
  isAuthenticated: false,
  isPending: true,
});
