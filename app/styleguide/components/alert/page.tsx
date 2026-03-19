import { Terminal, AlertCircle, CheckCircle, Info, X } from 'lucide-react'
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export default function AlertPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Alert
        </h1>
        <p className="mt-2 text-muted-foreground">
          Displays a callout for user attention.
        </p>
      </header>

      {/* What it is */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          What it is
        </h2>
        <p className="text-muted-foreground">
          The Alert component displays important messages that require user
          attention but don't interrupt the user's workflow. Use alerts
          for informational messages, success confirmations, warnings, or error
          notifications that appear inline within the page content.
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
                <td className="py-3 pr-4 font-mono text-sm">Alert</td>
                <td className="py-3">
                  Container element with role=&quot;alert&quot; for accessibility
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">AlertTitle</td>
                <td className="py-3">Bold heading for the alert message</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  AlertDescription
                </td>
                <td className="py-3">
                  Body text with muted styling for detailed information
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">AlertAction</td>
                <td className="py-3">
                  Absolutely positioned container for action buttons (top-right)
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
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from '@/components/ui/alert'`}
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Default
            </h3>
            <Alert>
              <Terminal className="size-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the CLI.
              </AlertDescription>
            </Alert>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<Alert>
  <Terminal className="size-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Destructive
            </h3>
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Props</h2>
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
                  &quot;default&quot; | &quot;destructive&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-sm">
                  &quot;default&quot;
                </td>
                <td className="py-3">Visual style of the alert</td>
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
      </section>

      {/* Examples */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              With action button
            </h3>
            <Alert>
              <Info className="size-4" />
              <AlertTitle>New update available</AlertTitle>
              <AlertDescription>
                A new version of the application is ready to install.
              </AlertDescription>
              <AlertAction>
                <Button size="sm">Update now</Button>
              </AlertAction>
            </Alert>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Success alert (custom styling)
            </h3>
            <Alert className="border-green-500/50 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
              <CheckCircle className="size-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Dismissible alert with action
            </h3>
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>Connection lost</AlertTitle>
              <AlertDescription>
                Unable to connect to the server. Check your internet connection.
              </AlertDescription>
              <AlertAction>
                <Button variant="ghost" size="icon" className="size-6">
                  <X className="size-4" />
                </Button>
              </AlertAction>
            </Alert>
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
            <pre className="mt-1 rounded bg-muted p-2 font-mono text-xs">
              {`import { Alert, AlertTitle, AlertDescription, AlertAction } from '@/components/ui/alert'`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Required structure</h3>
            <p>
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                Alert
              </code>{' '}
              is required as the container.{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertTitle
              </code>{' '}
              and{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertDescription
              </code>{' '}
              are optional but recommended for proper semantic structure.{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                AlertAction
              </code>{' '}
              is optional for adding buttons.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Icon placement</h3>
            <p>
              Place an SVG icon (typically from lucide-react) as the first child
              of{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                Alert
              </code>
              . The component uses CSS grid to position the icon properly. Icons
              without a size class will default to{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                size-4
              </code>
              .
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Customization</h3>
            <p>
              Use className to customize colors and styling. For success or
              warning states (not built-in), apply custom background, text, and
              border colors via className on the{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                Alert
              </code>{' '}
              component.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">CSS variables</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>
                <code className="font-mono text-xs">--card</code> - Background
                color (default variant)
              </li>
              <li>
                <code className="font-mono text-xs">--card-foreground</code> -
                Text color (default variant)
              </li>
              <li>
                <code className="font-mono text-xs">--destructive</code> - Text
                color (destructive variant)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Common patterns</h3>
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 font-mono text-xs">
              {`// Basic alert
<Alert>
  <Terminal className="size-4" />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description text.</AlertDescription>
</Alert>

// With dismiss button
<Alert>
  <Info className="size-4" />
  <AlertTitle>Notice</AlertTitle>
  <AlertDescription>Important information.</AlertDescription>
  <AlertAction>
    <Button variant="ghost" size="icon" className="size-6">
      <X className="size-4" />
    </Button>
  </AlertAction>
</Alert>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
