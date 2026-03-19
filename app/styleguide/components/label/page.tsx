'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
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

export default function LabelPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Label
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An accessible label associated with form controls.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Label component renders an accessible label for form controls.
            It provides visual identification and improves accessibility by
            allowing users to click the label to focus the associated input.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Labeling form inputs, checkboxes, radio
            buttons, or any other form control that needs identification.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Label</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The label element. Automatically handles disabled state styling
              when associated input is disabled.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Label } from '@/components/ui/label'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="States">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code='<Label>Email address</Label>'
          >
            <Label>Email address</Label>
          </ComponentPreview>

          <ComponentPreview
            title="With Required Indicator"
            code={`<Label>
  Email <span className="text-destructive">*</span>
</Label>`}
          >
            <Label>
              Email <span className="text-destructive">*</span>
            </Label>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'htmlFor',
              type: 'string',
              description: 'ID of the form element this label is associated with.',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'The label text content.',
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
            title="With Input"
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Checkbox"
            code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Inline Checkbox"
            code={`<Label className="cursor-pointer">
  <Checkbox />
  Remember me
</Label>`}
          >
            <Label className="cursor-pointer">
              <Checkbox />
              Remember me
            </Label>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled State"
            code={`<div className="space-y-2">
  <Label htmlFor="disabled-input">Disabled field</Label>
  <Input id="disabled-input" disabled placeholder="Can't edit" />
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="disabled-input">Disabled field</Label>
              <Input id="disabled-input" disabled placeholder="Can't edit" />
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
              <code>{`import { Label } from '@/components/ui/label'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<div className="space-y-2">
  <Label htmlFor="my-input">Field Label</Label>
  <Input id="my-input" />
</div>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Always use{' '}
                <code className="rounded bg-muted px-1">htmlFor</code> to
                associate with input's{' '}
                <code className="rounded bg-muted px-1">id</code>
              </li>
              <li>
                Label automatically styles as disabled when peer input has{' '}
                <code className="rounded bg-muted px-1">disabled</code>{' '}
                attribute
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  flex items-center gap-2
                </code>{' '}
                to position label next to checkbox/radio
              </li>
              <li>
                The label has built-in{' '}
                <code className="rounded bg-muted px-1">select-none</code> to
                prevent text selection on click
              </li>
              <li>
                Default styling:{' '}
                <code className="rounded bg-muted px-1">text-sm</code>,{' '}
                <code className="rounded bg-muted px-1">font-medium</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// With required indicator
<Label>
  Email <span className="text-destructive">*</span>
</Label>

// Inline with checkbox
<Label className="cursor-pointer">
  <Checkbox /> Remember me
</Label>

// Above input with gap
<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" />
</div>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
