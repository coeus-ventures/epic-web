'use client'

import { Spinner } from '@/components/ui/spinner'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="mb-6 text-2xl font-semibold text-foreground">{title}</h2>
      {children}
      <Separator className="my-12" />
    </section>
  )
}

function ComponentPreview({
  title,
  children,
  code,
}: {
  title: string
  children: React.ReactNode
  code: string
}) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-foreground">{title}</h4>
      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
        {children}
      </div>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function PropsTable({
  props,
}: {
  props: Array<{
    name: string
    type: string
    default?: string
    description: string
  }>
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 text-left font-medium">Prop</th>
            <th className="py-3 pr-4 text-left font-medium">Type</th>
            <th className="py-3 pr-4 text-left font-medium">Default</th>
            <th className="py-3 text-left font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border">
              <td className="py-3 pr-4 font-mono text-xs text-primary">
                {prop.name}
              </td>
              <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">
                {prop.type}
              </td>
              <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">
                {prop.default ?? '-'}
              </td>
              <td className="py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SpinnerPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Spinner
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An animated loading indicator for in-progress operations.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Spinner component displays an animated circular loading
            indicator. It's built using the Lucide Loader2 icon with a
            spinning animation.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to indicate that an action is in
            progress, such as form submission, data fetching, or any operation
            that requires user waiting.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Spinner</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              An SVG spinner icon with rotating animation. Includes
              accessibility attributes for screen readers.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Spinner } from '@/components/ui/spinner'`}</code>
        </pre>
      </Section>

      {/* Sizes */}
      <Section id="sizes" title="Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Default Size (16px)"
            code="<Spinner />"
          >
            <Spinner />
          </ComponentPreview>

          <ComponentPreview
            title="Small (12px)"
            code='<Spinner className="size-3" />'
          >
            <Spinner className="size-3" />
          </ComponentPreview>

          <ComponentPreview
            title="Medium (20px)"
            code='<Spinner className="size-5" />'
          >
            <Spinner className="size-5" />
          </ComponentPreview>

          <ComponentPreview
            title="Large (24px)"
            code='<Spinner className="size-6" />'
          >
            <Spinner className="size-6" />
          </ComponentPreview>

          <ComponentPreview
            title="Extra Large (32px)"
            code='<Spinner className="size-8" />'
          >
            <Spinner className="size-8" />
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description:
                'CSS classes to control size, color, and other styling.',
            },
          ]}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Spinner also accepts all standard SVG element props.
        </p>
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="In a Button (Loading State)"
            code={`<Button disabled>
  <Spinner />
  Loading...
</Button>`}
          >
            <Button disabled>
              <Spinner />
              Loading...
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Colored Spinner"
            code={`<Spinner className="text-primary" />
<Spinner className="text-destructive" />
<Spinner className="text-muted-foreground" />`}
          >
            <Spinner className="text-primary" />
            <Spinner className="text-destructive" />
            <Spinner className="text-muted-foreground" />
          </ComponentPreview>

          <ComponentPreview
            title="Centered Loading State"
            code={`<div className="flex h-32 w-full items-center justify-center">
  <Spinner className="size-8" />
</div>`}
          >
            <div className="flex h-32 w-full items-center justify-center">
              <Spinner className="size-8" />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Loading Text"
            code={`<div className="flex items-center gap-2">
  <Spinner />
  <span className="text-sm text-muted-foreground">Loading data...</span>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Spinner />
              <span className="text-sm text-muted-foreground">
                Loading data...
              </span>
            </div>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { Spinner } from '@/components/ui/spinner'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Default
<Spinner />

// Custom size
<Spinner className="size-6" />

// In button
<Button disabled>
  <Spinner />
  Loading
</Button>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Default size is{' '}
                <code className="rounded bg-muted px-1">size-4</code> (16px)
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">animate-spin</code> for
                rotation animation
              </li>
              <li>
                Built on Lucide's{' '}
                <code className="rounded bg-muted px-1">Loader2Icon</code>
              </li>
              <li>
                Includes{' '}
                <code className="rounded bg-muted px-1">
                  role=&quot;status&quot;
                </code>{' '}
                and{' '}
                <code className="rounded bg-muted px-1">
                  aria-label=&quot;Loading&quot;
                </code>{' '}
                for accessibility
              </li>
              <li>
                Change size with{' '}
                <code className="rounded bg-muted px-1">size-*</code> classes
              </li>
              <li>
                Change color with{' '}
                <code className="rounded bg-muted px-1">text-*</code> classes
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Inherits color from parent's{' '}
                <code className="rounded bg-muted px-1">color</code> property
              </li>
              <li>
                Override with{' '}
                <code className="rounded bg-muted px-1">text-primary</code>,{' '}
                <code className="rounded bg-muted px-1">text-destructive</code>,
                etc.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Button loading state
<Button disabled={isLoading}>
  {isLoading && <Spinner />}
  {isLoading ? 'Saving...' : 'Save'}
</Button>

// Full page loading
<div className="flex min-h-screen items-center justify-center">
  <Spinner className="size-8" />
</div>

// Inline loading indicator
<div className="flex items-center gap-2">
  <Spinner className="size-3" />
  <span className="text-xs">Syncing...</span>
</div>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
