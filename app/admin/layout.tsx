import { getUser } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";
import { IframeAuthNotifier } from "./behaviors/iframe-auth-notifier/iframe-auth-notifier";
import { AdminAccessDenied } from "./components/admin-access-denied";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getUser();

  const isAdmin = user?.role === "admin";

  return (
    <div className="min-h-screen bg-background">
      <IframeAuthNotifier />
      {isAdmin ? (
        <div className="h-full">{children}</div>
      ) : (
        <AdminAccessDenied />
      )}
      <Toaster />
    </div>
  );
}
