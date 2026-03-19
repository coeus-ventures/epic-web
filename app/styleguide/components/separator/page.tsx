'use client'

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

export default function SeparatorPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Separator
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Visually separates content with a horizontal or vertical line.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Separator component creates a visual divider between sections of
            content. It can be oriented horizontally or vertically and is built
            on top of Base UI's Separator primitive.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to visually separate content
            sections, navigation items, or create visual hierarchy in lists and
            menus.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Separator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The separator element. Renders as a div with appropriate ARIA
              attributes for accessibility.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Separator } from '@/components/ui/separator'`}</code>
        </pre>
      </Section>

      {/* Orientations */}
      <Section id="orientations" title="Orientations">
        <div className="space-y-8">
          <ComponentPreview
            title="Horizontal (default)"
            code={`<div>
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>`}
          >
            <div className="w-full space-y-4">
              <p>Content above</p>
              <Separator />
              <p>Content below</p>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code={`<div className="flex h-5 items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>`}
          >
            <div className="flex h-5 items-center gap-4">
              <span>Item 1</span>
              <Separator orientation="vertical" />
              <span>Item 2</span>
              <Separator orientation="vertical" />
              <span>Item 3</span>
            </div>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: 'The orientation of the separator.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="In a Card"
            code={`<Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>
  </CardHeader>
  <Separator />
  <CardContent>
    <p>Profile content...</p>
  </CardContent>
</Card>`}
          >
            <div className="w-full max-w-sm rounded-lg border bg-card p-4">
              <div className="font-medium">Profile</div>
              <Separator className="my-4" />
              <div className="text-sm text-muted-foreground">
                Profile content...
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Navigation Separator"
            code={`<nav className="flex h-5 items-center gap-4 text-sm">
  <a href="#">Home</a>
  <Separator orientation="vertical" />
  <a href="#">Products</a>
  <Separator orientation="vertical" />
  <a href="#">About</a>
</nav>`}
          >
            <nav className="flex h-5 items-center gap-4 text-sm">
              <a href="#" className="hover:underline">
                Home
              </a>
              <Separator orientation="vertical" />
              <a href="#" className="hover:underline">
                Products
              </a>
              <Separator orientation="vertical" />
              <a href="#" className="hover:underline">
                About
              </a>
            </nav>
          </ComponentPreview>

          <ComponentPreview
            title="With Custom Margin"
            code={`<div>
  <p>Section 1</p>
  <Separator className="my-8" />
  <p>Section 2</p>
</div>`}
          >
            <div className="w-full">
              <p>Section 1</p>
              <Separator className="my-8" />
              <p>Section 2</p>
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
              <code>{`import { Separator } from '@/components/ui/separator'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Horizontal
<Separator />

// Vertical (requires parent with height)
<div className="flex h-5 items-center gap-4">
  <span>A</span>
  <Separator orientation="vertical" />
  <span>B</span>
</div>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Horizontal separator:{' '}
                <code className="rounded bg-muted px-1">h-px w-full</code>
              </li>
              <li>
                Vertical separator:{' '}
                <code className="rounded bg-muted px-1">w-px self-stretch</code>
              </li>
              <li>
                Vertical separators need a parent with defined height to be
                visible
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/separator
                </code>{' '}
                with proper ARIA attributes
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">className</code> to
                add margin (e.g.,{' '}
                <code className="rounded bg-muted px-1">my-4</code>)
              </li>
              <li>
                No default margin - add your own spacing as needed
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--border</code> for
                separator color (uses bg-border)
              </li>
              <li>
                Override color with{' '}
                <code className="rounded bg-muted px-1">
                  className=&quot;bg-primary&quot;
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Section divider
<Separator className="my-8" />

// Breadcrumb-style navigation
<div className="flex items-center gap-2 text-sm">
  <span>Home</span>
  <Separator orientation="vertical" className="h-4" />
  <span>Products</span>
</div>

// In dropdown menus/lists
<DropdownMenuItem>Item 1</DropdownMenuItem>
<Separator className="my-1" />
<DropdownMenuItem>Item 2</DropdownMenuItem>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
