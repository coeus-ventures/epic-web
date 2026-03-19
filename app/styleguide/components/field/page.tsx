'use client'

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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

export default function FieldPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Field
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Form field wrapper components for labels, descriptions, and errors.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Field components provide a consistent way to wrap form inputs
            with labels, descriptions, and error messages. They handle
            accessibility, spacing, and visual hierarchy automatically.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Building forms with labels, helper text,
            and validation errors. Field components ensure consistent spacing
            and accessibility across all form elements.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Field</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for a single form field with label, input, and messages.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldLabel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Label for the field. Wraps Label component with field-specific
              styling.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Helper text providing additional context for the field.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldError</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Error message display. Can accept an array of errors.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Groups multiple fields together with consistent spacing.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldSet</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Semantic fieldset for grouping related fields with a legend.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldLegend</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Legend title for a fieldset group.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">FieldContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Wrapper for secondary content like description and error.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from '@/components/ui/field'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Orientations">
        <div className="space-y-8">
          <ComponentPreview
            title="Vertical (Default)"
            code={`<Field orientation="vertical">
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" placeholder="Enter your name" />
</Field>`}
          >
            <Field orientation="vertical" className="w-full max-w-sm">
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Enter your name" />
            </Field>
          </ComponentPreview>

          <ComponentPreview
            title="Horizontal"
            code={`<Field orientation="horizontal">
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" placeholder="Enter email" />
</Field>`}
          >
            <Field orientation="horizontal" className="w-full max-w-md">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" placeholder="Enter email" />
            </Field>
          </ComponentPreview>

          <ComponentPreview
            title="With Description"
            code={`<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="johndoe" />
  <FieldDescription>
    This will be your public display name.
  </FieldDescription>
</Field>`}
          >
            <Field className="w-full max-w-sm">
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" placeholder="johndoe" />
              <FieldDescription>
                This will be your public display name.
              </FieldDescription>
            </Field>
          </ComponentPreview>

          <ComponentPreview
            title="With Error"
            code={`<Field data-invalid="true">
  <FieldLabel htmlFor="password">Password</FieldLabel>
  <Input id="password" type="password" aria-invalid="true" />
  <FieldError>Password must be at least 8 characters.</FieldError>
</Field>`}
          >
            <Field className="w-full max-w-sm" data-invalid="true">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" aria-invalid="true" />
              <FieldError>Password must be at least 8 characters.</FieldError>
            </Field>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">Field</h3>
            <PropsTable
              props={[
                {
                  name: 'orientation',
                  type: '"vertical" | "horizontal" | "responsive"',
                  default: '"vertical"',
                  description: 'Layout direction of label and input.',
                },
                {
                  name: 'data-invalid',
                  type: 'string',
                  description: 'Set to "true" for error state styling.',
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
              FieldError
            </h3>
            <PropsTable
              props={[
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'Direct error message content.',
                },
                {
                  name: 'errors',
                  type: 'Array<{ message?: string }>',
                  description:
                    'Array of error objects. Displays unique messages.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              FieldLegend
            </h3>
            <PropsTable
              props={[
                {
                  name: 'variant',
                  type: '"legend" | "label"',
                  default: '"legend"',
                  description: 'Text style variant.',
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
            title="Field Group"
            code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="first">First Name</FieldLabel>
    <Input id="first" />
  </Field>
  <Field>
    <FieldLabel htmlFor="last">Last Name</FieldLabel>
    <Input id="last" />
  </Field>
</FieldGroup>`}
          >
            <FieldGroup className="w-full max-w-sm">
              <Field>
                <FieldLabel htmlFor="first">First Name</FieldLabel>
                <Input id="first" />
              </Field>
              <Field>
                <FieldLabel htmlFor="last">Last Name</FieldLabel>
                <Input id="last" />
              </Field>
            </FieldGroup>
          </ComponentPreview>

          <ComponentPreview
            title="FieldSet with Legend"
            code={`<FieldSet>
  <FieldLegend>Contact Information</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="contact-email">Email</FieldLabel>
      <Input id="contact-email" type="email" />
    </Field>
    <Field>
      <FieldLabel htmlFor="phone">Phone</FieldLabel>
      <Input id="phone" type="tel" />
    </Field>
  </FieldGroup>
</FieldSet>`}
          >
            <FieldSet className="w-full max-w-sm">
              <FieldLegend>Contact Information</FieldLegend>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                  <Input id="contact-email" type="email" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input id="phone" type="tel" />
                </Field>
              </FieldGroup>
            </FieldSet>
          </ComponentPreview>

          <ComponentPreview
            title="Horizontal Checkbox Field"
            code={`<Field orientation="horizontal">
  <Checkbox id="terms" />
  <FieldContent>
    <FieldLabel htmlFor="terms">Accept terms</FieldLabel>
    <FieldDescription>
      You agree to our Terms of Service.
    </FieldDescription>
  </FieldContent>
</Field>`}
          >
            <Field orientation="horizontal" className="w-full max-w-sm">
              <Checkbox id="terms" />
              <FieldContent>
                <FieldLabel htmlFor="terms">Accept terms</FieldLabel>
                <FieldDescription>
                  You agree to our Terms of Service.
                </FieldDescription>
              </FieldContent>
            </Field>
          </ComponentPreview>

          <ComponentPreview
            title="Radio Group with FieldSet"
            code={`<FieldSet>
  <FieldLegend variant="label">Notification Preference</FieldLegend>
  <RadioGroup defaultValue="email">
    <Field orientation="horizontal">
      <RadioGroupItem value="email" id="pref-email" />
      <FieldLabel htmlFor="pref-email">Email</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="sms" id="pref-sms" />
      <FieldLabel htmlFor="pref-sms">SMS</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="push" id="pref-push" />
      <FieldLabel htmlFor="pref-push">Push</FieldLabel>
    </Field>
  </RadioGroup>
</FieldSet>`}
          >
            <FieldSet className="w-full max-w-sm">
              <FieldLegend variant="label">Notification Preference</FieldLegend>
              <RadioGroup defaultValue="email">
                <Field orientation="horizontal">
                  <RadioGroupItem value="email" id="pref-email" />
                  <FieldLabel htmlFor="pref-email">Email</FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="sms" id="pref-sms" />
                  <FieldLabel htmlFor="pref-sms">SMS</FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="push" id="pref-push" />
                  <FieldLabel htmlFor="pref-push">Push</FieldLabel>
                </Field>
              </RadioGroup>
            </FieldSet>
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
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from '@/components/ui/field'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">Field</code> wraps a
                single input with label, description, error
              </li>
              <li>
                <code className="rounded bg-muted px-1">FieldGroup</code> wraps
                multiple Fields with proper spacing
              </li>
              <li>
                <code className="rounded bg-muted px-1">FieldSet</code> +{' '}
                <code className="rounded bg-muted px-1">FieldLegend</code> for
                semantic grouping
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">orientation</code> prop
                for layout direction
              </li>
              <li>
                Add{' '}
                <code className="rounded bg-muted px-1">
                  data-invalid=&quot;true&quot;
                </code>{' '}
                to Field for error styling
              </li>
              <li>
                <code className="rounded bg-muted px-1">FieldContent</code>{' '}
                groups description and error next to checkbox/radio
              </li>
              <li>
                <code className="rounded bg-muted px-1">FieldError</code> can
                accept <code className="rounded bg-muted px-1">errors</code>{' '}
                array prop
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Vertical field (default)
<Field>
  <FieldLabel htmlFor="x">Label</FieldLabel>
  <Input id="x" />
</Field>

// Horizontal checkbox
<Field orientation="horizontal">
  <Checkbox id="x" />
  <FieldContent>
    <FieldLabel htmlFor="x">Label</FieldLabel>
    <FieldDescription>Description</FieldDescription>
  </FieldContent>
</Field>

// With error state
<Field data-invalid="true">
  <FieldLabel htmlFor="x">Label</FieldLabel>
  <Input id="x" aria-invalid="true" />
  <FieldError>Error message</FieldError>
</Field>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
