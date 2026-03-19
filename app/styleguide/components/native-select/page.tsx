'use client'

import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select'
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

export default function NativeSelectPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Native Select
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A styled native HTML select element with platform-native dropdown
          behavior.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The NativeSelect component is a styled wrapper around the native
            HTML <code>&lt;select&gt;</code> element. It uses the browser's
            native dropdown UI, which is beneficial for accessibility and mobile
            devices.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need maximum accessibility, mobile
            optimization, or platform-native select behavior. The native select
            is lighter weight and more accessible than custom dropdowns.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NativeSelect</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The select wrapper with styled dropdown icon. Contains the native
              select element.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NativeSelectOption</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              An option within the select. Wraps native{' '}
              <code>&lt;option&gt;</code>.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NativeSelectOptGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Groups options with a label. Wraps native{' '}
              <code>&lt;optgroup&gt;</code>.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="States & Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code={`<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="orange">Orange</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect>
              <NativeSelectOption value="">Select a fruit</NativeSelectOption>
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
              <NativeSelectOption value="orange">Orange</NativeSelectOption>
            </NativeSelect>
          </ComponentPreview>

          <ComponentPreview
            title="Small Size"
            code={`<NativeSelect size="sm">
  <NativeSelectOption value="">Select size</NativeSelectOption>
  <NativeSelectOption value="s">Small</NativeSelectOption>
  <NativeSelectOption value="m">Medium</NativeSelectOption>
  <NativeSelectOption value="l">Large</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect size="sm">
              <NativeSelectOption value="">Select size</NativeSelectOption>
              <NativeSelectOption value="s">Small</NativeSelectOption>
              <NativeSelectOption value="m">Medium</NativeSelectOption>
              <NativeSelectOption value="l">Large</NativeSelectOption>
            </NativeSelect>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<NativeSelect disabled>
  <NativeSelectOption value="">Disabled</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect disabled>
              <NativeSelectOption value="">Disabled</NativeSelectOption>
            </NativeSelect>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              NativeSelect
            </h3>
            <PropsTable
              props={[
                {
                  name: 'size',
                  type: '"sm" | "default"',
                  default: '"default"',
                  description: 'Size of the select element.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the select is disabled.',
                },
                {
                  name: 'value',
                  type: 'string',
                  description: 'Controlled value.',
                },
                {
                  name: 'defaultValue',
                  type: 'string',
                  description: 'Default value (uncontrolled).',
                },
                {
                  name: 'onChange',
                  type: '(e: ChangeEvent) => void',
                  description: 'Callback when value changes.',
                },
                {
                  name: 'name',
                  type: 'string',
                  description: 'Name attribute for form submission.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes for wrapper.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              NativeSelectOption
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Value of the option.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the option is disabled.',
                },
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'Display text for the option.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              NativeSelectOptGroup
            </h3>
            <PropsTable
              props={[
                {
                  name: 'label',
                  type: 'string',
                  description: 'Label for the option group.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the group is disabled.',
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
  <NativeSelect id="country">
    <NativeSelectOption value="">Select country</NativeSelectOption>
    <NativeSelectOption value="us">United States</NativeSelectOption>
    <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
    <NativeSelectOption value="ca">Canada</NativeSelectOption>
  </NativeSelect>
</div>`}
          >
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <NativeSelect id="country">
                <NativeSelectOption value="">Select country</NativeSelectOption>
                <NativeSelectOption value="us">United States</NativeSelectOption>
                <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                <NativeSelectOption value="ca">Canada</NativeSelectOption>
              </NativeSelect>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Option Groups"
            code={`<NativeSelect>
  <NativeSelectOption value="">Select timezone</NativeSelectOption>
  <NativeSelectOptGroup label="North America">
    <NativeSelectOption value="est">Eastern (EST)</NativeSelectOption>
    <NativeSelectOption value="cst">Central (CST)</NativeSelectOption>
    <NativeSelectOption value="pst">Pacific (PST)</NativeSelectOption>
  </NativeSelectOptGroup>
  <NativeSelectOptGroup label="Europe">
    <NativeSelectOption value="gmt">Greenwich (GMT)</NativeSelectOption>
    <NativeSelectOption value="cet">Central (CET)</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`}
          >
            <NativeSelect>
              <NativeSelectOption value="">Select timezone</NativeSelectOption>
              <NativeSelectOptGroup label="North America">
                <NativeSelectOption value="est">Eastern (EST)</NativeSelectOption>
                <NativeSelectOption value="cst">Central (CST)</NativeSelectOption>
                <NativeSelectOption value="pst">Pacific (PST)</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Europe">
                <NativeSelectOption value="gmt">Greenwich (GMT)</NativeSelectOption>
                <NativeSelectOption value="cet">Central (CET)</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </ComponentPreview>

          <ComponentPreview
            title="Pre-selected Value"
            code={`<NativeSelect defaultValue="medium">
  <NativeSelectOption value="small">Small</NativeSelectOption>
  <NativeSelectOption value="medium">Medium</NativeSelectOption>
  <NativeSelectOption value="large">Large</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect defaultValue="medium">
              <NativeSelectOption value="small">Small</NativeSelectOption>
              <NativeSelectOption value="medium">Medium</NativeSelectOption>
              <NativeSelectOption value="large">Large</NativeSelectOption>
            </NativeSelect>
          </ComponentPreview>

          <ComponentPreview
            title="Full Width"
            code={`<NativeSelect className="w-full">
  <NativeSelectOption value="">Select option</NativeSelectOption>
  <NativeSelectOption value="1">Option 1</NativeSelectOption>
  <NativeSelectOption value="2">Option 2</NativeSelectOption>
</NativeSelect>`}
          >
            <NativeSelect className="w-full">
              <NativeSelectOption value="">Select option</NativeSelectOption>
              <NativeSelectOption value="1">Option 1</NativeSelectOption>
              <NativeSelectOption value="2">Option 2</NativeSelectOption>
            </NativeSelect>
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
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<NativeSelect>
  <NativeSelectOption value="">Select option</NativeSelectOption>
  <NativeSelectOption value="opt1">Option 1</NativeSelectOption>
  <NativeSelectOption value="opt2">Option 2</NativeSelectOption>
</NativeSelect>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Uses native <code className="rounded bg-muted px-1">&lt;select&gt;</code>{' '}
                for best accessibility and mobile UX
              </li>
              <li>
                Width is{' '}
                <code className="rounded bg-muted px-1">w-fit</code> by default,
                add <code className="rounded bg-muted px-1">className=&quot;w-full&quot;</code>{' '}
                for full width
              </li>
              <li>
                Two sizes:{' '}
                <code className="rounded bg-muted px-1">default</code> (h-9) and{' '}
                <code className="rounded bg-muted px-1">sm</code> (h-8)
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">NativeSelectOptGroup</code>{' '}
                with <code className="rounded bg-muted px-1">label</code> prop
                to group options
              </li>
              <li>
                First option with empty value serves as placeholder
              </li>
              <li>
                Dropdown appearance is controlled by browser/OS (not
                customizable)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              NativeSelect vs Select
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>NativeSelect:</strong> Better accessibility, mobile-optimized,
                lighter weight, OS-native dropdown
              </li>
              <li>
                <strong>Select:</strong> Custom styled dropdown, more visual
                control, consistent across platforms
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
                border color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for focus
                ring
              </li>
              <li>
                <code className="rounded bg-muted px-1">--muted-foreground</code>{' '}
                for dropdown icon color
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
