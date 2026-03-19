'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export default function SonnerPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sonner
        </h1>
        <p className="mt-2 text-muted-foreground">
          An opinionated toast notification component for React.
        </p>
      </header>

      {/* What it is */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          What it is
        </h2>
        <p className="text-muted-foreground">
          Sonner provides toast notifications that appear temporarily to give
          users feedback on actions. Use toasts for non-blocking messages like
          success confirmations, errors, warnings, or informational updates that
          don't require user interaction.
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
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">Toaster</td>
                <td className="py-3">
                  Provider component that renders toasts. Must be added to root
                  layout.
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
          {`// Toaster component (add to layout)
import { Toaster } from '@/components/ui/sonner'

// Toast function (use anywhere to trigger toasts)
import { toast } from 'sonner'`}
        </pre>
      </section>

      {/* Setup */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Setup</h2>
        <p className="mb-4 text-muted-foreground">
          Add the Toaster component to your root layout (already done in this
          project):
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
          {`// app/layout.tsx
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Variants</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => toast('Default toast')}>
              Default
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success('Successfully saved!')}
            >
              Success
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info('Did you know?')}
            >
              Info
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning('Please review your input')}
            >
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error('Something went wrong')}
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast.promise(
                  new Promise((resolve) => setTimeout(resolve, 2000)),
                  {
                    loading: 'Loading...',
                    success: 'Done!',
                    error: 'Error',
                  }
                )
              }}
            >
              Promise
            </Button>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
            {`// Default
toast('Default toast')

// Success
toast.success('Successfully saved!')

// Info
toast.info('Did you know?')

// Warning
toast.warning('Please review your input')

// Error
toast.error('Something went wrong')

// Promise (shows loading, then success/error)
toast.promise(asyncFunction(), {
  loading: 'Loading...',
  success: 'Done!',
  error: 'Error',
})`}
          </pre>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Props</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Toaster Props
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
                    <td className="py-3 pr-4 font-mono text-sm">position</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;top-left&quot; | &quot;top-center&quot; |
                      &quot;top-right&quot; | &quot;bottom-left&quot; |
                      &quot;bottom-center&quot; | &quot;bottom-right&quot;
                    </td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;bottom-right&quot;
                    </td>
                    <td className="py-3">Position of toast container</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">duration</td>
                    <td className="py-3 pr-4 font-mono text-sm">number</td>
                    <td className="py-3 pr-4 font-mono text-sm">4000</td>
                    <td className="py-3">
                      Default duration in ms before toast auto-dismisses
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">richColors</td>
                    <td className="py-3 pr-4 font-mono text-sm">boolean</td>
                    <td className="py-3 pr-4 font-mono text-sm">false</td>
                    <td className="py-3">
                      Use more vibrant colors for different toast types
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-sm">closeButton</td>
                    <td className="py-3 pr-4 font-mono text-sm">boolean</td>
                    <td className="py-3 pr-4 font-mono text-sm">false</td>
                    <td className="py-3">Show close button on toasts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              toast() Options
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Option
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Type
                    </th>
                    <th className="py-3 text-left font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">description</td>
                    <td className="py-3 pr-4 font-mono text-sm">string</td>
                    <td className="py-3">Secondary text below the title</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">duration</td>
                    <td className="py-3 pr-4 font-mono text-sm">number</td>
                    <td className="py-3">Override default duration</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">action</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      {'{ label: string, onClick: () => void }'}
                    </td>
                    <td className="py-3">Add an action button</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-sm">cancel</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      {'{ label: string, onClick: () => void }'}
                    </td>
                    <td className="py-3">Add a cancel button</td>
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
              With description
            </h3>
            <Button
              variant="outline"
              onClick={() =>
                toast('Event created', {
                  description: 'Your meeting has been scheduled for tomorrow',
                })
              }
            >
              Show toast with description
            </Button>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`toast('Event created', {
  description: 'Your meeting has been scheduled for tomorrow',
})`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              With action button
            </h3>
            <Button
              variant="outline"
              onClick={() =>
                toast('File deleted', {
                  description: 'The file has been moved to trash',
                  action: {
                    label: 'Undo',
                    onClick: () => toast.success('File restored'),
                  },
                })
              }
            >
              Show toast with action
            </Button>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`toast('File deleted', {
  description: 'The file has been moved to trash',
  action: {
    label: 'Undo',
    onClick: () => toast.success('File restored'),
  },
})`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Custom duration
            </h3>
            <Button
              variant="outline"
              onClick={() =>
                toast.info('This toast stays longer', {
                  duration: 10000,
                })
              }
            >
              Show long toast (10s)
            </Button>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`toast.info('This toast stays longer', {
  duration: 10000, // 10 seconds
})`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Dismiss programmatically
            </h3>
            <Button
              variant="outline"
              onClick={() => {
                const toastId = toast.loading('Processing...')
                setTimeout(() => {
                  toast.dismiss(toastId)
                  toast.success('Complete!')
                }, 2000)
              }}
            >
              Show dismissible toast
            </Button>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`const toastId = toast.loading('Processing...')

// Later...
toast.dismiss(toastId)
toast.success('Complete!')`}
            </pre>
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
            <h3 className="font-medium text-foreground">Import statements</h3>
            <pre className="mt-1 rounded bg-muted p-2 font-mono text-xs">
              {`// For triggering toasts
import { toast } from 'sonner'

// Toaster is already in root layout, no need to import`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              Triggering toasts programmatically
            </h3>
            <p>
              Call{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast()
              </code>{' '}
              or its variants (
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast.success()
              </code>
              ,{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast.error()
              </code>
              ,{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast.warning()
              </code>
              ,{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast.info()
              </code>
              ,{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast.loading()
              </code>
              ) from any client component.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Toaster setup</h3>
            <p>
              The{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                Toaster
              </code>{' '}
              component from{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                @/components/ui/sonner
              </code>{' '}
              must be in the root layout. It's already configured with
              theme-aware styling in this project.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              Promise toast pattern
            </h3>
            <p>
              Use{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                toast.promise()
              </code>{' '}
              for async operations. It shows loading state, then success or
              error automatically based on promise resolution.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">CSS variables</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>
                <code className="font-mono text-xs">--popover</code> - Toast
                background
              </li>
              <li>
                <code className="font-mono text-xs">--popover-foreground</code>{' '}
                - Toast text color
              </li>
              <li>
                <code className="font-mono text-xs">--border</code> - Toast
                border color
              </li>
              <li>
                <code className="font-mono text-xs">--radius</code> - Toast
                border radius
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Common patterns</h3>
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 font-mono text-xs">
              {`// After form submission
toast.success('Changes saved')

// After error
toast.error('Failed to save changes')

// With undo action
toast('Item deleted', {
  action: {
    label: 'Undo',
    onClick: () => restoreItem(),
  },
})

// Async operation
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Could not save',
})`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
