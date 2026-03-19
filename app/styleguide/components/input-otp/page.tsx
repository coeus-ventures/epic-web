'use client'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'
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

export default function InputOTPPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Input OTP
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A one-time password input with individual character slots.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The InputOTP component provides a user-friendly way to enter
            one-time passwords or verification codes. Each digit gets its own
            input slot with automatic focus management.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to collect verification codes,
            2FA codes, PIN numbers, or any fixed-length numeric/alphanumeric
            input.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputOTP</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root component that manages the OTP input state and keyboard
              navigation.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputOTPGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual container for a group of slots. Creates connected slot
              appearance.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputOTPSlot</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual slot for a single character. Shows active state and
              caret.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputOTPSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual separator between slot groups (dash icon by default).
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variations">
        <div className="space-y-8">
          <ComponentPreview
            title="6 Digits (Single Group)"
            code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </ComponentPreview>

          <ComponentPreview
            title="With Separator (3-3)"
            code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </ComponentPreview>

          <ComponentPreview
            title="4 Digits"
            code={`<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code={`<InputOTP maxLength={6} disabled>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <InputOTP maxLength={6} disabled>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              InputOTP
            </h3>
            <PropsTable
              props={[
                {
                  name: 'maxLength',
                  type: 'number',
                  description: 'Total number of characters/slots.',
                },
                {
                  name: 'value',
                  type: 'string',
                  description: 'Controlled value.',
                },
                {
                  name: 'onChange',
                  type: '(value: string) => void',
                  description: 'Callback when value changes.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable the entire input.',
                },
                {
                  name: 'containerClassName',
                  type: 'string',
                  description: 'Class for the outer container.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Class for the hidden input.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              InputOTPSlot
            </h3>
            <PropsTable
              props={[
                {
                  name: 'index',
                  type: 'number',
                  description: 'Zero-based index of this slot.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes.',
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
  <Label>Verification Code</Label>
  <InputOTP maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
  <p className="text-sm text-muted-foreground">
    Enter the 6-digit code sent to your email.
  </p>
</div>`}
          >
            <div className="space-y-2">
              <Label>Verification Code</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit code sent to your email.
              </p>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="PIN Entry"
            code={`<div className="space-y-2">
  <Label>Enter PIN</Label>
  <InputOTP maxLength={4}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
  </InputOTP>
</div>`}
          >
            <div className="space-y-2">
              <Label>Enter PIN</Label>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
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
              <code>{`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">maxLength</code> must
                match the number of{' '}
                <code className="rounded bg-muted px-1">InputOTPSlot</code>{' '}
                components
              </li>
              <li>
                <code className="rounded bg-muted px-1">index</code> on each
                slot must be sequential starting from 0
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">InputOTPGroup</code> to
                visually group connected slots
              </li>
              <li>
                <code className="rounded bg-muted px-1">InputOTPSeparator</code>{' '}
                adds visual break between groups
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">input-otp</code>{' '}
                library
              </li>
              <li>Automatically handles paste, backspace, and arrow keys</li>
              <li>
                Slot size is{' '}
                <code className="rounded bg-muted px-1">size-9</code> (36px)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// 6 digits with 3-3 separator
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// 4 digit PIN
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--input</code> for slot
                border
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for active
                slot focus ring
              </li>
              <li>
                <code className="rounded bg-muted px-1">--foreground</code> for
                caret animation
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
