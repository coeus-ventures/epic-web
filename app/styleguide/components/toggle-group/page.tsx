'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Separator } from '@/components/ui/separator'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  LayoutGrid,
} from 'lucide-react'

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

export default function ToggleGroupPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Toggle Group
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A set of connected toggles for selecting one or multiple options.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The ToggleGroup component groups related Toggle buttons together,
            managing selection state. It supports both single selection (like
            radio buttons) and multiple selection.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need a set of related toggles like
            text alignment options, view mode selectors, or formatting toolbars.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ToggleGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container that groups toggle items and manages selection state.
              Supports single or multiple selection.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ToggleGroupItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual toggle within the group. Inherits variant and size from
              parent.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Types & Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Single Selection (Default)"
            code={`<ToggleGroup defaultValue={['center']}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup defaultValue={['center']}>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Multiple Selection"
            code={`<ToggleGroup multiple defaultValue={["bold"]}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Underline />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup multiple defaultValue={['bold']}>
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Outline Variant"
            code={`<ToggleGroup variant="outline">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup variant="outline">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Spacing"
            code={`<ToggleGroup variant="outline" spacing={2}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup variant="outline" spacing={2}>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code={`<ToggleGroup variant="outline" orientation="vertical">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup variant="outline" orientation="vertical">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Sizes */}
      <Section id="sizes" title="Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Size Comparison"
            code={`// Small
<ToggleGroup size="sm" variant="outline">
  ...
</ToggleGroup>

// Default
<ToggleGroup size="default" variant="outline">
  ...
</ToggleGroup>

// Large
<ToggleGroup size="lg" variant="outline">
  ...
</ToggleGroup>`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-muted-foreground">Small</span>
                <ToggleGroup size="sm" variant="outline">
                  <ToggleGroupItem value="left" aria-label="Align left">
                    <AlignLeft />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    <AlignCenter />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    <AlignRight />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-muted-foreground">Default</span>
                <ToggleGroup size="default" variant="outline">
                  <ToggleGroupItem value="left" aria-label="Align left">
                    <AlignLeft />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    <AlignCenter />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    <AlignRight />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm text-muted-foreground">Large</span>
                <ToggleGroup size="lg" variant="outline">
                  <ToggleGroupItem value="left" aria-label="Align left">
                    <AlignLeft />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center">
                    <AlignCenter />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right">
                    <AlignRight />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              ToggleGroup
            </h3>
            <PropsTable
              props={[
                {
                  name: 'multiple',
                  type: 'boolean',
                  default: 'false',
                  description: 'Allow multiple items to be selected at once.',
                },
                {
                  name: 'value',
                  type: 'any[]',
                  description: 'Controlled value(s).',
                },
                {
                  name: 'defaultValue',
                  type: 'any[]',
                  description: 'Default value(s) (uncontrolled).',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string | string[]) => void',
                  description: 'Callback when value changes.',
                },
                {
                  name: 'variant',
                  type: '"default" | "outline"',
                  default: '"default"',
                  description: 'Visual style. Passed to all items.',
                },
                {
                  name: 'size',
                  type: '"default" | "sm" | "lg"',
                  default: '"default"',
                  description: 'Size. Passed to all items.',
                },
                {
                  name: 'spacing',
                  type: 'number',
                  default: '0',
                  description: 'Gap between items (in spacing units).',
                },
                {
                  name: 'orientation',
                  type: '"horizontal" | "vertical"',
                  default: '"horizontal"',
                  description: 'Layout direction.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable all items in the group.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              ToggleGroupItem
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Unique value for this item.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable this specific item.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes.',
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
            title="Text Alignment"
            code={`<ToggleGroup variant="outline" defaultValue={['left']}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify" aria-label="Justify">
    <AlignJustify />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup variant="outline" defaultValue={['left']}>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustify />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>

          <ComponentPreview
            title="View Mode Selector"
            code={`<ToggleGroup variant="outline" defaultValue={['grid']}>
  <ToggleGroupItem value="list" aria-label="List view">
    <List />
    List
  </ToggleGroupItem>
  <ToggleGroupItem value="grid" aria-label="Grid view">
    <LayoutGrid />
    Grid
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup variant="outline" defaultValue={['grid']}>
              <ToggleGroupItem value="list" aria-label="List view">
                <List />
                List
              </ToggleGroupItem>
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <LayoutGrid />
                Grid
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Text Formatting (Multiple)"
            code={`<ToggleGroup multiple variant="outline">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline />
  </ToggleGroupItem>
</ToggleGroup>`}
          >
            <ToggleGroup multiple variant="outline">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Single selection (default)
<ToggleGroup defaultValue={['center']}>
  <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
</ToggleGroup>

// Multiple selection — add multiple prop
<ToggleGroup multiple defaultValue={["bold"]}>
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
</ToggleGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Single selection by default; add{' '}
                <code className="rounded bg-muted px-1">multiple</code> prop for
                multiple selection
              </li>
              <li>
                <code className="rounded bg-muted px-1">variant</code> and{' '}
                <code className="rounded bg-muted px-1">size</code> on group are
                inherited by all items
              </li>
              <li>
                <code className="rounded bg-muted px-1">spacing=0</code>{' '}
                (default) creates connected button look
              </li>
              <li>
                <code className="rounded bg-muted px-1">spacing={'{2}'}</code>{' '}
                adds gap and individual rounded corners
              </li>
              <li>
                Each item needs unique{' '}
                <code className="rounded bg-muted px-1">value</code> prop
              </li>
              <li>
                Add{' '}
                <code className="rounded bg-muted px-1">aria-label</code> for
                icon-only items
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/toggle-group
                </code>{' '}
                primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              ToggleGroup vs ButtonGroup
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>ToggleGroup:</strong> Stateful selection (one or
                multiple active)
              </li>
              <li>
                <strong>ButtonGroup:</strong> Visual grouping only (no selection
                state)
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
                pressed background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--input</code> for
                outline border
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for focus
                ring
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
