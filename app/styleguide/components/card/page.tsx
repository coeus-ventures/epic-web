'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MoreHorizontal } from 'lucide-react'

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
      <div className="flex flex-wrap items-start gap-4 rounded-lg border border-border bg-background p-6">
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

export default function CardPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Card
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A container component for grouping related content and actions.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Card component is a flexible container used to display content
            in a visually distinct way. It provides structure for organizing
            information with headers, content, and footers.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to group related content like
            profile information, form sections, statistics, or any content that
            benefits from visual separation.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Card</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container. Supports two sizes: default and sm.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CardHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Contains the card title, description, and optional action button.
              Uses CSS grid for layout.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CardTitle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main heading of the card.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CardDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Secondary text that provides additional context.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CardAction</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for action buttons in the header, positioned to the
              right.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CardContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main content area of the card.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CardFooter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Footer area for actions or supplementary information.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card'`}</code>
        </pre>
      </Section>

      {/* Sizes */}
      <Section id="sizes" title="Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Default Size"
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="Small Size"
            code={`<Card size="sm">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
          >
            <Card size="sm" className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
            </Card>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'size',
              type: '"default" | "sm"',
              default: '"default"',
              description:
                'The size of the card. Affects padding and gap between sections.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'The content of the card.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="With Header Action"
            code={`<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>Manage your notification preferences.</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon">
        <MoreHorizontal />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Content goes here...</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Manage your notification preferences.
                </CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Content goes here...</p>
              </CardContent>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="With Footer"
            code={`<Card>
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Form fields go here...</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Form fields go here...</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="Simple Content Only"
            code={`<Card>
  <CardContent className="pt-6">
    <p>A simple card with just content.</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardContent className="pt-6">
                <p>A simple card with just content.</p>
              </CardContent>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="Stats Card"
            code={`<Card>
  <CardHeader>
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-3xl font-bold">$45,231.89</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">
      +20.1% from last month
    </p>
  </CardContent>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl font-bold">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Card is a flex column container with{' '}
                <code className="rounded bg-muted px-1">gap-6</code> (default)
                or <code className="rounded bg-muted px-1">gap-4</code> (sm)
              </li>
              <li>
                Available sizes:{' '}
                <code className="rounded bg-muted px-1">default</code> (py-6,
                px-6) and <code className="rounded bg-muted px-1">sm</code>{' '}
                (py-4, px-4)
              </li>
              <li>
                <code className="rounded bg-muted px-1">CardHeader</code> uses
                CSS grid to position{' '}
                <code className="rounded bg-muted px-1">CardAction</code> to the
                right
              </li>
              <li>
                When using{' '}
                <code className="rounded bg-muted px-1">CardContent</code>{' '}
                without a header, add{' '}
                <code className="rounded bg-muted px-1">pt-6</code> for proper
                spacing
              </li>
              <li>
                Card supports images as first child - they automatically get
                rounded corners
              </li>
              <li>
                All sub-components are optional - use only what you need
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--card</code> for
                background color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--card-foreground</code>{' '}
                for text color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--foreground</code> with
                10% opacity for ring/border
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Card with image
<Card>
  <img src="cover.jpg" alt="Cover" />
  <CardHeader>
    <CardTitle>Article Title</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>

// Stats/metric card
<Card>
  <CardHeader>
    <CardDescription>Metric Name</CardDescription>
    <CardTitle className="text-3xl">$1,234</CardTitle>
  </CardHeader>
</Card>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
