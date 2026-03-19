'use client'

import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import { ChevronDown, ChevronsUpDown } from 'lucide-react'

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

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [controlledOpen, setControlledOpen] = useState(true)

  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Collapsible
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An interactive component that expands and collapses content panels.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Collapsible component provides expand/collapse functionality for
            content sections. It's useful for progressive disclosure,
            accordions, and any UI where content should be hidden until the user
            requests it.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to hide secondary content,
            create expandable sections, build FAQ panels, or implement
            show/hide toggles.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Collapsible</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container that manages the open/closed state. Wraps the
              trigger and content.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CollapsibleTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The interactive element (button) that toggles the content
              visibility. Can wrap any clickable element.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CollapsibleContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The panel that expands or collapses. Contains the hidden content
              that appears when expanded.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default (Uncontrolled)"
            code={`<Collapsible>
  <CollapsibleTrigger className="flex items-center gap-2">
    Toggle <ChevronDown className="h-4 w-4" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Hidden content goes here.</p>
  </CollapsibleContent>
</Collapsible>`}
          >
            <Collapsible className="w-full max-w-sm">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                Toggle content
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="rounded-md border border-border px-4 py-3 text-sm">
                  This content is hidden by default and appears when you click
                  the trigger.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ComponentPreview>

          <ComponentPreview
            title="Controlled State"
            code={`const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger className="px-4 py-2 border rounded-md">
    {open ? 'Close' : 'Open'}
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Controlled content.</p>
  </CollapsibleContent>
</Collapsible>`}
          >
            <Collapsible
              open={controlledOpen}
              onOpenChange={setControlledOpen}
              className="w-full max-w-sm"
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                {controlledOpen ? 'Click to close' : 'Click to open'}
                <ChevronsUpDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="rounded-md border border-border px-4 py-3 text-sm">
                  This is controlled content. State: {controlledOpen ? 'open' : 'closed'}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 font-medium text-foreground">Collapsible</h4>
            <PropsTable
              props={[
                {
                  name: 'open',
                  type: 'boolean',
                  description:
                    'Controlled open state. Use with onOpenChange for controlled mode.',
                },
                {
                  name: 'defaultOpen',
                  type: 'boolean',
                  default: 'false',
                  description: 'Initial open state for uncontrolled mode.',
                },
                {
                  name: 'onOpenChange',
                  type: '(open: boolean) => void',
                  description: 'Callback when the open state changes.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Prevents the user from toggling the collapsible.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-3 font-medium text-foreground">
              CollapsibleTrigger
            </h4>
            <PropsTable
              props={[
                {
                  name: 'asChild',
                  type: 'boolean',
                  default: 'false',
                  description:
                    'Merges props onto child element instead of rendering a button.',
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
            title="Expandable List"
            code={`<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <div className="flex items-center justify-between">
    <h4>@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger className="p-2 hover:bg-accent rounded-md">
      <ChevronsUpDown className="h-4 w-4" />
    </CollapsibleTrigger>
  </div>
  <div className="mt-2">@radix-ui/primitives</div>
  <CollapsibleContent className="space-y-2">
    <div>@radix-ui/colors</div>
    <div>@stitches/react</div>
  </CollapsibleContent>
</Collapsible>`}
          >
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full max-w-sm space-y-2"
            >
              <div className="flex items-center justify-between rounded-md border border-border px-4 py-3">
                <span className="text-sm font-medium">
                  @peduarte starred 3 repositories
                </span>
                <CollapsibleTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border border-border px-4 py-3 text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border border-border px-4 py-3 text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border border-border px-4 py-3 text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ComponentPreview>

          <ComponentPreview
            title="FAQ Item"
            code={`<Collapsible className="border rounded-lg">
  <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
    <span className="font-medium">What is shadcn/ui?</span>
    <ChevronDown className="h-4 w-4" />
  </CollapsibleTrigger>
  <CollapsibleContent className="px-4 pb-4">
    <p className="text-muted-foreground">
      shadcn/ui is a collection of reusable components...
    </p>
  </CollapsibleContent>
</Collapsible>`}
          >
            <Collapsible className="w-full max-w-sm rounded-lg border border-border">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium hover:bg-muted/50">
                What is shadcn/ui?
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4">
                <p className="text-sm text-muted-foreground">
                  shadcn/ui is a collection of reusable components built with
                  Radix UI and Tailwind CSS. Components are copied into your
                  project for full customization.
                </p>
              </CollapsibleContent>
            </Collapsible>
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content here
  </CollapsibleContent>
</Collapsible>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                All three components are required:{' '}
                <code className="rounded bg-muted px-1">Collapsible</code>,{' '}
                <code className="rounded bg-muted px-1">CollapsibleTrigger</code>,{' '}
                <code className="rounded bg-muted px-1">CollapsibleContent</code>
              </li>
              <li>
                Style CollapsibleTrigger directly via{' '}
                <code className="rounded bg-muted px-1">className</code> — it
                renders as a button element
              </li>
              <li>
                For controlled state, use{' '}
                <code className="rounded bg-muted px-1">open</code> and{' '}
                <code className="rounded bg-muted px-1">onOpenChange</code> props
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">defaultOpen</code>{' '}
                for uncontrolled initial state
              </li>
              <li>
                Built on <code className="rounded bg-muted px-1">@base-ui/react/collapsible</code>{' '}
                primitives
              </li>
              <li>
                Keyboard accessible: Enter/Space to toggle
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Controlled Pattern</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  ...
</Collapsible>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Data Attributes</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">data-slot=&quot;collapsible&quot;</code>{' '}
                on root
              </li>
              <li>
                <code className="rounded bg-muted px-1">data-slot=&quot;collapsible-trigger&quot;</code>{' '}
                on trigger
              </li>
              <li>
                <code className="rounded bg-muted px-1">data-slot=&quot;collapsible-content&quot;</code>{' '}
                on content
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
