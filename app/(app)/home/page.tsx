import { FileText } from "lucide-react";

export default async function HomePage() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border-2 border-dashed border-border p-16 sm:p-24 text-center min-h-[500px] flex flex-col items-center justify-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <FileText className="h-10 w-10 text-muted-foreground" />
          </div>

          <h1 className="mt-8 text-3xl font-semibold text-foreground">
            Welcome to Home Page
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-md">
            This is the first page users will see after logging in. Start
            building your application here.
          </p>
        </div>
      </div>
    </main>
  );
}
