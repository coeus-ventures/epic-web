'use client'

import { Checkbox } from '@/components/ui/checkbox'
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

export default function CheckboxPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Checkbox
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A control that allows users to toggle between checked and unchecked
          states.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Checkbox component is an input element that allows users to
            select one or multiple options from a set. It displays a checkmark
            when selected.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Users need to select multiple options
            from a list, confirm an action, or toggle a setting on/off.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Checkbox</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The checkbox input element. Includes built-in indicator with
              checkmark icon.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Checkbox } from '@/components/ui/checkbox'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="States">
        <div className="space-y-8">
          <ComponentPreview
            title="Unchecked"
            code="<Checkbox />"
          >
            <Checkbox />
          </ComponentPreview>

          <ComponentPreview
            title="Checked"
            code="<Checkbox defaultChecked />"
          >
            <Checkbox defaultChecked />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code="<Checkbox disabled />"
          >
            <Checkbox disabled />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled Checked"
            code="<Checkbox disabled defaultChecked />"
          >
            <Checkbox disabled defaultChecked />
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'checked',
              type: 'boolean',
              description: 'Controlled checked state of the checkbox.',
            },
            {
              name: 'defaultChecked',
              type: 'boolean',
              default: 'false',
              description: 'Default checked state (uncontrolled).',
            },
            {
              name: 'onCheckedChange',
              type: '(checked: boolean) => void',
              description: 'Callback fired when the checked state changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the checkbox is disabled.',
            },
            {
              name: 'required',
              type: 'boolean',
              default: 'false',
              description: 'Whether the checkbox is required.',
            },
            {
              name: 'name',
              type: 'string',
              description: 'Name attribute for form submission.',
            },
            {
              name: 'value',
              type: 'string',
              default: '"on"',
              description: 'Value attribute for form submission.',
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
            title="With Label"
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
            title="Checkbox Group"
            code={`<div className="space-y-3">
  <div className="flex items-center gap-2">
    <Checkbox id="email" defaultChecked />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="push" />
    <Label htmlFor="push">Push notifications</Label>
  </div>
</div>`}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox id="email" defaultChecked />
                <Label htmlFor="email">Email notifications</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="sms" />
                <Label htmlFor="sms">SMS notifications</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="push" />
                <Label htmlFor="push">Push notifications</Label>
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Description"
            code={`<div className="flex items-start gap-2">
  <Checkbox id="marketing" className="mt-1" />
  <div>
    <Label htmlFor="marketing">Marketing emails</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
</div>`}
          >
            <div className="flex items-start gap-2">
              <Checkbox id="marketing" className="mt-1" />
              <div>
                <Label htmlFor="marketing">Marketing emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new products and features.
                </p>
              </div>
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
              <code>{`import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<div className="flex items-center gap-2">
  <Checkbox id="my-checkbox" />
  <Label htmlFor="my-checkbox">Label text</Label>
</div>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Always pair with a{' '}
                <code className="rounded bg-muted px-1">Label</code> for
                accessibility
              </li>
              <li>
                Use matching <code className="rounded bg-muted px-1">id</code>{' '}
                and <code className="rounded bg-muted px-1">htmlFor</code>{' '}
                attributes
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">defaultChecked</code>{' '}
                for uncontrolled components
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">checked</code> and{' '}
                <code className="rounded bg-muted px-1">onCheckedChange</code>{' '}
                for controlled components
              </li>
              <li>
                The checkbox uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/checkbox
                </code>{' '}
                primitive
              </li>
              <li>
                Built-in indicator uses Lucide{' '}
                <code className="rounded bg-muted px-1">CheckIcon</code>
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
                checked background
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  --primary-foreground
                </code>{' '}
                for checkmark color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--input</code> for
                unchecked border
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for focus
                ring color
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Form Integration</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Checkbox
  name="subscribe"
  value="yes"
  required
/>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
