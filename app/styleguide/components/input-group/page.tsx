'use client'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Mail, Search, Eye, EyeOff, Copy, DollarSign, AtSign } from 'lucide-react'
import { useState } from 'react'

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

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          variant="ghost"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default function InputGroupPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Input Group
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An input with attached icons, buttons, or text addons.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The InputGroup component wraps an input with addon elements like
            icons, buttons, or text. Addons can be placed at the start, end, top
            or bottom of the input.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to attach context or actions to
            an input, such as currency symbols, search icons, clear buttons, or
            password visibility toggles.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container that groups input with addons. Manages focus styles.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputGroupInput</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Styled input without border (inherits from group).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputGroupTextarea</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Styled textarea without border for multi-line input.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputGroupAddon</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for addon content. Supports 4 alignment positions.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputGroupButton</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Button styled for use inside input group.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">InputGroupText</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Text or icon wrapper for static addon content.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Addon Positions">
        <div className="space-y-8">
          <ComponentPreview
            title="Start Addon (Icon)"
            code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><Mail /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Email" />
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <Mail />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="Email" />
            </InputGroup>
          </ComponentPreview>

          <ComponentPreview
            title="End Addon (Button)"
            code={`<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton><Search /></InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <Search />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Start Addon (Text)"
            code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><DollarSign /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="0.00" type="number" />
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <DollarSign />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="0.00" type="number" />
            </InputGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Both Start and End"
            code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><AtSign /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="username" />
  <InputGroupAddon align="inline-end">
    <InputGroupText className="text-xs">.example.com</InputGroupText>
  </InputGroupAddon>
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupAddon align="inline-start">
                <InputGroupText>
                  <AtSign />
                </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText className="text-xs">.example.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              InputGroupAddon
            </h3>
            <PropsTable
              props={[
                {
                  name: 'align',
                  type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
                  default: '"inline-start"',
                  description: 'Position of the addon relative to input.',
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
              InputGroupButton
            </h3>
            <PropsTable
              props={[
                {
                  name: 'size',
                  type: '"xs" | "sm" | "icon-xs" | "icon-sm"',
                  default: '"xs"',
                  description: 'Size of the button.',
                },
                {
                  name: 'variant',
                  type: 'Button variants',
                  default: '"ghost"',
                  description: 'Visual style of the button.',
                },
                {
                  name: 'type',
                  type: '"button" | "submit" | "reset"',
                  default: '"button"',
                  description: 'HTML button type.',
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
            title="Password with Toggle"
            code={`const [showPassword, setShowPassword] = useState(false)

<InputGroup>
  <InputGroupInput
    type={showPassword ? 'text' : 'password'}
    placeholder="Enter password"
  />
  <InputGroupAddon align="inline-end">
    <InputGroupButton
      size="icon-xs"
      variant="ghost"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff /> : <Eye />}
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          >
            <PasswordInput />
          </ComponentPreview>

          <ComponentPreview
            title="Copy to Clipboard"
            code={`<InputGroup>
  <InputGroupInput value="https://example.com/share/abc123" readOnly />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs" variant="ghost">
      <Copy />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupInput
                value="https://example.com/share/abc123"
                readOnly
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" variant="ghost">
                  <Copy />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Label"
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <InputGroupText><Mail /></InputGroupText>
    </InputGroupAddon>
    <InputGroupInput id="email" placeholder="you@example.com" />
  </InputGroup>
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="email">Email</Label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                </InputGroupAddon>
                <InputGroupInput id="email" placeholder="you@example.com" />
              </InputGroup>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Textarea"
            code={`<InputGroup>
  <InputGroupTextarea placeholder="Enter your message..." />
</InputGroup>`}
          >
            <InputGroup className="max-w-sm">
              <InputGroupTextarea placeholder="Enter your message..." />
            </InputGroup>
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
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><Icon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="..." />
</InputGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">InputGroupInput</code>{' '}
                instead of regular Input inside group
              </li>
              <li>
                <code className="rounded bg-muted px-1">InputGroupAddon</code>{' '}
                positions:{' '}
                <code className="rounded bg-muted px-1">inline-start</code>,{' '}
                <code className="rounded bg-muted px-1">inline-end</code>,{' '}
                <code className="rounded bg-muted px-1">block-start</code>,{' '}
                <code className="rounded bg-muted px-1">block-end</code>
              </li>
              <li>
                Wrap icons with{' '}
                <code className="rounded bg-muted px-1">InputGroupText</code>
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">InputGroupButton</code>{' '}
                for clickable actions
              </li>
              <li>
                Focus styles are managed by{' '}
                <code className="rounded bg-muted px-1">InputGroup</code>{' '}
                container
              </li>
              <li>
                Height is <code className="rounded bg-muted px-1">h-9</code> by
                default
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Icon prefix
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><Icon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput />
</InputGroup>

// Button suffix
<InputGroup>
  <InputGroupInput />
  <InputGroupAddon align="inline-end">
    <InputGroupButton><Icon /></InputGroupButton>
  </InputGroupAddon>
</InputGroup>

// Text suffix
<InputGroup>
  <InputGroupInput />
  <InputGroupAddon align="inline-end">
    <InputGroupText>.com</InputGroupText>
  </InputGroupAddon>
</InputGroup>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
