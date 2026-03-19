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
    <div className="min-h-screen bg-background">
      <Suspense fallback={null}>
        <AuthHeader />
      </Suspense>
      {children}
    </div>
  );
}
