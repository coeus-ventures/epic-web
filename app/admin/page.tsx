import { Suspense } from "react";
import { AdminDashboard } from "./components/admin-dashboard";
import { AdminDashboardSkeleton } from "./components/admin-dashboard-skeleton";

export default function AdminPage() {
  return (
    <Suspense fallback={<AdminDashboardSkeleton />}>
      <AdminDashboardWrapper />
    </Suspense>
  );
}

async function AdminDashboardWrapper() {
  const stats = {
    totalUsers: 42,
    activeUsers: 38,
    bannedUsers: 2,
  };

  return <AdminDashboard stats={stats} />;
}
