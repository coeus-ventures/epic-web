'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Settings } from 'lucide-react'

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

function ControlledPopoverExample() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button variant="outline" />}>
        {open ? 'Close' : 'Open'} Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Controlled Popover</PopoverTitle>
          <PopoverDescription>
            State is controlled externally. Current: {open ? 'open' : 'closed'}
          </PopoverDescription>
        </PopoverHeader>
        <Button size="sm" onClick={() => setOpen(false)}>
          Close via state
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export default function PopoverPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Popover
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A floating panel triggered by a button for displaying rich interactive content.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Popover component displays rich content in a floating panel triggered by
            clicking a button. Unlike tooltips or hover cards, popovers can contain
            interactive elements like forms, buttons, and inputs.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display interactive content near a
            trigger element, such as filter panels, settings menus, or inline forms.
          </p>
          <p className="text-muted-foreground">
            <strong>Popover vs Dialog:</strong> Popover is attached to a trigger and
            positioned relative to it. Dialog is a centered modal overlay.
          </p>
          <p className="text-muted-foreground">
            <strong>Popover vs HoverCard:</strong> Popover opens on click and supports
            interactive content. HoverCard opens on hover and is for read-only previews.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Popover</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root container that manages open/closed state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PopoverTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Element that opens the popover when clicked.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PopoverContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for the popover content. Supports positioning via side and align props.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PopoverHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Optional container for title and description.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PopoverTitle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Title text for the popover.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PopoverDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Descriptive text below the title.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@/components/ui/popover'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Positioning Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Bottom (Default)"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Bottom
  </PopoverTrigger>
  <PopoverContent side="bottom">
    <p>Content appears below the trigger.</p>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Bottom
              </PopoverTrigger>
              <PopoverContent side="bottom">
                <p>Content appears below the trigger.</p>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="Top"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Top
  </PopoverTrigger>
  <PopoverContent side="top">
    <p>Content appears above the trigger.</p>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Top
              </PopoverTrigger>
              <PopoverContent side="top">
                <p>Content appears above the trigger.</p>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="Left"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Left
  </PopoverTrigger>
  <PopoverContent side="left">
    <p>Content appears to the left.</p>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Left
              </PopoverTrigger>
              <PopoverContent side="left">
                <p>Content appears to the left.</p>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="Right"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Right
  </PopoverTrigger>
  <PopoverContent side="right">
    <p>Content appears to the right.</p>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Right
              </PopoverTrigger>
              <PopoverContent side="right">
                <p>Content appears to the right.</p>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="Alignment Options"
            code={`<Popover>
  <PopoverTrigger>Align Start</PopoverTrigger>
  <PopoverContent align="start">...</PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger>Align Center</PopoverTrigger>
  <PopoverContent align="center">...</PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger>Align End</PopoverTrigger>
  <PopoverContent align="end">...</PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Align Start
              </PopoverTrigger>
              <PopoverContent align="start">
                <p>Aligned to the start edge.</p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Align Center
              </PopoverTrigger>
              <PopoverContent align="center">
                <p>Aligned to the center.</p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Align End
              </PopoverTrigger>
              <PopoverContent align="end">
                <p>Aligned to the end edge.</p>
              </PopoverContent>
            </Popover>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Popover</h3>
            <PropsTable
              props={[
                {
                  name: 'open',
                  type: 'boolean',
                  description: 'Controlled open state.',
                },
                {
                  name: 'onOpenChange',
                  type: '(open: boolean) => void',
                  description: 'Callback when open state changes.',
                },
                {
                  name: 'defaultOpen',
                  type: 'boolean',
                  default: 'false',
                  description: 'Initial open state for uncontrolled usage.',
                },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">PopoverContent</h3>
            <PropsTable
              props={[
                {
                  name: 'side',
                  type: '"top" | "right" | "bottom" | "left"',
                  default: '"bottom"',
                  description: 'Preferred side to position the content.',
                },
                {
                  name: 'sideOffset',
                  type: 'number',
                  default: '4',
                  description: 'Distance from the trigger in pixels.',
                },
                {
                  name: 'align',
                  type: '"start" | "center" | "end"',
                  default: '"center"',
                  description: 'Alignment along the side.',
                },
                {
                  name: 'alignOffset',
                  type: 'number',
                  default: '0',
                  description: 'Offset for alignment in pixels.',
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
            title="Basic Popover"
            code={`<Popover>
  <PopoverTrigger render={<Button />}>
    Open Popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Popover Title</PopoverTitle>
      <PopoverDescription>
        This is the popover description.
      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button />}>Open Popover</PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Popover Title</PopoverTitle>
                  <PopoverDescription>
                    This is the popover description.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="With Form"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    <Settings className="mr-2 h-4 w-4" />
    Settings
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>
        Set the dimensions for the layer.
      </PopoverDescription>
    </PopoverHeader>
    <div className="grid gap-4">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="width">Width</Label>
        <Input id="width" defaultValue="100%" className="col-span-2" />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="height">Height</Label>
        <Input id="height" defaultValue="25px" className="col-span-2" />
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <PopoverHeader>
                  <PopoverTitle>Dimensions</PopoverTitle>
                  <PopoverDescription>
                    Set the dimensions for the layer.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="grid gap-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="pop-width">Width</Label>
                    <Input id="pop-width" defaultValue="100%" className="col-span-2" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="pop-height">Height</Label>
                    <Input id="pop-height" defaultValue="25px" className="col-span-2" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="With Actions"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Actions
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Quick Actions</PopoverTitle>
      <PopoverDescription>
        Choose an action to perform.
      </PopoverDescription>
    </PopoverHeader>
    <div className="flex flex-col gap-2">
      <Button variant="ghost" className="justify-start">Edit</Button>
      <Button variant="ghost" className="justify-start">Duplicate</Button>
      <Button variant="ghost" className="justify-start text-destructive">
        Delete
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Actions
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Quick Actions</PopoverTitle>
                  <PopoverDescription>
                    Choose an action to perform.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="justify-start">Edit</Button>
                  <Button variant="ghost" className="justify-start">Duplicate</Button>
                  <Button variant="ghost" className="justify-start text-destructive">
                    Delete
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentPreview>

          <ComponentPreview
            title="Controlled Popover"
            code={`const [open, setOpen] = useState(false)

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger render={<Button variant="outline" />}>
    {open ? 'Close' : 'Open'} Popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Controlled Popover</PopoverTitle>
      <PopoverDescription>
        State is controlled externally.
      </PopoverDescription>
    </PopoverHeader>
    <Button size="sm" onClick={() => setOpen(false)}>
      Close via state
    </Button>
  </PopoverContent>
</Popover>`}
          >
            <ControlledPopoverExample />
          </ComponentPreview>

          <ComponentPreview
            title="Icon Button Trigger"
            code={`<Popover>
  <PopoverTrigger render={<Button variant="ghost" size="icon" />}>
    <Settings className="h-4 w-4" />
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">Settings popover content.</p>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger render={<Button variant="ghost" size="icon" />}>
                <Settings className="h-4 w-4" />
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">Settings popover content.</p>
              </PopoverContent>
            </Popover>
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@/components/ui/popover'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Popover>
  <PopoverTrigger render={<Button />}>
    Open
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Description</PopoverDescription>
    </PopoverHeader>
    {/* Interactive content here */}
  </PopoverContent>
</Popover>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Required Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">Popover</code> - Root wrapper (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">PopoverTrigger</code> - Opens the popover (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">PopoverContent</code> - Content container (required)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Optional Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">PopoverHeader</code> - Groups title and description
              </li>
              <li>
                <code className="rounded bg-muted px-1">PopoverTitle</code> - Title text
              </li>
              <li>
                <code className="rounded bg-muted px-1">PopoverDescription</code> - Description text
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Popover opens on <strong>click</strong>, not hover
              </li>
              <li>
                Default width is <code className="rounded bg-muted px-1">w-72</code> (18rem);
                customize with className
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">render</code> prop on PopoverTrigger for custom elements
              </li>
              <li>
                Position with <code className="rounded bg-muted px-1">side</code> and{' '}
                <code className="rounded bg-muted px-1">align</code> props on PopoverContent
              </li>
              <li>
                Popover uses <code className="rounded bg-muted px-1">@base-ui/react/popover</code> primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">When to Use Popover vs Dialog vs HoverCard</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Popover:</strong> Small interactive panels positioned near a trigger
                (filters, settings, menus). Opens on click.
              </li>
              <li>
                <strong>Dialog:</strong> Larger modal for focused tasks requiring user attention
                (confirmations, forms). Centered on screen.
              </li>
              <li>
                <strong>HoverCard:</strong> Read-only preview content. Opens on hover.
                No interactive elements.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Focus is managed within the popover when open</li>
              <li>Escape key closes the popover</li>
              <li>Clicking outside closes the popover</li>
              <li>Use PopoverTitle for accessible labeling</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">CSS Variables / Customization</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--popover</code> - Background color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--popover-foreground</code> - Text color
              </li>
              <li>
                Override width via className on PopoverContent
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
