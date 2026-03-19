'use client'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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

export default function RadioGroupPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Radio Group
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A set of radio buttons for selecting one option from a list.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The RadioGroup component allows users to select exactly one option
            from a predefined set of choices. Only one radio button can be
            selected at a time within a group.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Users need to select one option from a
            small set of mutually exclusive choices (typically 2-5 options).
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">RadioGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The container that groups radio items and manages selection state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">RadioGroupItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual radio button with built-in indicator. Must be used
              inside RadioGroup.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="States">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-1" id="r1" />
                <Label htmlFor="r1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-2" id="r2" />
                <Label htmlFor="r2">Option 2</Label>
              </div>
            </RadioGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<RadioGroup defaultValue="option-1" disabled>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="rd1" />
    <Label htmlFor="rd1">Disabled Selected</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="rd2" />
    <Label htmlFor="rd2">Disabled Unselected</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-1" disabled>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-1" id="rd1" />
                <Label htmlFor="rd1">Disabled Selected</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-2" id="rd2" />
                <Label htmlFor="rd2">Disabled Unselected</Label>
              </div>
            </RadioGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              RadioGroup
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Controlled value of the selected radio.',
                },
                {
                  name: 'defaultValue',
                  type: 'string',
                  description: 'Default selected value (uncontrolled).',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string) => void',
                  description: 'Callback fired when selection changes.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable all radio items in the group.',
                },
                {
                  name: 'name',
                  type: 'string',
                  description: 'Name attribute for form submission.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes to apply.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              RadioGroupItem
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Unique value for this radio item.',
                },
                {
                  name: 'id',
                  type: 'string',
                  description: 'ID for associating with label.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable this specific radio item.',
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
            title="Notification Preferences"
            code={`<RadioGroup defaultValue="all">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="all" id="all" />
    <Label htmlFor="all">All notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="mentions" id="mentions" />
    <Label htmlFor="mentions">Only mentions</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="none" id="none" />
    <Label htmlFor="none">None</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="all">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All notifications</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="mentions" id="mentions" />
                <Label htmlFor="mentions">Only mentions</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">None</Label>
              </div>
            </RadioGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Descriptions"
            code={`<RadioGroup defaultValue="startup">
  <div className="flex items-start gap-2">
    <RadioGroupItem value="startup" id="startup" className="mt-1" />
    <div>
      <Label htmlFor="startup">Startup</Label>
      <p className="text-sm text-muted-foreground">
        Best for small teams and early-stage companies.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-2">
    <RadioGroupItem value="business" id="business" className="mt-1" />
    <div>
      <Label htmlFor="business">Business</Label>
      <p className="text-sm text-muted-foreground">
        For growing teams with advanced needs.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-2">
    <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
    <div>
      <Label htmlFor="enterprise">Enterprise</Label>
      <p className="text-sm text-muted-foreground">
        For large organizations with complex requirements.
      </p>
    </div>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="startup" className="max-w-sm">
              <div className="flex items-start gap-2">
                <RadioGroupItem value="startup" id="startup" className="mt-1" />
                <div>
                  <Label htmlFor="startup">Startup</Label>
                  <p className="text-sm text-muted-foreground">
                    Best for small teams and early-stage companies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="business" id="business" className="mt-1" />
                <div>
                  <Label htmlFor="business">Business</Label>
                  <p className="text-sm text-muted-foreground">
                    For growing teams with advanced needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                <div>
                  <Label htmlFor="enterprise">Enterprise</Label>
                  <p className="text-sm text-muted-foreground">
                    For large organizations with complex requirements.
                  </p>
                </div>
              </div>
            </RadioGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Horizontal Layout"
            code={`<RadioGroup defaultValue="sm" className="flex flex-row gap-4">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sm" id="sm" />
    <Label htmlFor="sm">Small</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="md" id="md" />
    <Label htmlFor="md">Medium</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="lg" id="lg" />
    <Label htmlFor="lg">Large</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="sm" className="flex flex-row gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="sm" id="sm" />
                <Label htmlFor="sm">Small</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="md" id="md" />
                <Label htmlFor="md">Medium</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="lg" id="lg" />
                <Label htmlFor="lg">Large</Label>
              </div>
            </RadioGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
</RadioGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">RadioGroupItem</code>{' '}
                must always be inside{' '}
                <code className="rounded bg-muted px-1">RadioGroup</code>
              </li>
              <li>
                Each item needs a unique{' '}
                <code className="rounded bg-muted px-1">value</code> prop
              </li>
              <li>
                Use matching{' '}
                <code className="rounded bg-muted px-1">id</code>/
                <code className="rounded bg-muted px-1">htmlFor</code> for label
                association
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/radio-group
                </code>{' '}
                primitive
              </li>
              <li>
                Default layout is vertical (grid). Add{' '}
                <code className="rounded bg-muted px-1">flex flex-row</code> for
                horizontal
              </li>
              <li>
                Built-in indicator uses Lucide{' '}
                <code className="rounded bg-muted px-1">CircleIcon</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--primary</code> for
                selected indicator
              </li>
              <li>
                <code className="rounded bg-muted px-1">--input</code> for
                border color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for focus
                ring
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              Radio Group vs Checkbox
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Use RadioGroup when only one option can be selected. Use
              Checkboxes when multiple options can be selected simultaneously.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
