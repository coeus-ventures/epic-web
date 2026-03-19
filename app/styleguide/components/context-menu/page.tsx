'use client'

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '@/components/ui/context-menu'
import { Separator } from '@/components/ui/separator'
import * as React from 'react'

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

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showFullUrls, setShowFullUrls] = React.useState(false)
  const [person, setPerson] = React.useState('pedro')

  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Context Menu
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays a menu triggered by right-click, offering contextual actions
          for the target element.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Context Menu component provides a right-click menu with actions
            relevant to the clicked element. It supports nested submenus,
            checkbox items, radio groups, and keyboard shortcuts.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to provide contextual actions
            for elements like file items, table rows, or canvas objects where
            right-click is the expected interaction pattern.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Dropdown Menu
            (click-triggered), Context Menu is triggered by right-click. Unlike
            Menubar (horizontal menu bar), Context Menu appears at cursor
            position.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ContextMenu</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root component that manages menu state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ContextMenuTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The element that triggers the menu on right-click.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ContextMenuContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The popover container for menu items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ContextMenuItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Standard menu item. Supports inset and destructive variants.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              ContextMenuCheckboxItem
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Toggleable menu item with checkmark indicator.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              ContextMenuRadioGroup / ContextMenuRadioItem
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Single-selection radio group within the menu.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ContextMenuLabel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Non-interactive label for grouping items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              ContextMenuSeparator
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual divider between menu sections.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ContextMenuShortcut</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Displays keyboard shortcut hint.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              ContextMenuSub / ContextMenuSubTrigger / ContextMenuSubContent
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Components for nested submenus.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '@/components/ui/context-menu'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic Context Menu"
            code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>View Page Source</ContextMenuItem>
    <ContextMenuItem>Inspect</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          >
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Back</ContextMenuItem>
                <ContextMenuItem>Forward</ContextMenuItem>
                <ContextMenuItem>Reload</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>View Page Source</ContextMenuItem>
                <ContextMenuItem>Inspect</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </ComponentPreview>

          <ComponentPreview
            title="With Shortcuts"
            code={`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          >
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">ContextMenuItem</h4>
            <PropsTable
              props={[
                {
                  name: 'inset',
                  type: 'boolean',
                  default: 'false',
                  description:
                    'Adds left padding to align with items that have icons.',
                },
                {
                  name: 'variant',
                  type: '"default" | "destructive"',
                  default: '"default"',
                  description: 'Visual variant for destructive actions.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the item is disabled.',
                },
                {
                  name: 'onSelect',
                  type: '() => void',
                  description: 'Callback when item is selected.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">
              ContextMenuCheckboxItem
            </h4>
            <PropsTable
              props={[
                {
                  name: 'checked',
                  type: 'boolean',
                  description: 'Whether the item is checked.',
                },
                {
                  name: 'onCheckedChange',
                  type: '(checked: boolean) => void',
                  description: 'Callback when checked state changes.',
                },
                {
                  name: 'inset',
                  type: 'boolean',
                  default: 'false',
                  description: 'Adds left padding.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">
              ContextMenuContent
            </h4>
            <PropsTable
              props={[
                {
                  name: 'align',
                  type: '"start" | "center" | "end"',
                  default: '"start"',
                  description: 'Alignment relative to trigger.',
                },
                {
                  name: 'side',
                  type: '"top" | "right" | "bottom" | "left"',
                  default: '"right"',
                  description: 'Preferred side to open.',
                },
                {
                  name: 'sideOffset',
                  type: 'number',
                  default: '0',
                  description: 'Offset from the trigger.',
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
            title="With Checkbox Items"
            code={`const [showBookmarks, setShowBookmarks] = React.useState(true)
const [showFullUrls, setShowFullUrls] = React.useState(false)

<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuCheckboxItem
      checked={showBookmarks}
      onCheckedChange={setShowBookmarks}
    >
      Show Bookmarks
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={showFullUrls}
      onCheckedChange={setShowFullUrls}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>`}
          >
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Show Bookmarks
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Show Full URLs
                </ContextMenuCheckboxItem>
              </ContextMenuContent>
            </ContextMenu>
          </ComponentPreview>

          <ComponentPreview
            title="With Radio Group"
            code={`const [person, setPerson] = React.useState('pedro')

<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuLabel inset>People</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuRadioItem value="pedro">Pedro</ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
          >
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                  <ContextMenuLabel inset>People</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuRadioItem value="pedro">
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">
                    Colm Tuite
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </ComponentPreview>

          <ComponentPreview
            title="With Submenu"
            code={`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
          >
            <ContextMenu>
              <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  // ... other components as needed
} from '@/components/ui/context-menu'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<ContextMenu>
  <ContextMenuTrigger>
    Right click this area
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Action 1</ContextMenuItem>
    <ContextMenuItem>Action 2</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> ContextMenu →
                ContextMenuTrigger + ContextMenuContent → ContextMenuItem(s)
              </li>
              <li>
                Triggered by <strong>right-click</strong> (unlike Dropdown Menu
                which is click-triggered)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">inset</code> prop to
                align items with icons
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  variant=&quot;destructive&quot;
                </code>{' '}
                for delete/dangerous actions
              </li>
              <li>
                Submenus: ContextMenuSub → ContextMenuSubTrigger +
                ContextMenuSubContent
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/context-menu
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              When to Use Each Menu Component
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Context Menu:</strong> Right-click actions on specific
                elements (files, rows, canvas items)
              </li>
              <li>
                <strong>Dropdown Menu:</strong> Click-triggered actions from
                buttons or icons
              </li>
              <li>
                <strong>Menubar:</strong> Horizontal menu bar like in desktop
                applications
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Content uses{' '}
                <code className="rounded bg-muted px-1">bg-popover</code> with{' '}
                <code className="rounded bg-muted px-1">shadow-md</code>
              </li>
              <li>
                Focus state uses{' '}
                <code className="rounded bg-muted px-1">bg-accent</code>
              </li>
              <li>
                Destructive variant uses{' '}
                <code className="rounded bg-muted px-1">text-destructive</code>
              </li>
              <li>
                Icons auto-size to{' '}
                <code className="rounded bg-muted px-1">size-4</code>
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
                <strong>Arrow Right:</strong> Open submenu
              </li>
              <li>
                <strong>Arrow Left:</strong> Close submenu
              </li>
              <li>
                <strong>Enter/Space:</strong> Select focused item
              </li>
              <li>
                <strong>Escape:</strong> Close menu
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
