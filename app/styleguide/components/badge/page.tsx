'use client'

import { Badge, badgeVariants } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { X, Check, AlertCircle } from 'lucide-react'

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

export default function BadgePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Badge
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a badge or label with various visual styles.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Badge component is a small, inline element used to highlight
            status, labels, or counts. It supports multiple visual variants for
            different semantic meanings.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display status indicators,
            category labels, notification counts, or any small piece of
            supplementary information.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Badge</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main badge component. Renders as a span by default but can be
              rendered as any element using the render prop.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">badgeVariants</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A function that generates badge class names based on variant.
              Useful for styling other elements as badges.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Badge, badgeVariants } from '@/components/ui/badge'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code='<Badge variant="default">Default</Badge>'
          >
            <Badge variant="default">Default</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Secondary"
            code='<Badge variant="secondary">Secondary</Badge>'
          >
            <Badge variant="secondary">Secondary</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Destructive"
            code='<Badge variant="destructive">Destructive</Badge>'
          >
            <Badge variant="destructive">Destructive</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Outline"
            code='<Badge variant="outline">Outline</Badge>'
          >
            <Badge variant="outline">Outline</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Ghost"
            code='<Badge variant="ghost">Ghost</Badge>'
          >
            <Badge variant="ghost">Ghost</Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Link"
            code='<Badge variant="link">Link</Badge>'
          >
            <Badge variant="link">Link</Badge>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
              default: '"default"',
              description: 'The visual style variant of the badge.',
            },
            {
              name: 'render',
              type: 'React.ReactElement',
              description:
                'Render the badge as a different element (e.g., anchor).',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'The content of the badge.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="With Icon (Start)"
            code={`<Badge>
  <Check data-icon="inline-start" />
  Verified
</Badge>`}
          >
            <Badge>
              <Check data-icon="inline-start" />
              Verified
            </Badge>
          </ComponentPreview>

          <ComponentPreview
            title="With Icon (End)"
            code={`<Badge variant="outline">
  Dismiss
  <X data-icon="inline-end" />
</Badge>`}
          >
            <Badge variant="outline">
              Dismiss
              <X data-icon="inline-end" />
            </Badge>
          </ComponentPreview>

          <ComponentPreview
            title="Status Indicators"
            code={`<Badge variant="default">Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">
  <AlertCircle data-icon="inline-start" />
  Error
</Badge>`}
          >
            <Badge variant="default">Active</Badge>
            <Badge variant="secondary">Pending</Badge>
            <Badge variant="destructive">
              <AlertCircle data-icon="inline-start" />
              Error
            </Badge>
          </ComponentPreview>

          <ComponentPreview
            title="As Link (using render prop)"
            code={`<Badge variant="link" render={<a href="#" />}>
  Learn more
</Badge>`}
          >
            <Badge
              variant="link"
              render={<a href="#" onClick={(e) => e.preventDefault()} />}
            >
              Learn more
            </Badge>
          </ComponentPreview>

          <ComponentPreview
            title="All Variants Together"
            code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="link">Link</Badge>`}
          >
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { Badge, badgeVariants } from '@/components/ui/badge'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Badge variant="default">Label</Badge>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Badge renders as a{' '}
                <code className="rounded bg-muted px-1">span</code> by default
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">data-icon</code>{' '}
                attribute for proper icon spacing:{' '}
                <code className="rounded bg-muted px-1">
                  data-icon=&quot;inline-start&quot;
                </code>{' '}
                or{' '}
                <code className="rounded bg-muted px-1">
                  data-icon=&quot;inline-end&quot;
                </code>
              </li>
              <li>
                Icons automatically size to 12px via{' '}
                <code className="rounded bg-muted px-1">[&_svg]:size-3</code>
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">render</code> prop
                to render as a different element (e.g., anchor tag)
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">badgeVariants</code> to
                style non-badge elements
              </li>
              <li>
                Available variants:{' '}
                <code className="rounded bg-muted px-1">default</code>,{' '}
                <code className="rounded bg-muted px-1">secondary</code>,{' '}
                <code className="rounded bg-muted px-1">destructive</code>,{' '}
                <code className="rounded bg-muted px-1">outline</code>,{' '}
                <code className="rounded bg-muted px-1">ghost</code>,{' '}
                <code className="rounded bg-muted px-1">link</code>
              </li>
              <li>
                Component uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/use-render
                </code>{' '}
                for flexible rendering
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              The badge uses semantic color tokens. Customize via className:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--primary</code> for
                default variant background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--secondary</code> for
                secondary variant background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--destructive</code> for
                destructive variant
              </li>
              <li>
                <code className="rounded bg-muted px-1">--border</code> for
                outline variant border
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Status badge
<Badge variant={status === 'active' ? 'default' : 'secondary'}>
  {status}
</Badge>

// Notification count
<Badge variant="destructive">3</Badge>

// Clickable badge (as link)
<Badge variant="outline" render={<a href="/tags/react" />}>
  React
</Badge>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
