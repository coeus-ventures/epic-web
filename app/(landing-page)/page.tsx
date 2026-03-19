import {
  Database,
  Zap,
  Shield,
  Package,
  TestTube,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Next.js 16",
      description:
        "Built on the latest Next.js with React 19, leveraging cutting-edge features and performance optimizations.",
    },
    {
      icon: Database,
      title: "Database Ready",
      description:
        "Drizzle ORM with SQLite for development and Turso support for production. Type-safe queries out of the box.",
    },
    {
      icon: TestTube,
      title: "Testing Included",
      description:
        "Vitest for unit testing and Playwright for E2E tests. Write reliable code with confidence.",
    },
    {
      icon: Package,
      title: "Bun Runtime",
      description:
        "Lightning-fast package manager and runtime. Install dependencies and run scripts in milliseconds.",
    },
    {
      icon: Shield,
      title: "Type Safe",
      description:
        "Full TypeScript support with strict type checking. Catch errors before they reach production.",
    },
    {
      icon: Sparkles,
      title: "Modern UI",
      description:
        "shadcn/ui components with Tailwind CSS. Build beautiful interfaces with accessible components.",
    },
  ];

  const techStack = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Drizzle ORM",
    "SQLite",
    "Vitest",
    "Playwright",
    "Bun",
    "shadcn/ui",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-24">
          <section className="space-y-8 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Production-Ready Boilerplate
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Epic Web Template
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A modern, type-safe web application starter with database
                integration, testing infrastructure, and beautiful UI
                components, built by Epic.new. Ship faster with confidence.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" nativeButton={false} render={<Link href="/auth/signin" />}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Documentation
              </Button>
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Everything You Need
              </h2>
              <p className="mt-2 text-muted-foreground">
                Built with modern tools and best practices
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border"
                  >
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Powerful Tech Stack
              </h2>
              <p className="mt-2 text-muted-foreground">
                Industry-leading tools and frameworks
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-secondary p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Ready to Build?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Get started in minutes with our comprehensive setup guide
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">Start Building</Button>
              <Button size="lg" variant="ghost">
                Learn More
              </Button>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Built with Next.js, Drizzle ORM, and shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
