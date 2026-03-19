'use client'

import * as React from 'react'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react'

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
      <div className="rounded-lg border border-border bg-card p-6">
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

export default function CommandPage() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Command
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Fast, composable command menu with fuzzy search and keyboard
          navigation.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Command component provides a command palette interface for quick
            actions and navigation. It features built-in fuzzy search, keyboard
            navigation, and grouping capabilities.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need a quick-access menu triggered by
            keyboard shortcut (typically Cmd+K or Ctrl+K), or an inline
            searchable list of actions.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Dropdown Menu (click-based
            actions) or Navigation Menu (site navigation), Command is optimized
            for keyboard-driven workflows with search functionality.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Command</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container that wraps all command components.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandDialog</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A dialog wrapper for the command palette. Includes accessible
              title/description.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandInput</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The search input with built-in search icon.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandList</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Scrollable container for command items with max-height.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandEmpty</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Shown when no results match the search query.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Groups related items with an optional heading.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual selectable item with icon and shortcut support.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandShortcut</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Displays keyboard shortcut hint aligned to the right.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CommandSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual divider between groups or items.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '@/components/ui/command'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Inline Command"
            code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </ComponentPreview>

          <ComponentPreview
            title="Dialog Command (Cmd+K style)"
            code={`const [open, setOpen] = React.useState(false)

<Button onClick={() => setOpen(true)}>
  Open Command Palette
</Button>

<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput placeholder="Search..." />
    <CommandList>
      <CommandEmpty>No results.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem>
          <User />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</CommandDialog>`}
          >
            <Button onClick={() => setOpen(true)}>Open Command Palette</Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem onSelect={() => setOpen(false)}>
                      <Calendar />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem onSelect={() => setOpen(false)}>
                      <Smile />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem onSelect={() => setOpen(false)}>
                      <Calculator />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem onSelect={() => setOpen(false)}>
                      <User />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => setOpen(false)}>
                      <CreditCard />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem onSelect={() => setOpen(false)}>
                      <Settings />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CommandDialog>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">CommandDialog</h4>
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
                  name: 'title',
                  type: 'string',
                  default: '"Command Palette"',
                  description: 'Accessible title (sr-only).',
                },
                {
                  name: 'description',
                  type: 'string',
                  default: '"Search for a command..."',
                  description: 'Accessible description (sr-only).',
                },
                {
                  name: 'showCloseButton',
                  type: 'boolean',
                  default: 'false',
                  description: 'Show close button in dialog.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">CommandItem</h4>
            <PropsTable
              props={[
                {
                  name: 'onSelect',
                  type: '(value: string) => void',
                  description: 'Callback when item is selected.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the item is disabled.',
                },
                {
                  name: 'value',
                  type: 'string',
                  description:
                    'Value used for filtering. Defaults to text content.',
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
            <h4 className="mb-4 font-medium text-foreground">CommandGroup</h4>
            <PropsTable
              props={[
                {
                  name: 'heading',
                  type: 'string',
                  description: 'Optional group heading text.',
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
            title="With Multiple Groups"
            code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User />
                    <span>Profile</span>
                  </CommandItem>
                  <CommandItem>
                    <Settings />
                    <span>Settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </ComponentPreview>

          <ComponentPreview
            title="With Shortcuts"
            code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Search actions..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>
        <User />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings />
        <span>Settings</span>
        <CommandShortcut>⌘,</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
          >
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search actions..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <User />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings />
                    <span>Settings</span>
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
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
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '@/components/ui/command'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Group">
      <CommandItem onSelect={() => {}}>
        <Icon />
        <span>Item</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> Command → CommandInput +
                CommandList → CommandGroup(s) → CommandItem(s)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">CommandDialog</code>{' '}
                for modal command palette (Cmd+K pattern)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">Command</code>{' '}
                directly for inline searchable lists
              </li>
              <li>
                Add <code className="rounded bg-muted px-1">CommandEmpty</code>{' '}
                for &quot;no results&quot; state
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">CommandShortcut</code>{' '}
                to display keyboard hints (display-only)
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">cmdk</code> library
              </li>
              <li>
                Fuzzy search is built-in and works automatically on item text
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              Dialog Pattern (Cmd+K)
            </h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const [open, setOpen] = React.useState(false)

// Add keyboard shortcut
React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <Command>
    <CommandInput placeholder="Search..." />
    <CommandList>
      {/* ... */}
    </CommandList>
  </Command>
</CommandDialog>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Root uses{' '}
                <code className="rounded bg-muted px-1">bg-popover</code> and{' '}
                <code className="rounded bg-muted px-1">text-popover-foreground</code>
              </li>
              <li>
                Selected items get{' '}
                <code className="rounded bg-muted px-1">bg-muted</code>{' '}
                highlight
              </li>
              <li>
                Icons auto-size to{' '}
                <code className="rounded bg-muted px-1">size-4</code>
              </li>
              <li>
                CommandList has{' '}
                <code className="rounded bg-muted px-1">max-h-72</code> with
                scroll
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Arrow Up/Down:</strong> Navigate between items
              </li>
              <li>
                <strong>Enter:</strong> Select focused item
              </li>
              <li>
                <strong>Escape:</strong> Close dialog (when in CommandDialog)
              </li>
              <li>
                <strong>Type:</strong> Filter items with fuzzy search
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
