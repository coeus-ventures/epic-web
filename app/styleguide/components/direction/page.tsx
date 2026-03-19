'use client'

import { DirectionProvider, useDirection } from '@/components/ui/direction'
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
      <div className="flex flex-wrap items-start gap-4 rounded-lg border border-border bg-card p-6">
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

function DirectionDemo() {
  const direction = useDirection()
  return (
    <div className="flex items-center gap-2 rounded-md border border-border px-4 py-3">
      <span className="text-sm text-muted-foreground">Current direction:</span>
      <code className="rounded bg-muted px-2 py-1 text-xs font-medium">
        {direction}
      </code>
    </div>
  )
}

function RTLDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div className="space-y-4 rounded-lg border border-border p-4">
        <DirectionDemo />
        <div className="flex items-center gap-4" dir="rtl">
          <div className="rounded bg-primary px-3 py-2 text-sm text-primary-foreground">
            First
          </div>
          <div className="rounded bg-secondary px-3 py-2 text-sm text-secondary-foreground">
            Second
          </div>
          <div className="rounded bg-muted px-3 py-2 text-sm text-muted-foreground">
            Third
          </div>
        </div>
        <p className="text-sm text-muted-foreground" dir="rtl">
          هذا نص عربي للتوضيح — This text demonstrates RTL layout.
        </p>
      </div>
    </DirectionProvider>
  )
}

function LTRDemo() {
  return (
    <DirectionProvider direction="ltr">
      <div className="space-y-4 rounded-lg border border-border p-4">
        <DirectionDemo />
        <div className="flex items-center gap-4">
          <div className="rounded bg-primary px-3 py-2 text-sm text-primary-foreground">
            First
          </div>
          <div className="rounded bg-secondary px-3 py-2 text-sm text-secondary-foreground">
            Second
          </div>
          <div className="rounded bg-muted px-3 py-2 text-sm text-muted-foreground">
            Third
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          This text demonstrates standard LTR (left-to-right) layout.
        </p>
      </div>
    </DirectionProvider>
  )
}

export default function DirectionPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Direction
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Provides text direction context (LTR/RTL) to child components for
          internationalization support.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Direction utilities provide context for text direction,
            supporting left-to-right (LTR) and right-to-left (RTL) layouts.
            This is essential for internationalization when supporting
            languages like Arabic, Hebrew, or Persian.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Building applications that support RTL
            languages, creating components that need to adapt their layout
            based on text direction, or when UI primitives need direction
            awareness.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DirectionProvider</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A context provider that sets the text direction for all
              descendant components. Wrap your app or specific sections to
              control direction.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">useDirection</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A hook that returns the current direction from the nearest
              DirectionProvider. Returns &quot;ltr&quot; or &quot;rtl&quot;.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { DirectionProvider, useDirection } from '@/components/ui/direction'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Left-to-Right (LTR)"
            code={`<DirectionProvider direction="ltr">
  <div className="flex items-center gap-4">
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </div>
</DirectionProvider>`}
          >
            <LTRDemo />
          </ComponentPreview>

          <ComponentPreview
            title="Right-to-Left (RTL)"
            code={`<DirectionProvider direction="rtl">
  <div className="flex items-center gap-4" dir="rtl">
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </div>
</DirectionProvider>`}
          >
            <RTLDemo />
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 font-medium text-foreground">
              DirectionProvider
            </h4>
            <PropsTable
              props={[
                {
                  name: 'direction',
                  type: '"ltr" | "rtl"',
                  description:
                    'The text direction to provide to descendant components.',
                },
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'The components that will receive the direction context.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-3 font-medium text-foreground">useDirection</h4>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Returns:</strong>{' '}
                <code className="rounded bg-muted px-1">&quot;ltr&quot;</code> or{' '}
                <code className="rounded bg-muted px-1">&quot;rtl&quot;</code>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Hook that reads the current direction from the nearest
                DirectionProvider in the component tree.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="Reading Direction in a Component"
            code={`function MyComponent() {
  const direction = useDirection()

  return (
    <div style={{ textAlign: direction === 'rtl' ? 'right' : 'left' }}>
      Current direction: {direction}
    </div>
  )
}`}
          >
            <DirectionProvider direction="ltr">
              <DirectionDemo />
            </DirectionProvider>
          </ComponentPreview>

          <ComponentPreview
            title="App-Level Provider"
            code={`// In your root layout or app component
export default function RootLayout({ children }) {
  const locale = getLocale() // Your i18n logic
  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={direction}>
      <body>
        <DirectionProvider direction={direction}>
          {children}
        </DirectionProvider>
      </body>
    </html>
  )
}`}
          >
            <div className="w-full rounded-md border border-dashed border-border px-4 py-6 text-center text-sm text-muted-foreground">
              Wrap your entire app with DirectionProvider for global RTL support
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Conditional Styling Based on Direction"
            code={`function NavigationArrow() {
  const direction = useDirection()

  return (
    <ChevronRight
      className={cn(
        "h-4 w-4",
        direction === "rtl" && "rotate-180"
      )}
    />
  )
}`}
          >
            <div className="flex items-center gap-8">
              <DirectionProvider direction="ltr">
                <div className="flex items-center gap-2 text-sm">
                  <span>LTR:</span>
                  <span className="text-muted-foreground">Next</span>
                  <span>→</span>
                </div>
              </DirectionProvider>
              <DirectionProvider direction="rtl">
                <div className="flex items-center gap-2 text-sm" dir="rtl">
                  <span>RTL:</span>
                  <span className="text-muted-foreground">التالي</span>
                  <span>←</span>
                </div>
              </DirectionProvider>
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
              <code>{`import { DirectionProvider, useDirection } from '@/components/ui/direction'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Provider pattern
<DirectionProvider direction="rtl">
  <App />
</DirectionProvider>

// Reading direction in a component
function MyComponent() {
  const direction = useDirection()
  // direction is "ltr" or "rtl"
}`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Re-exports from{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/direction-provider
                </code>
              </li>
              <li>
                <code className="rounded bg-muted px-1">DirectionProvider</code>{' '}
                should wrap components that need direction awareness
              </li>
              <li>
                <code className="rounded bg-muted px-1">useDirection()</code>{' '}
                returns the current direction as a string
              </li>
              <li>
                Combine with HTML{' '}
                <code className="rounded bg-muted px-1">dir</code> attribute
                for proper browser RTL support
              </li>
              <li>
                Other Base UI / Radix components automatically read from this
                provider
              </li>
              <li>
                Direction only affects logical properties — you may still need{' '}
                <code className="rounded bg-muted px-1">dir=&quot;rtl&quot;</code>{' '}
                on DOM elements
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              RTL Best Practices
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Use CSS logical properties:{' '}
                <code className="rounded bg-muted px-1">margin-inline-start</code>{' '}
                instead of <code className="rounded bg-muted px-1">margin-left</code>
              </li>
              <li>
                Tailwind supports logical properties:{' '}
                <code className="rounded bg-muted px-1">ms-4</code> (margin-start),{' '}
                <code className="rounded bg-muted px-1">ps-4</code> (padding-start)
              </li>
              <li>
                Flip directional icons (arrows, chevrons) in RTL mode
              </li>
              <li>
                Set <code className="rounded bg-muted px-1">dir</code> attribute
                on html or root element for full browser support
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
