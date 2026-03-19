'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Menu } from 'lucide-react'

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

function ControlledSheetExample() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>
        Open Controlled Sheet
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Controlled Sheet</SheetTitle>
          <SheetDescription>
            This sheet is controlled via React state. Status: {open ? 'open' : 'closed'}
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            You can programmatically control the sheet open state.
          </p>
        </div>
        <SheetFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close via State
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default function SheetPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Sheet
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A panel that slides from the edge of the screen to display complementary content.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Sheet component extends Dialog to display content that complements the
            main content of the screen. It slides from any edge and is ideal for navigation,
            filters, settings, or any supplementary content.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need a side panel for navigation, filters,
            settings, or any content that complements (not interrupts) the main view.
          </p>
          <p className="text-muted-foreground">
            <strong>Sheet vs Dialog:</strong> Sheet slides from an edge and is for
            complementary content. Dialog is centered and interrupts for focused tasks.
          </p>
          <p className="text-muted-foreground">
            <strong>Sheet vs Drawer:</strong> Sheet is for keyboard/mouse interfaces
            without swipe gestures. Drawer is touch-friendly with swipe-to-dismiss.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Sheet</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root container that manages open/closed state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Element that opens the sheet when clicked.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Main content container. Supports side prop for positioning.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for title and description at the top.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetFooter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for action buttons at the bottom.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetTitle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Accessible title for the sheet.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Optional description below the title.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SheetClose</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Element that closes the sheet when clicked.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Side Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Right (Default)"
            code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Right Sheet
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Right Sheet</SheetTitle>
      <SheetDescription>
        Slides in from the right edge.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Right Sheet
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                  <SheetDescription>
                    Slides in from the right edge. Common for navigation, settings, or details panels.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Left"
            code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Left Sheet
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
      <SheetDescription>
        Slides in from the left edge.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Left Sheet
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>
                    Slides in from the left edge. Great for navigation menus.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Top"
            code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Top Sheet
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Top Sheet</SheetTitle>
      <SheetDescription>
        Slides down from the top edge.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Top Sheet
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top Sheet</SheetTitle>
                  <SheetDescription>
                    Slides down from the top edge. Useful for notifications or announcements.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Bottom"
            code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Bottom Sheet
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Bottom Sheet</SheetTitle>
      <SheetDescription>
        Slides up from the bottom edge.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Bottom Sheet
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                  <SheetDescription>
                    Slides up from the bottom edge. Similar to action sheets on mobile.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Sheet</h3>
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
            <h3 className="mb-4 text-lg font-medium">SheetContent</h3>
            <PropsTable
              props={[
                {
                  name: 'side',
                  type: '"top" | "right" | "bottom" | "left"',
                  default: '"right"',
                  description: 'The edge from which the sheet slides.',
                },
                {
                  name: 'showCloseButton',
                  type: 'boolean',
                  default: 'true',
                  description: 'Whether to show the default close button.',
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
            title="Basic Sheet"
            code={`<Sheet>
  <SheetTrigger render={<Button />}>
    Open Sheet
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is the sheet description.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button />}>Open Sheet</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    This is the sheet description.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Mobile Navigation"
            code={`<Sheet>
  <SheetTrigger render={<Button variant="ghost" size="icon" />}>
    <Menu className="h-5 w-5" />
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    <nav className="flex flex-col gap-2 p-4">
      <a href="#" className="py-2 hover:text-primary">Home</a>
      <a href="#" className="py-2 hover:text-primary">Products</a>
      <a href="#" className="py-2 hover:text-primary">About</a>
      <a href="#" className="py-2 hover:text-primary">Contact</a>
    </nav>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 p-4">
                  <a href="#" className="py-2 hover:text-primary" onClick={(e) => e.preventDefault()}>Home</a>
                  <a href="#" className="py-2 hover:text-primary" onClick={(e) => e.preventDefault()}>Products</a>
                  <a href="#" className="py-2 hover:text-primary" onClick={(e) => e.preventDefault()}>About</a>
                  <a href="#" className="py-2 hover:text-primary" onClick={(e) => e.preventDefault()}>Contact</a>
                </nav>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Settings Form"
            code={`<Sheet>
  <SheetTrigger render={<Button />}>
    Edit Profile
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@johndoe" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>
        Cancel
      </SheetClose>
      <Button>Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button />}>Edit Profile</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="sheet-name">Name</Label>
                    <Input id="sheet-name" defaultValue="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="sheet-username">Username</Label>
                    <Input id="sheet-username" defaultValue="@johndoe" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" />}>
                    Cancel
                  </SheetClose>
                  <Button>Save changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Without Close Button"
            code={`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Open Sheet
  </SheetTrigger>
  <SheetContent showCloseButton={false}>
    <SheetHeader>
      <SheetTitle>No Close Button</SheetTitle>
      <SheetDescription>
        This sheet has no default close button.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose render={<Button />}>
        Done
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger render={<Button variant="outline" />}>
                Open Sheet
              </SheetTrigger>
              <SheetContent showCloseButton={false}>
                <SheetHeader>
                  <SheetTitle>No Close Button</SheetTitle>
                  <SheetDescription>
                    This sheet has no default close button. Use the button below.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose render={<Button />}>
                    Done
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </ComponentPreview>

          <ComponentPreview
            title="Controlled Sheet"
            code={`const [open, setOpen] = useState(false)

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger render={<Button variant="outline" />}>
    Open Controlled Sheet
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Controlled Sheet</SheetTitle>
      <SheetDescription>
        This sheet is controlled via React state.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>
        Close via State
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
          >
            <ControlledSheetExample />
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
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Sheet>
  <SheetTrigger render={<Button />}>
    Open
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    {/* Content here */}
    <SheetFooter>
      <Button>Action</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Required Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">Sheet</code> - Root wrapper (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">SheetTrigger</code> - Opens the sheet (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">SheetContent</code> - Content container (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">SheetTitle</code> - Required for accessibility
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Optional Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">SheetHeader</code> - Groups title and description
              </li>
              <li>
                <code className="rounded bg-muted px-1">SheetFooter</code> - Action buttons container
              </li>
              <li>
                <code className="rounded bg-muted px-1">SheetDescription</code> - Descriptive text
              </li>
              <li>
                <code className="rounded bg-muted px-1">SheetClose</code> - Custom close element
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Use <code className="rounded bg-muted px-1">render</code> prop on SheetTrigger to wrap your button
              </li>
              <li>
                Set position with <code className="rounded bg-muted px-1">side</code> prop on SheetContent:
                <code className="rounded bg-muted px-1 ml-1">"top" | "right" | "bottom" | "left"</code>
              </li>
              <li>
                SheetContent includes close button by default; hide with{' '}
                <code className="rounded bg-muted px-1">showCloseButton={'{false}'}</code>
              </li>
              <li>
                Left/right sheets have max-width of sm (24rem) on larger screens
              </li>
              <li>
                Sheet uses <code className="rounded bg-muted px-1">@base-ui/react/dialog</code> primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">When to Use Sheet vs Dialog vs Drawer</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Sheet:</strong> Complementary content from screen edge. Best for
                navigation, filters, settings. Keyboard/mouse optimized.
              </li>
              <li>
                <strong>Dialog:</strong> Centered modal for focused tasks requiring attention
                (confirmations, forms). Interrupts workflow.
              </li>
              <li>
                <strong>Drawer:</strong> Touch-friendly with swipe gestures. Best for
                mobile interfaces and action sheets.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Use Cases</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Mobile navigation menus (left side)</li>
              <li>Shopping cart or details panel (right side)</li>
              <li>Filters and settings (left or right)</li>
              <li>Notifications panel (right side)</li>
              <li>Quick actions (bottom)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Focus is trapped within the sheet when open</li>
              <li>Escape key closes the sheet</li>
              <li>Clicking the overlay closes the sheet</li>
              <li>Always include SheetTitle for screen readers</li>
              <li>Underlying content becomes inert (not interactive)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">CSS Variables / Customization</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--background</code> - Sheet background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--foreground</code> - Text color
              </li>
              <li>
                Override width via className on SheetContent (default w-3/4, max-w-sm)
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
