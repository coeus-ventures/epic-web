import { Suspense } from "react";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HOME_URL } from "@/app.config";
import { AuthHeader } from "./components/auth-header";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getUser();

  if (user) {
    redirect(HOME_URL);
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <Suspense fallback={null}>
        <AuthHeader />
      </Suspense>
      {children}
    </div>
  );
}
