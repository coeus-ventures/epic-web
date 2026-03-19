'use client'

import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Separator } from '@/components/ui/separator'
import { Command } from 'lucide-react'

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

export default function KbdPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Kbd
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays keyboard keys or shortcuts in a styled inline element.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Kbd component renders a styled keyboard key indicator. It's
            commonly used to display keyboard shortcuts in documentation, help
            text, or application interfaces.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to show keyboard shortcuts,
            hotkeys, or key combinations in your UI.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Kbd</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A single keyboard key element with consistent styling.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">KbdGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A container for grouping multiple Kbd elements together with
              proper spacing.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Kbd, KbdGroup } from '@/components/ui/kbd'`}</code>
        </pre>
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="Single Key"
            code="<Kbd>K</Kbd>"
          >
            <Kbd>K</Kbd>
          </ComponentPreview>

          <ComponentPreview
            title="Modifier Keys"
            code={`<Kbd>⌘</Kbd>
<Kbd>⌥</Kbd>
<Kbd>⇧</Kbd>
<Kbd>⌃</Kbd>`}
          >
            <Kbd>⌘</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>⌃</Kbd>
          </ComponentPreview>

          <ComponentPreview
            title="With Icon"
            code={`<Kbd>
  <Command />
</Kbd>`}
          >
            <Kbd>
              <Command />
            </Kbd>
          </ComponentPreview>

          <ComponentPreview
            title="Key Combination (using KbdGroup)"
            code={`<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
          >
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Multiple Shortcuts"
            code={`<div className="flex items-center gap-4">
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>C</Kbd>
  </KbdGroup>
  <span className="text-muted-foreground">Copy</span>
</div>
<div className="flex items-center gap-4">
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>V</Kbd>
  </KbdGroup>
  <span className="text-muted-foreground">Paste</span>
</div>`}
          >
            <div className="flex items-center gap-4">
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>C</Kbd>
              </KbdGroup>
              <span className="text-muted-foreground">Copy</span>
            </div>
            <div className="flex items-center gap-4">
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>V</Kbd>
              </KbdGroup>
              <span className="text-muted-foreground">Paste</span>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Function Keys"
            code={`<Kbd>F1</Kbd>
<Kbd>Esc</Kbd>
<Kbd>Enter</Kbd>
<Kbd>Tab</Kbd>`}
          >
            <Kbd>F1</Kbd>
            <Kbd>Esc</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Tab</Kbd>
          </ComponentPreview>

          <ComponentPreview
            title="In a Sentence"
            code={`<p className="text-sm text-muted-foreground">
  Press{' '}
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>{' '}
  to open the command palette.
</p>`}
          >
            <p className="text-sm text-muted-foreground">
              Press{' '}
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>{' '}
              to open the command palette.
            </p>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'The key text or icon to display.',
            },
          ]}
        />
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { Kbd, KbdGroup } from '@/components/ui/kbd'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Single key
<Kbd>K</Kbd>

// Key combination
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Uses semantic <code className="rounded bg-muted px-1">kbd</code>{' '}
                HTML element
              </li>
              <li>
                Default height is{' '}
                <code className="rounded bg-muted px-1">h-5</code> (20px) with
                minimum width <code className="rounded bg-muted px-1">min-w-5</code>
              </li>
              <li>
                Icons automatically size to 12px via{' '}
                <code className="rounded bg-muted px-1">[&_svg]:size-3</code>
              </li>
              <li>
                <code className="rounded bg-muted px-1">KbdGroup</code> provides
                flex container with{' '}
                <code className="rounded bg-muted px-1">gap-1</code>
              </li>
              <li>
                Special styling when inside tooltips (inverted colors)
              </li>
              <li>
                Use Unicode symbols for modifier keys: ⌘ (Cmd), ⌥ (Option), ⇧
                (Shift), ⌃ (Ctrl)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--muted</code> for
                background color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--muted-foreground</code>{' '}
                for text color
              </li>
              <li>
                Inside tooltips: uses{' '}
                <code className="rounded bg-muted px-1">--background</code> with
                opacity
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Symbols</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Mac modifier keys
⌘ - Command
⌥ - Option/Alt
⇧ - Shift
⌃ - Control
⎋ - Escape
⌫ - Delete
⏎ - Return/Enter
⇥ - Tab

// Windows/generic
Ctrl, Alt, Shift, Enter, Esc`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
