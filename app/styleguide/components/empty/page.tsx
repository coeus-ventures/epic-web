'use client'

import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from '@/components/ui/empty'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Inbox, FileSearch, Users, Plus } from 'lucide-react'

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
      <div className="rounded-lg border border-border bg-card p-6">
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

export default function EmptyPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Empty
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A placeholder component for empty states with optional icon, title,
          description, and actions.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Empty component displays a centered message when there's no
            content to show. It provides a consistent pattern for empty states
            across your application with support for icons, titles, descriptions,
            and call-to-action buttons.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> A list or table has no items, search
            returns no results, a user hasn't created any content yet, or
            any section where content is expected but not present.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Empty</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container with centered content, dashed border, and
              padding.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">EmptyHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for the icon, title, and description.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">EmptyMedia</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for icons or images. Supports &quot;icon&quot; variant
              with background styling.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">EmptyTitle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main heading text for the empty state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">EmptyDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Secondary text providing more context or instructions.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">EmptyContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for actions like buttons or links.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from '@/components/ui/empty'`}</code>
        </pre>
      </Section>

      {/* Media Variants */}
      <Section id="variants" title="Media Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default (no background)"
            code={`<Empty>
  <EmptyHeader>
    <EmptyMedia>
      <Inbox className="size-12 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>Your inbox is empty.</EmptyDescription>
  </EmptyHeader>
</Empty>`}
          >
            <Empty>
              <EmptyHeader>
                <EmptyMedia>
                  <Inbox className="size-12 text-muted-foreground" />
                </EmptyMedia>
                <EmptyTitle>No messages</EmptyTitle>
                <EmptyDescription>Your inbox is empty.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </ComponentPreview>

          <ComponentPreview
            title="Icon Variant (with background)"
            code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>Your inbox is empty.</EmptyDescription>
  </EmptyHeader>
</Empty>`}
          >
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Inbox />
                </EmptyMedia>
                <EmptyTitle>No messages</EmptyTitle>
                <EmptyDescription>Your inbox is empty.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">EmptyMedia</h3>
            <PropsTable
              props={[
                {
                  name: 'variant',
                  type: '"default" | "icon"',
                  default: '"default"',
                  description:
                    'The visual style. "icon" adds a muted background.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes to apply.',
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="With Action Button"
            code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Users />
    </EmptyMedia>
    <EmptyTitle>No team members</EmptyTitle>
    <EmptyDescription>
      Get started by inviting your first team member.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>
      <Plus data-icon="inline-start" />
      Invite Member
    </Button>
  </EmptyContent>
</Empty>`}
          >
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Users />
                </EmptyMedia>
                <EmptyTitle>No team members</EmptyTitle>
                <EmptyDescription>
                  Get started by inviting your first team member.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button>
                  <Plus data-icon="inline-start" />
                  Invite Member
                </Button>
              </EmptyContent>
            </Empty>
          </ComponentPreview>

          <ComponentPreview
            title="Search No Results"
            code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FileSearch />
    </EmptyMedia>
    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>
      Try adjusting your search or filter to find what you're looking for.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline">Clear filters</Button>
  </EmptyContent>
</Empty>`}
          >
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileSearch />
                </EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>
                  Try adjusting your search or filter to find what you're
                  looking for.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="outline">Clear filters</Button>
              </EmptyContent>
            </Empty>
          </ComponentPreview>

          <ComponentPreview
            title="Minimal (title only)"
            code={`<Empty>
  <EmptyHeader>
    <EmptyTitle>No items</EmptyTitle>
  </EmptyHeader>
</Empty>`}
          >
            <Empty>
              <EmptyHeader>
                <EmptyTitle>No items</EmptyTitle>
              </EmptyHeader>
            </Empty>
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
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from '@/components/ui/empty'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>Title</EmptyTitle>
    <EmptyDescription>Description text.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Action</Button>
  </EmptyContent>
</Empty>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Empty has a dashed border and generous padding (
                <code className="rounded bg-muted px-1">p-12</code>)
              </li>
              <li>
                Content is always centered horizontally and vertically
              </li>
              <li>
                <code className="rounded bg-muted px-1">EmptyMedia</code> with{' '}
                <code className="rounded bg-muted px-1">
                  variant=&quot;icon&quot;
                </code>{' '}
                adds a 40px muted background circle
              </li>
              <li>
                Icons in EmptyMedia icon variant auto-size to 24px
              </li>
              <li>
                <code className="rounded bg-muted px-1">EmptyContent</code> has{' '}
                <code className="rounded bg-muted px-1">max-w-sm</code> and
                centers its children
              </li>
              <li>
                <code className="rounded bg-muted px-1">EmptyDescription</code>{' '}
                supports links with{' '}
                <code className="rounded bg-muted px-1">[&gt;a]</code> styling
              </li>
              <li>All sub-components are optional</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--muted</code> for icon
                variant background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--foreground</code> for
                icon variant icon color
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  --muted-foreground
                </code>{' '}
                for description text
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Conditional empty state
{items.length === 0 ? (
  <Empty>
    <EmptyHeader>
      <EmptyTitle>No items yet</EmptyTitle>
    </EmptyHeader>
  </Empty>
) : (
  <ItemList items={items} />
)}

// In a table
<TableBody>
  {items.length === 0 ? (
    <TableRow>
      <TableCell colSpan={columns.length}>
        <Empty>
          <EmptyTitle>No data</EmptyTitle>
        </Empty>
      </TableCell>
    </TableRow>
  ) : (
    items.map(item => <TableRow>...</TableRow>)
  )}
</TableBody>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
