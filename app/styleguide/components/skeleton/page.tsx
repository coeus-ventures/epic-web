'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

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

export default function SkeletonPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Skeleton
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A placeholder element with a pulsing animation for loading states.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Skeleton component provides a visual placeholder while content
            is loading. It displays an animated pulse effect to indicate that
            data is being fetched.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to show loading states for
            content that takes time to fetch, improving perceived performance
            and user experience.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Skeleton</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A simple div with a muted background and pulse animation. Size and
              shape are controlled entirely via className.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Skeleton } from '@/components/ui/skeleton'`}</code>
        </pre>
      </Section>

      {/* Common Shapes */}
      <Section id="shapes" title="Common Shapes">
        <div className="space-y-8">
          <ComponentPreview
            title="Rectangle (Text Line)"
            code='<Skeleton className="h-4 w-[250px]" />'
          >
            <Skeleton className="h-4 w-[250px]" />
          </ComponentPreview>

          <ComponentPreview
            title="Circle (Avatar)"
            code='<Skeleton className="size-12 rounded-full" />'
          >
            <Skeleton className="size-12 rounded-full" />
          </ComponentPreview>

          <ComponentPreview
            title="Square (Image)"
            code='<Skeleton className="size-24 rounded-md" />'
          >
            <Skeleton className="size-24 rounded-md" />
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
                'CSS classes to control size, shape, and other styling.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="Card Skeleton"
            code={`<div className="flex items-center space-x-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
          >
            <div className="flex items-center space-x-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Article Skeleton"
            code={`<div className="space-y-4">
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-2/3" />
</div>`}
          >
            <div className="w-full space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Table Row Skeleton"
            code={`<div className="space-y-3">
  <div className="flex items-center gap-4">
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-4 w-[60px]" />
  </div>
  <div className="flex items-center gap-4">
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-4 w-[60px]" />
  </div>
</div>`}
          >
            <div className="w-full space-y-3">
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-[80px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[60px]" />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-[80px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[60px]" />
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Image Gallery Skeleton"
            code={`<div className="grid grid-cols-3 gap-4">
  <Skeleton className="aspect-square rounded-lg" />
  <Skeleton className="aspect-square rounded-lg" />
  <Skeleton className="aspect-square rounded-lg" />
</div>`}
          >
            <div className="grid w-full grid-cols-3 gap-4">
              <Skeleton className="aspect-square rounded-lg" />
              <Skeleton className="aspect-square rounded-lg" />
              <Skeleton className="aspect-square rounded-lg" />
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
              <code>{`import { Skeleton } from '@/components/ui/skeleton'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Text line
<Skeleton className="h-4 w-[200px]" />

// Avatar
<Skeleton className="size-10 rounded-full" />

// Card
<Skeleton className="h-32 w-full rounded-lg" />`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Skeleton is a simple div - all sizing is done via{' '}
                <code className="rounded bg-muted px-1">className</code>
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">animate-pulse</code> for
                the loading animation
              </li>
              <li>
                Default border radius is{' '}
                <code className="rounded bg-muted px-1">rounded-md</code>
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">rounded-full</code>{' '}
                for circular skeletons
              </li>
              <li>
                Match skeleton dimensions to the actual content for seamless
                loading
              </li>
              <li>
                Combine multiple Skeletons to create complex loading layouts
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--muted</code> for
                skeleton background color
              </li>
              <li>
                Change color with{' '}
                <code className="rounded bg-muted px-1">
                  className=&quot;bg-primary/10&quot;
                </code>
              </li>
              <li>
                Disable animation with{' '}
                <code className="rounded bg-muted px-1">
                  className=&quot;animate-none&quot;
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Profile card loading state
<div className="flex gap-4">
  <Skeleton className="size-16 rounded-full" />
  <div className="flex-1 space-y-2">
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-3 w-3/4" />
  </div>
</div>

// Conditional rendering
{isLoading ? (
  <Skeleton className="h-10 w-full" />
) : (
  <Button>Submit</Button>
)}`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
