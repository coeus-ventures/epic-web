import { Suspense } from "react";
import { AdminDashboard } from "./components/admin-dashboard";
import { AdminDashboardSkeleton } from "./components/admin-dashboard-skeleton";
import { getAdminStats } from "./behaviors/admin-stats/admin-stats.action";

export default function AdminPage() {
  return (
    <Suspense fallback={<AdminDashboardSkeleton />}>
      <AdminDashboardContent />
    </Suspense>
  );
}

async function AdminDashboardContent() {
  const stats = await getAdminStats();

  return <AdminDashboard stats={stats} />;
}
