import { getUser } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";
import { AdminAccessDenied } from "./components/admin-access-denied";
import { IframeAuthNotifier } from "./behaviors/iframe-auth-notifier/iframe-auth-notifier";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getUser();

  const isAdmin = user?.role === "admin";

  return (
    <div className="min-h-screen h-screen flex flex-col bg-background">
      <IframeAuthNotifier />
      {isAdmin ? (
        <div className="flex-1">{children}</div>
      ) : (
        <AdminAccessDenied />
      )}
      <Toaster />
    </div>
  );
}
