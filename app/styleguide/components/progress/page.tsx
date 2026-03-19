'use client'

import { useState } from 'react'
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export default function ProgressPage() {
  const [value, setValue] = useState(33)

  return (
    <div className="max-w-4xl space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Progress
        </h1>
        <p className="mt-2 text-muted-foreground">
          Displays an indicator showing the completion progress of a task.
        </p>
      </header>

      {/* What it is */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          What it is
        </h2>
        <p className="text-muted-foreground">
          The Progress component displays a horizontal bar indicating the
          completion status of a task or process. Use it for file uploads, form
          completion steps, loading states, or any operation where users benefit
          from seeing progress feedback.
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
                <td className="py-3 pr-4 font-mono text-sm">Progress</td>
                <td className="py-3">
                  Root container that accepts value prop and auto-renders track
                  + indicator
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">ProgressTrack</td>
                <td className="py-3">
                  Background track element (auto-included by Progress)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">
                  ProgressIndicator
                </td>
                <td className="py-3">
                  Filled portion showing current progress (auto-included by
                  Progress)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">ProgressLabel</td>
                <td className="py-3">Optional text label above the bar</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">ProgressValue</td>
                <td className="py-3">
                  Optional percentage display (auto-formats as percentage)
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
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'`}
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Basic
            </h3>
            <Progress value={33} />
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<Progress value={33} />`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              With label and value
            </h3>
            <Progress value={66}>
              <ProgressLabel>Upload progress</ProgressLabel>
              <ProgressValue />
            </Progress>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<Progress value={66}>
  <ProgressLabel>Upload progress</ProgressLabel>
  <ProgressValue />
</Progress>`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Different progress values
            </h3>
            <div className="space-y-4">
              <Progress value={0}>
                <ProgressLabel>Not started</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={25}>
                <ProgressLabel>Quarter done</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={50}>
                <ProgressLabel>Halfway</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={75}>
                <ProgressLabel>Almost there</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress value={100}>
                <ProgressLabel>Complete</ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
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
                <td className="py-3 pr-4 font-mono text-sm">value</td>
                <td className="py-3 pr-4 font-mono text-sm">number</td>
                <td className="py-3 pr-4">—</td>
                <td className="py-3">
                  Current progress value (0-100 or custom max)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">max</td>
                <td className="py-3 pr-4 font-mono text-sm">number</td>
                <td className="py-3 pr-4 font-mono text-sm">100</td>
                <td className="py-3">Maximum value for calculating percentage</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">className</td>
                <td className="py-3 pr-4 font-mono text-sm">string</td>
                <td className="py-3 pr-4">—</td>
                <td className="py-3">Additional CSS classes for the root</td>
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
              Interactive progress
            </h3>
            <div className="space-y-4">
              <Progress value={value}>
                <ProgressLabel>Storage used</ProgressLabel>
                <ProgressValue />
              </Progress>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setValue(Math.max(0, value - 10))}
                >
                  -10%
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setValue(Math.min(100, value + 10))}
                >
                  +10%
                </Button>
                <Button variant="outline" size="sm" onClick={() => setValue(0)}>
                  Reset
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Custom colored indicator
            </h3>
            <div className="space-y-4">
              <Progress
                value={80}
                className="[&_[data-slot=progress-indicator]]:bg-green-500"
              >
                <ProgressLabel>Success</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress
                value={45}
                className="[&_[data-slot=progress-indicator]]:bg-amber-500"
              >
                <ProgressLabel>Warning</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Progress
                value={90}
                className="[&_[data-slot=progress-indicator]]:bg-red-500"
              >
                <ProgressLabel>Storage almost full</ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              File upload simulation
            </h3>
            <div className="rounded-lg border border-border p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">document.pdf</span>
                <span className="text-sm text-muted-foreground">2.4 MB</span>
              </div>
              <Progress value={73}>
                <ProgressLabel className="sr-only">
                  Upload progress
                </ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
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
              {`import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Basic usage</h3>
            <p>
              The simplest usage is{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                {'<Progress value={33} />'}
              </code>
              . The track and indicator are automatically rendered. Add{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                ProgressLabel
              </code>{' '}
              and{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                ProgressValue
              </code>{' '}
              as children for labels.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Component structure</h3>
            <p>
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                ProgressTrack
              </code>{' '}
              and{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                ProgressIndicator
              </code>{' '}
              are auto-included by the Progress component. You only need to
              import them if building a custom progress layout.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">ProgressValue</h3>
            <p>
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                ProgressValue
              </code>{' '}
              automatically formats the value as a percentage (e.g.,
              &quot;66%&quot;). It reads the value from the parent Progress
              context.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Custom colors</h3>
            <p>
              Customize the indicator color using the data-slot selector:{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                className=&quot;[&amp;_[data-slot=progress-indicator]]:bg-green-500&quot;
              </code>
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">CSS variables</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>
                <code className="font-mono text-xs">--muted</code> - Track
                background color
              </li>
              <li>
                <code className="font-mono text-xs">--primary</code> - Indicator
                color
              </li>
              <li>
                <code className="font-mono text-xs">--muted-foreground</code> -
                ProgressValue text color
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Common patterns</h3>
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 font-mono text-xs">
              {`// Basic progress bar
<Progress value={50} />

// With label and percentage
<Progress value={75}>
  <ProgressLabel>Loading...</ProgressLabel>
  <ProgressValue />
</Progress>

// Custom colored
<Progress
  value={90}
  className="[&_[data-slot=progress-indicator]]:bg-red-500"
>
  <ProgressLabel>Storage almost full</ProgressLabel>
  <ProgressValue />
</Progress>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
