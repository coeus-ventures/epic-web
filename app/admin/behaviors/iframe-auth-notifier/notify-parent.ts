export function notifyParent(isAdmin: boolean) {
  if (typeof window === "undefined" || window.parent === window) return;
  window.parent.postMessage({ type: "admin-auth-status", isAdmin }, "*");
}
