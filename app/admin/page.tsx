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
  // Simulate 3 seconds of data fetching
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const stats = {
    totalUsers: 42,
    activeUsers: 38,
    bannedUsers: 2,
  };

  return <AdminDashboard stats={stats} />;
}
