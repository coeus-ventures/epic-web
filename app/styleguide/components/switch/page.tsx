'use client'

import { Switch } from '@/components/ui/switch'
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

export default function SwitchPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Switch
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A toggle control for switching between on and off states.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Switch component is a toggle that allows users to switch between
            two mutually exclusive states (on/off). It provides immediate visual
            feedback with a sliding thumb indicator.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need a binary toggle for settings
            that take effect immediately, like enabling notifications or dark
            mode.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Switch</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The switch toggle component. Includes built-in thumb indicator.
              Supports two sizes.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Switch } from '@/components/ui/switch'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="States & Sizes">
        <div className="space-y-8">
          <ComponentPreview title="Default (Unchecked)" code="<Switch />">
            <Switch />
          </ComponentPreview>

          <ComponentPreview
            title="Checked"
            code="<Switch defaultChecked />"
          >
            <Switch defaultChecked />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code="<Switch disabled />"
          >
            <Switch disabled />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled Checked"
            code="<Switch disabled defaultChecked />"
          >
            <Switch disabled defaultChecked />
          </ComponentPreview>

          <ComponentPreview
            title="Small Size"
            code='<Switch size="sm" />'
          >
            <Switch size="sm" />
            <Switch size="sm" defaultChecked />
          </ComponentPreview>

          <ComponentPreview
            title="Size Comparison"
            code={`<Switch size="sm" defaultChecked />
<Switch size="default" defaultChecked />`}
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <Switch size="sm" defaultChecked />
                <span className="text-xs text-muted-foreground">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Switch size="default" defaultChecked />
                <span className="text-xs text-muted-foreground">Default</span>
              </div>
            </div>
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
              description: 'Controlled checked state of the switch.',
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
              name: 'size',
              type: '"sm" | "default"',
              default: '"default"',
              description: 'The size of the switch.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the switch is disabled.',
            },
            {
              name: 'required',
              type: 'boolean',
              default: 'false',
              description: 'Whether the switch is required.',
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
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="With Label"
            code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Settings List"
            code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="notifications">Push Notifications</Label>
    <Switch id="notifications" defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="emails">Email Notifications</Label>
    <Switch id="emails" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="marketing">Marketing Emails</Label>
    <Switch id="marketing" />
  </div>
</div>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Push Notifications</Label>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="emails">Email Notifications</Label>
                <Switch id="emails" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing">Marketing Emails</Label>
                <Switch id="marketing" />
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Description"
            code={`<div className="flex items-center justify-between gap-4">
  <div>
    <Label htmlFor="dark-mode">Dark Mode</Label>
    <p className="text-sm text-muted-foreground">
      Enable dark theme for the application.
    </p>
  </div>
  <Switch id="dark-mode" />
</div>`}
          >
            <div className="flex w-full max-w-sm items-center justify-between gap-4">
              <div>
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Enable dark theme for the application.
                </p>
              </div>
              <Switch id="dark-mode" />
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
              <code>{`import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<div className="flex items-center gap-2">
  <Switch id="my-switch" />
  <Label htmlFor="my-switch">Toggle this</Label>
</div>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Two sizes available:{' '}
                <code className="rounded bg-muted px-1">size=&quot;default&quot;</code>{' '}
                (32x18px) and{' '}
                <code className="rounded bg-muted px-1">size=&quot;sm&quot;</code>{' '}
                (24x14px)
              </li>
              <li>
                Use for immediate-effect toggles (settings, preferences)
              </li>
              <li>
                Pair with <code className="rounded bg-muted px-1">Label</code>{' '}
                using matching{' '}
                <code className="rounded bg-muted px-1">id</code>/
                <code className="rounded bg-muted px-1">htmlFor</code>
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/switch
                </code>{' '}
                primitive
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">defaultChecked</code>{' '}
                for uncontrolled, <code className="rounded bg-muted px-1">checked</code>
                +<code className="rounded bg-muted px-1">onCheckedChange</code>{' '}
                for controlled
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
                <code className="rounded bg-muted px-1">--input</code> for
                unchecked background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--background</code> for
                thumb color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for focus
                ring
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              Switch vs Checkbox
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Use Switch for settings that take effect immediately. Use Checkbox
              for options that require form submission or for multi-select
              scenarios.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
