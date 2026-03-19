import Link from "next/link";
import SignUpForm from "./components/signup-form";
import { HOME_URL } from "@/app.config";

interface SignUpPageProps {
  searchParams: Promise<{
    redirectTo?: string;
  }>;
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const params = await searchParams;
  const redirectURL = params.redirectTo;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full pt-16 pb-24">
        {/* Info badge */}
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-8">
          <span className="text-muted-foreground">
            This is a placeholder for your Signup Page. Customize it!
          </span>
        </div>

        <div className="w-full max-w-md">
          <div className="border border-border rounded-lg bg-card p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground">
                Create Account
              </h1>
            </div>
            <SignUpForm redirectURL={redirectURL || HOME_URL} />
          </div>

          <div className="mt-8 border border-border rounded-lg p-4 bg-card">
            <p className="text-xs text-card-foreground/70 text-center">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="underline hover:text-foreground font-medium"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline hover:text-foreground font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
