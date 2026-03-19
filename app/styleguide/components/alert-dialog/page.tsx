'use client'

import { Trash2, AlertTriangle } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export default function AlertDialogPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Alert Dialog
        </h1>
        <p className="mt-2 text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </header>

      {/* What it is */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          What it is
        </h2>
        <p className="text-muted-foreground">
          The Alert Dialog is a modal component for actions that require
          explicit user confirmation, such as deleting data, discarding changes,
          or performing irreversible operations. Unlike regular dialogs, alert
          dialogs demand a user response before they can be dismissed.
        </p>
      </section>

      {/* Sub-components */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Sub-components
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-medium text-foreground">
                  Component
                </th>
                <th className="py-3 text-left font-medium text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">AlertDialog</td>
                <td className="py-3">Root wrapper that manages dialog state</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogTrigger
                </td>
                <td className="py-3">Element that opens the dialog</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogContent
                </td>
                <td className="py-3">
                  Modal container (includes overlay and portal)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogHeader
                </td>
                <td className="py-3">Container for title and description</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogTitle
                </td>
                <td className="py-3">Accessible title element</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogDescription
                </td>
                <td className="py-3">Descriptive text for context</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogMedia
                </td>
                <td className="py-3">
                  Optional container for icons or images in header
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogFooter
                </td>
                <td className="py-3">Container for action buttons</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogAction
                </td>
                <td className="py-3">
                  Primary action button (extends Button component)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogCancel
                </td>
                <td className="py-3">Cancel button that closes the dialog</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogOverlay
                </td>
                <td className="py-3">
                  Backdrop overlay (auto-included by Content)
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDialogPortal
                </td>
                <td className="py-3">
                  Portal container (auto-included by Content)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Import */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Import</h2>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
          {`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'`}
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Default size
            </h3>
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="outline" />}>
                Open Default Dialog
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Small size
            </h3>
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="outline" />}>
                Open Small Dialog
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm action?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to proceed?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <AlertDialogAction>Yes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<AlertDialogContent size="sm">
  {/* ... */}
</AlertDialogContent>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Props</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              AlertDialogContent
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Prop
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Type
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Default
                    </th>
                    <th className="py-3 text-left font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">size</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;default&quot; | &quot;sm&quot;
                    </td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;default&quot;
                    </td>
                    <td className="py-3">Size variant of the dialog</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-sm">className</td>
                    <td className="py-3 pr-4 font-mono text-sm">string</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              AlertDialogCancel
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Prop
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Type
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Default
                    </th>
                    <th className="py-3 text-left font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">variant</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      Button variants
                    </td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;outline&quot;
                    </td>
                    <td className="py-3">Button variant style</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-sm">size</td>
                    <td className="py-3 pr-4 font-mono text-sm">Button sizes</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;default&quot;
                    </td>
                    <td className="py-3">Button size</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Destructive action with media
            </h3>
            <AlertDialog>
              <AlertDialogTrigger
                render={
                  <Button variant="destructive">
                    <Trash2 className="mr-2 size-4" />
                  </Button>
                }
              >
                Delete Account
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia className="bg-destructive/10">
                    <Trash2 className="size-8 text-destructive" />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete your account and all associated
                    data. This action cannot be reversed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep account</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">
                    Delete account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Warning confirmation
            </h3>
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="outline" />}>
                Discard Changes
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogMedia className="bg-amber-100 dark:bg-amber-900/30">
                    <AlertTriangle className="size-8 text-amber-600 dark:text-amber-400" />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes that will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep editing</AlertDialogCancel>
                  <AlertDialogAction>Discard</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>

      {/* Notes for the AI */}
      <section className="rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Notes for the AI
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h3 className="font-medium text-foreground">Import statement</h3>
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 font-mono text-xs">
              {`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Required structure</h3>
            <p>
              AlertDialog requires this minimum structure:{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertDialog
              </code>{' '}
              →{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertDialogTrigger
              </code>{' '}
              +{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertDialogContent
              </code>
              . Content should contain{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertDialogHeader
              </code>{' '}
              (with Title and Description) and{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertDialogFooter
              </code>{' '}
              (with Cancel and Action buttons).
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              Trigger with render prop
            </h3>
            <p>
              Use the{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                render
              </code>{' '}
              prop on AlertDialogTrigger to render a custom component (like
              Button) instead of the default element. Example:{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                {'render={<Button />}'}
              </code>
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">AlertDialogMedia</h3>
            <p>
              Optional component for displaying icons or images in the header.
              Place it as the first child of AlertDialogHeader. Default styling
              is a 16x16 muted background rounded container.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              AlertDialogAction styling
            </h3>
            <p>
              AlertDialogAction renders a Button component. Pass Button props
              like{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                variant=&quot;destructive&quot;
              </code>{' '}
              for delete confirmations.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">CSS variables</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>
                <code className="font-mono text-xs">--background</code> - Dialog
                background
              </li>
              <li>
                <code className="font-mono text-xs">--foreground/10</code> -
                Ring color
              </li>
              <li>
                <code className="font-mono text-xs">--muted</code> - Media
                background
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Common pattern</h3>
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 font-mono text-xs">
              {`<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Delete
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm deletion?</AlertDialogTitle>
      <AlertDialogDescription>
        This cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
