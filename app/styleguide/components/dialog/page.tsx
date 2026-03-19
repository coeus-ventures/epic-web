'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
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

function ControlledDialogExample() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>Open Controlled Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Controlled Dialog</DialogTitle>
          <DialogDescription>
            This dialog is controlled via React state. The open state is: {open ? 'true' : 'false'}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close via State
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function DialogPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Dialog
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A modal window that overlays the primary window, rendering underlying content inert.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Dialog component displays a modal window that interrupts the user workflow
            to focus on a specific task. It overlays the main content and prevents interaction
            with the underlying page until dismissed.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need user confirmation, collecting form input,
            displaying important information, or any task requiring focused attention.
          </p>
          <p className="text-muted-foreground">
            <strong>Dialog vs Sheet:</strong> Dialog appears centered on screen for focused tasks.
            Sheet slides from an edge for complementary content that relates to the main view.
          </p>
          <p className="text-muted-foreground">
            <strong>Dialog vs Drawer:</strong> Dialog is a fixed modal. Drawer is swipe-dismissable
            and better suited for mobile touch interfaces.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Dialog</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root container that manages open/closed state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Element that opens the dialog when clicked.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Main content container. Includes overlay and close button by default.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for title and description at the top.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogFooter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for action buttons at the bottom.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogTitle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Accessible title for the dialog.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Optional description below the title.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogClose</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Element that closes the dialog when clicked.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogPortal</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Renders dialog content in a portal (used internally by DialogContent).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">DialogOverlay</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Backdrop overlay (used internally by DialogContent).
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'`}</code>
        </pre>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Dialog</h3>
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
            <h3 className="mb-4 text-lg font-medium">DialogContent</h3>
            <PropsTable
              props={[
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
          <div>
            <h3 className="mb-4 text-lg font-medium">DialogFooter</h3>
            <PropsTable
              props={[
                {
                  name: 'showCloseButton',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether to show a close button in the footer.',
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
            title="Basic Dialog"
            code={`<Dialog>
  <DialogTrigger render={<Button />}>
    Open Dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is the dialog description.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is the dialog description.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </ComponentPreview>

          <ComponentPreview
            title="With Form"
            code={`<Dialog>
  <DialogTrigger render={<Button />}>
    Edit Profile
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" defaultValue="john@example.com" />
      </div>
    </div>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger render={<Button />}>Edit Profile</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john@example.com" />
                  </div>
                </div>
                <DialogFooter>
                  <Button>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>

          <ComponentPreview
            title="Confirmation Dialog"
            code={`<Dialog>
  <DialogTrigger render={<Button variant="destructive" />}>
    Delete Account
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently
        delete your account and remove your data.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>
        Cancel
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger render={<Button variant="destructive" />}>
                Delete Account
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently
                    delete your account and remove your data.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button variant="destructive">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>

          <ComponentPreview
            title="Without Close Button"
            code={`<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>No Close Button</DialogTitle>
      <DialogDescription>
        This dialog has no default close button.
        Use the button below to close.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Open Dialog
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>No Close Button</DialogTitle>
                  <DialogDescription>
                    This dialog has no default close button.
                    Use the button below to close.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>

          <ComponentPreview
            title="Controlled Dialog"
            code={`const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger render={<Button />}>
    Open Controlled Dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Controlled Dialog</DialogTitle>
      <DialogDescription>
        This dialog is controlled via React state.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>
        Close via State
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <ControlledDialogExample />
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
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Dialog>
  <DialogTrigger render={<Button />}>
    Open
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content here */}
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Required Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">Dialog</code> - Root wrapper (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">DialogTrigger</code> - Opens the dialog (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">DialogContent</code> - Content container (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">DialogTitle</code> - Required for accessibility
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Optional Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">DialogHeader</code> - Groups title and description
              </li>
              <li>
                <code className="rounded bg-muted px-1">DialogFooter</code> - Action buttons container
              </li>
              <li>
                <code className="rounded bg-muted px-1">DialogDescription</code> - Descriptive text
              </li>
              <li>
                <code className="rounded bg-muted px-1">DialogClose</code> - Custom close button
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Use <code className="rounded bg-muted px-1">render</code> prop on DialogTrigger to wrap your button:
                <code className="rounded bg-muted px-1 ml-1">{`<DialogTrigger render={<Button />}>Text</DialogTrigger>`}</code>
              </li>
              <li>
                DialogContent includes close button by default; hide with{' '}
                <code className="rounded bg-muted px-1">showCloseButton={'{false}'}</code>
              </li>
              <li>
                DialogFooter can show a close button with{' '}
                <code className="rounded bg-muted px-1">showCloseButton</code> prop
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">DialogClose</code> with render prop for custom close buttons
              </li>
              <li>
                Dialog uses <code className="rounded bg-muted px-1">@base-ui/react/dialog</code> primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Controlled vs Uncontrolled</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Uncontrolled: Just use Dialog with DialogTrigger, state managed internally
              </li>
              <li>
                Controlled: Pass <code className="rounded bg-muted px-1">open</code> and{' '}
                <code className="rounded bg-muted px-1">onOpenChange</code> props to Dialog
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">When to Use Dialog vs Sheet vs Drawer</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Dialog:</strong> Centered modal for focused tasks requiring user attention
                (confirmations, forms, alerts)
              </li>
              <li>
                <strong>Sheet:</strong> Slides from edge for complementary content that relates
                to the main view (filters, settings, navigation)
              </li>
              <li>
                <strong>Drawer:</strong> Touch-friendly, swipe-dismissable panel ideal for
                mobile interfaces
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Focus is trapped within the dialog when open</li>
              <li>Escape key closes the dialog</li>
              <li>Clicking the overlay closes the dialog</li>
              <li>Always include DialogTitle for screen readers</li>
              <li>Underlying content becomes inert (not interactive)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">CSS Variables / Customization</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--background</code> - Dialog background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--foreground</code> - Text color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--muted-foreground</code> - Description text
              </li>
              <li>
                Override width via className on DialogContent (default max-w-md)
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
