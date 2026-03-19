'use client'

import { Textarea } from '@/components/ui/textarea'
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

export default function TextareaPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Textarea
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A multi-line text input field for longer content.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Textarea component is a multi-line text input that allows users
            to enter longer form content. It uses CSS{' '}
            <code>field-sizing: content</code> for automatic height adjustment.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Collecting multi-line text like comments,
            descriptions, messages, or any content that may span multiple lines.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Textarea</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The textarea element. Accepts all native textarea props.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Textarea } from '@/components/ui/textarea'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="States">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code='<Textarea placeholder="Type your message here..." />'
          >
            <Textarea placeholder="Type your message here..." className="max-w-md" />
          </ComponentPreview>

          <ComponentPreview
            title="With Content"
            code='<Textarea defaultValue="This is some pre-filled content that spans multiple lines to demonstrate how the textarea handles longer text." />'
          >
            <Textarea
              defaultValue="This is some pre-filled content that spans multiple lines to demonstrate how the textarea handles longer text."
              className="max-w-md"
            />
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code='<Textarea disabled placeholder="Disabled textarea" />'
          >
            <Textarea disabled placeholder="Disabled textarea" className="max-w-md" />
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'placeholder',
              type: 'string',
              description: 'Placeholder text shown when textarea is empty.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the textarea is disabled.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'Controlled value of the textarea.',
            },
            {
              name: 'defaultValue',
              type: 'string',
              description: 'Default value (uncontrolled).',
            },
            {
              name: 'onChange',
              type: '(e: ChangeEvent<HTMLTextAreaElement>) => void',
              description: 'Callback fired when value changes.',
            },
            {
              name: 'rows',
              type: 'number',
              description:
                'Visible number of lines. Auto-sizes with field-sizing by default.',
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
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message..." />
</div>`}
          >
            <div className="w-full max-w-md space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message..." />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Character Count"
            code={`<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
  <p className="text-sm text-muted-foreground">
    Maximum 500 characters
  </p>
</div>`}
          >
            <div className="w-full max-w-md space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." />
              <p className="text-sm text-muted-foreground">
                Maximum 500 characters
              </p>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Fixed Height"
            code={`<Textarea
  placeholder="Fixed height textarea"
  className="min-h-32 resize-none"
/>`}
          >
            <Textarea
              placeholder="Fixed height textarea"
              className="max-w-md min-h-32 resize-none"
            />
          </ComponentPreview>

          <ComponentPreview
            title="Resizable"
            code={`<Textarea
  placeholder="Drag corner to resize"
  className="resize-y"
/>`}
          >
            <Textarea
              placeholder="Drag corner to resize"
              className="max-w-md resize-y"
            />
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<div className="space-y-2">
  <Label htmlFor="description">Description</Label>
  <Textarea
    id="description"
    placeholder="Enter description..."
  />
</div>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Uses CSS{' '}
                <code className="rounded bg-muted px-1">
                  field-sizing: content
                </code>{' '}
                for auto-height
              </li>
              <li>
                Default min-height is{' '}
                <code className="rounded bg-muted px-1">min-h-16</code> (64px)
              </li>
              <li>
                Width is <code className="rounded bg-muted px-1">w-full</code>{' '}
                by default
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">aria-invalid</code> for
                error states
              </li>
              <li>
                Add <code className="rounded bg-muted px-1">resize-none</code>{' '}
                to disable resizing
              </li>
              <li>
                Add <code className="rounded bg-muted px-1">resize-y</code> for
                vertical-only resize
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
            <h4 className="font-medium text-foreground">Size Control</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Fixed height, no resize
<Textarea className="min-h-32 resize-none" />

// Vertical resize only
<Textarea className="resize-y" />

// Allow full resize (both directions)
<Textarea className="resize" />`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
