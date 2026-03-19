'use client'

import { Toggle } from '@/components/ui/toggle'
import { Separator } from '@/components/ui/separator'
import { Bold, Italic, Underline, Star } from 'lucide-react'

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

export default function TogglePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Toggle
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Toggle component is a button that maintains a pressed state. It
            visually indicates whether a feature is active or inactive, like
            bold or italic formatting.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need a binary on/off control that
            looks like a button, typically for formatting controls, feature
            toggles, or mode switches.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Toggle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The toggle button component. Supports variants, sizes, and pressed
              state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">toggleVariants</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A function for generating toggle class names. Exported for use in
              ToggleGroup.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Toggle, toggleVariants } from '@/components/ui/toggle'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code={`<Toggle>
  <Bold />
</Toggle>`}
          >
            <Toggle aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Outline"
            code={`<Toggle variant="outline">
  <Italic />
</Toggle>`}
          >
            <Toggle variant="outline" aria-label="Toggle italic">
              <Italic />
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="With Text"
            code={`<Toggle>
  <Bold />
  Bold
</Toggle>`}
          >
            <Toggle aria-label="Toggle bold">
              <Bold />
              Bold
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code='<Toggle disabled><Italic /></Toggle>'
          >
            <Toggle disabled aria-label="Toggle italic">
              <Italic />
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Pressed (Default)"
            code="<Toggle defaultPressed><Star /></Toggle>"
          >
            <Toggle defaultPressed aria-label="Toggle favorite">
              <Star />
            </Toggle>
          </ComponentPreview>
        </div>
      </Section>

      {/* Sizes */}
      <Section id="sizes" title="Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Small"
            code='<Toggle size="sm"><Bold /></Toggle>'
          >
            <Toggle size="sm" aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Default"
            code='<Toggle size="default"><Bold /></Toggle>'
          >
            <Toggle size="default" aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Large"
            code='<Toggle size="lg"><Bold /></Toggle>'
          >
            <Toggle size="lg" aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </ComponentPreview>

          <ComponentPreview
            title="Size Comparison"
            code={`<Toggle size="sm"><Bold /></Toggle>
<Toggle size="default"><Bold /></Toggle>
<Toggle size="lg"><Bold /></Toggle>`}
          >
            <Toggle size="sm" aria-label="Toggle bold small">
              <Bold />
            </Toggle>
            <Toggle size="default" aria-label="Toggle bold default">
              <Bold />
            </Toggle>
            <Toggle size="lg" aria-label="Toggle bold large">
              <Bold />
            </Toggle>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'pressed',
              type: 'boolean',
              description: 'Controlled pressed state.',
            },
            {
              name: 'defaultPressed',
              type: 'boolean',
              default: 'false',
              description: 'Default pressed state (uncontrolled).',
            },
            {
              name: 'onPressedChange',
              type: '(pressed: boolean) => void',
              description: 'Callback fired when pressed state changes.',
            },
            {
              name: 'variant',
              type: '"default" | "outline"',
              default: '"default"',
              description: 'Visual style of the toggle.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "lg"',
              default: '"default"',
              description: 'Size of the toggle.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the toggle is disabled.',
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
            title="Text Formatting Toolbar"
            code={`<div className="flex gap-1">
  <Toggle aria-label="Toggle bold">
    <Bold />
  </Toggle>
  <Toggle aria-label="Toggle italic">
    <Italic />
  </Toggle>
  <Toggle aria-label="Toggle underline">
    <Underline />
  </Toggle>
</div>`}
          >
            <div className="flex gap-1">
              <Toggle aria-label="Toggle bold">
                <Bold />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline />
              </Toggle>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Outline Variant Toolbar"
            code={`<div className="flex gap-1">
  <Toggle variant="outline" aria-label="Toggle bold">
    <Bold />
  </Toggle>
  <Toggle variant="outline" aria-label="Toggle italic">
    <Italic />
  </Toggle>
  <Toggle variant="outline" aria-label="Toggle underline">
    <Underline />
  </Toggle>
</div>`}
          >
            <div className="flex gap-1">
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle underline">
                <Underline />
              </Toggle>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Favorite Toggle"
            code={`<Toggle aria-label="Toggle favorite">
  <Star />
  Favorite
</Toggle>`}
          >
            <Toggle aria-label="Toggle favorite">
              <Star />
              Favorite
            </Toggle>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { Toggle, toggleVariants } from '@/components/ui/toggle'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Toggle aria-label="Toggle bold">
  <Bold />
</Toggle>

// With text
<Toggle>
  <Star />
  Favorite
</Toggle>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Always include{' '}
                <code className="rounded bg-muted px-1">aria-label</code> for
                icon-only toggles
              </li>
              <li>
                Pressed state is indicated by{' '}
                <code className="rounded bg-muted px-1">aria-pressed</code>{' '}
                attribute
              </li>
              <li>
                Two variants:{' '}
                <code className="rounded bg-muted px-1">default</code>{' '}
                (transparent) and{' '}
                <code className="rounded bg-muted px-1">outline</code> (bordered)
              </li>
              <li>
                Three sizes:{' '}
                <code className="rounded bg-muted px-1">sm</code> (h-8),{' '}
                <code className="rounded bg-muted px-1">default</code> (h-9),{' '}
                <code className="rounded bg-muted px-1">lg</code> (h-10)
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">defaultPressed</code>{' '}
                for uncontrolled,{' '}
                <code className="rounded bg-muted px-1">pressed</code> +{' '}
                <code className="rounded bg-muted px-1">onPressedChange</code>{' '}
                for controlled
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/toggle
                </code>{' '}
                primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              Toggle vs Switch vs Checkbox
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Toggle:</strong> Button-like, for toolbar actions and
                formatting
              </li>
              <li>
                <strong>Switch:</strong> Settings that take effect immediately
              </li>
              <li>
                <strong>Checkbox:</strong> Multi-select or form submissions
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
                outline variant border
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
