import { atom } from 'jotai';

export const iframeAuthState = atom({
  isAdmin: false,
  isAuthenticated: false,
  isPending: true,
});
