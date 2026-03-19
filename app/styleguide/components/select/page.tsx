'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
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

export default function SelectPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Select
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A dropdown menu for selecting one option from a list.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Select component displays a dropdown list of options. When
            clicked, it opens a popup with selectable items and shows a
            checkmark next to the selected option.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Users need to choose one option from a
            list of 5+ options, or when space is limited and a dropdown is more
            appropriate than radio buttons.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Select</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root component that manages select state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Button that opens the dropdown. Shows selected value.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectValue</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Displays the selected value or placeholder text.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Popup container for the options list.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual selectable option.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Groups related items with an optional label.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectLabel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Label for a group of items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SelectSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual divider between items or groups.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variations">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code={`<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`}
          >
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>

          <ComponentPreview
            title="Small Size"
            code={`<Select>
  <SelectTrigger size="sm" className="w-48">
    <SelectValue placeholder="Select size" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="sm">Small</SelectItem>
    <SelectItem value="md">Medium</SelectItem>
    <SelectItem value="lg">Large</SelectItem>
  </SelectContent>
</Select>`}
          >
            <Select>
              <SelectTrigger size="sm" className="w-48">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<Select disabled>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>`}
          >
            <Select disabled>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">Select</h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Controlled value of the select.',
                },
                {
                  name: 'defaultValue',
                  type: 'string',
                  description: 'Default value (uncontrolled).',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string) => void',
                  description: 'Callback fired when value changes.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the select is disabled.',
                },
                {
                  name: 'name',
                  type: 'string',
                  description: 'Name attribute for form submission.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              SelectTrigger
            </h3>
            <PropsTable
              props={[
                {
                  name: 'size',
                  type: '"sm" | "default"',
                  default: '"default"',
                  description: 'Size of the trigger button.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              SelectItem
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Unique value for this option.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether this item is disabled.',
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
            title="With Label"
            code={`<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country" className="w-48">
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
    </SelectContent>
  </Select>
</div>`}
          >
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country" className="w-48">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Groups"
            code={`<Select>
  <SelectTrigger className="w-56">
    <SelectValue placeholder="Select timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Time (EST)</SelectItem>
      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich (GMT)</SelectItem>
      <SelectItem value="cet">Central European (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          >
            <Select>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Time (EST)</SelectItem>
                  <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value="gmt">Greenwich (GMT)</SelectItem>
                  <SelectItem value="cet">Central European (CET)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </ComponentPreview>

          <ComponentPreview
            title="With Pre-selected Value"
            code={`<Select defaultValue="medium">
  <SelectTrigger className="w-48">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="small">Small</SelectItem>
    <SelectItem value="medium">Medium</SelectItem>
    <SelectItem value="large">Large</SelectItem>
  </SelectContent>
</Select>`}
          >
            <Select defaultValue="medium">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">Option 1</SelectItem>
    <SelectItem value="opt2">Option 2</SelectItem>
  </SelectContent>
</Select>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Structure:{' '}
                <code className="rounded bg-muted px-1">Select</code> {'>'}{' '}
                <code className="rounded bg-muted px-1">SelectTrigger</code> +{' '}
                <code className="rounded bg-muted px-1">SelectContent</code>
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectValue</code> goes
                inside SelectTrigger for displaying selection
              </li>
              <li>
                Set explicit width on trigger:{' '}
                <code className="rounded bg-muted px-1">className=&quot;w-48&quot;</code>
              </li>
              <li>
                Two sizes:{' '}
                <code className="rounded bg-muted px-1">size=&quot;default&quot;</code>{' '}
                (h-9) and{' '}
                <code className="rounded bg-muted px-1">size=&quot;sm&quot;</code> (h-8)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">SelectGroup</code> +{' '}
                <code className="rounded bg-muted px-1">SelectLabel</code> to
                organize items
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/select
                </code>{' '}
                primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Required Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">Select</code> - Required
                (root)
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectTrigger</code> -
                Required
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectValue</code> -
                Required inside trigger
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectContent</code> -
                Required
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectItem</code> -
                Required (at least one)
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectGroup</code> -
                Optional
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectLabel</code> -
                Optional
              </li>
              <li>
                <code className="rounded bg-muted px-1">SelectSeparator</code> -
                Optional
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--input</code> for
                trigger border
              </li>
              <li>
                <code className="rounded bg-muted px-1">--popover</code> for
                content background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--accent</code> for item
                hover state
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
