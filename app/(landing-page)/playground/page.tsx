"use client";

import { useHello } from "./behaviors/hello-world/use-hello";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Loader2 } from "lucide-react";

export default function PlaygroundPage() {
  const { state, formAction, isLoading } = useHello();

  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
            <FlaskConical className="h-4 w-4" />
            <span>Playground - AutoTracer Test</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Hello World Behavior
          </h1>
          <p className="text-muted-foreground">
            Teste a arquitetura Behave.js e o plugin de instrumentação AutoTracer
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Testar Server Action</CardTitle>
            <CardDescription>
              Digite um nome e clique em &quot;Testar Trace&quot; para validar o fluxo
              completo: Hook → Action → Response
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Digite seu nome..."
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  "Testar Trace"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {state.error && (
          <Card className="border-destructive/20 bg-destructive/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Badge variant="destructive">Erro</Badge>
                <p className="text-sm text-destructive">
                  {state.error}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {state.result && (
          <Card className="border-success/20 bg-success/10">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge className="bg-success text-primary-foreground">Sucesso</Badge>
                <CardTitle className="text-lg text-success">
                  Resposta do Servidor
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-card p-4 border border-success/20">
                <p className="text-xl font-semibold text-foreground">
                  {state.result.message}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Server Time:</span>
                <code className="bg-muted px-2 py-1 rounded">
                  {new Date(state.result.serverTime).toISOString()}
                </code>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Informações de Debug
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Behavior:</span>
                <code className="ml-2 bg-muted px-2 py-0.5 rounded">
                  hello-world
                </code>
              </div>
              <div>
                <span className="text-muted-foreground">Page Layer:</span>
                <code className="ml-2 bg-muted px-2 py-0.5 rounded">
                  component
                </code>
              </div>
              <div>
                <span className="text-muted-foreground">Hook Layer:</span>
                <code className="ml-2 bg-muted px-2 py-0.5 rounded">
                  hook
                </code>
              </div>
              <div>
                <span className="text-muted-foreground">Action Layer:</span>
                <code className="ml-2 bg-muted px-2 py-0.5 rounded">
                  server-action
                </code>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground/70">
              Verifique <code>logs/debug.log</code> após clicar em &quot;Testar Trace&quot;
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
