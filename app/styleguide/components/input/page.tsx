'use client'

import { Input } from '@/components/ui/input'
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

export default function InputPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Input
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A text input field for collecting user data.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Input component is a styled text input that supports various
            types including text, email, password, number, and file uploads.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Collecting single-line text data from
            users such as names, emails, passwords, or search queries.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Input</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The input element. Accepts all native input props and types.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Input } from '@/components/ui/input'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Input Types">
        <div className="space-y-8">
          <ComponentPreview
            title="Text"
            code='<Input type="text" placeholder="Enter your name" />'
          >
            <Input type="text" placeholder="Enter your name" className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Email"
            code='<Input type="email" placeholder="Enter your email" />'
          >
            <Input type="email" placeholder="Enter your email" className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Password"
            code='<Input type="password" placeholder="Enter password" />'
          >
            <Input type="password" placeholder="Enter password" className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Number"
            code='<Input type="number" placeholder="0" />'
          >
            <Input type="number" placeholder="0" className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Search"
            code='<Input type="search" placeholder="Search..." />'
          >
            <Input type="search" placeholder="Search..." className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="File"
            code='<Input type="file" />'
          >
            <Input type="file" className="max-w-sm" />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code='<Input disabled placeholder="Disabled input" />'
          >
            <Input disabled placeholder="Disabled input" className="max-w-sm" />
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'type',
              type: 'string',
              default: '"text"',
              description:
                'Input type: text, email, password, number, search, file, etc.',
            },
            {
              name: 'placeholder',
              type: 'string',
              description: 'Placeholder text shown when input is empty.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the input is disabled.',
            },
            {
              name: 'value',
              type: 'string | number',
              description: 'Controlled value of the input.',
            },
            {
              name: 'defaultValue',
              type: 'string | number',
              description: 'Default value (uncontrolled).',
            },
            {
              name: 'onChange',
              type: '(e: ChangeEvent<HTMLInputElement>) => void',
              description: 'Callback fired when value changes.',
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
            title="With Helper Text"
            code={`<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="johndoe" />
  <p className="text-sm text-muted-foreground">
    This will be your public display name.
  </p>
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="johndoe" />
              <p className="text-sm text-muted-foreground">
                This will be your public display name.
              </p>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Required Field"
            code={`<div className="space-y-2">
  <Label htmlFor="required-field">
    Required Field <span className="text-destructive">*</span>
  </Label>
  <Input id="required-field" required placeholder="Required" />
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="required-field">
                Required Field <span className="text-destructive">*</span>
              </Label>
              <Input id="required-field" required placeholder="Required" />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Full Width"
            code='<Input placeholder="Full width input" className="w-full" />'
          >
            <Input placeholder="Full width input" className="w-full" />
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Input
  type="email"
  placeholder="Enter your email"
  className="max-w-sm"
/>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                The input is{' '}
                <code className="rounded bg-muted px-1">w-full</code> by
                default, use{' '}
                <code className="rounded bg-muted px-1">max-w-*</code> to
                constrain width
              </li>
              <li>
                Always pair with{' '}
                <code className="rounded bg-muted px-1">Label</code> for
                accessibility
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">aria-invalid</code> for
                error states (shows red border and ring)
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/input
                </code>{' '}
                primitive
              </li>
              <li>
                Height is <code className="rounded bg-muted px-1">h-9</code>{' '}
                (36px)
              </li>
              <li>
                Text size is{' '}
                <code className="rounded bg-muted px-1">text-base</code> on
                mobile,{' '}
                <code className="rounded bg-muted px-1">text-sm</code> on
                desktop
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
                <code className="rounded bg-muted px-1">--destructive</code> for
                error state
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  --muted-foreground
                </code>{' '}
                for placeholder
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Error State</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Input aria-invalid="true" placeholder="Invalid input" />`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
