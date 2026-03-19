'use client'

import * as React from 'react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarGroup,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar'
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

export default function MenubarPage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showFullUrls, setShowFullUrls] = React.useState(false)
  const [person, setPerson] = React.useState('andy')

  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Menubar
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A horizontal menu bar with dropdown menus, similar to desktop
          application menus.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Menubar component provides a horizontal menu bar similar to
            those found in desktop applications (File, Edit, View, etc.). Each
            top-level item opens a dropdown menu when clicked.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need an application-style menu bar
            with multiple categories of actions, typically at the top of an app
            or editor interface.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Dropdown Menu (single
            trigger) or Navigation Menu (site navigation), Menubar provides
            multiple grouped menus in a horizontal bar with keyboard navigation
            between them.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Menubar</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root horizontal bar container.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarMenu</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Wrapper for each menu (trigger + content pair).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The clickable menu title in the bar.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Dropdown container for menu items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Standard menu item with optional inset and destructive variants.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarCheckboxItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Toggleable menu item with checkmark.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              MenubarRadioGroup / MenubarRadioItem
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Single-selection radio group.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarLabel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Non-interactive section label.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual divider between items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">MenubarShortcut</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Displays keyboard shortcut hint.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              MenubarSub / MenubarSubTrigger / MenubarSubContent
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarGroup,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic Menubar"
            code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
      <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          >
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    New Incognito Window
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Search the web</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find...</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>
                    Always Show Bookmarks Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">MenubarItem</h4>
            <PropsTable
              props={[
                {
                  name: 'inset',
                  type: 'boolean',
                  default: 'false',
                  description: 'Adds left padding to align with checkbox/radio items.',
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
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">MenubarContent</h4>
            <PropsTable
              props={[
                {
                  name: 'align',
                  type: '"start" | "center" | "end"',
                  default: '"start"',
                  description: 'Alignment relative to trigger.',
                },
                {
                  name: 'alignOffset',
                  type: 'number',
                  default: '-4',
                  description: 'Alignment offset.',
                },
                {
                  name: 'sideOffset',
                  type: 'number',
                  default: '8',
                  description: 'Offset from trigger.',
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

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem
        checked={showBookmarks}
        onCheckedChange={setShowBookmarks}
      >
        Show Bookmarks
      </MenubarCheckboxItem>
      <MenubarCheckboxItem
        checked={showFullUrls}
        onCheckedChange={setShowFullUrls}
      >
        Show Full URLs
      </MenubarCheckboxItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          >
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem
                    checked={showBookmarks}
                    onCheckedChange={setShowBookmarks}
                  >
                    Show Bookmarks
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={showFullUrls}
                    onCheckedChange={setShowFullUrls}
                  >
                    Show Full URLs
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </ComponentPreview>

          <ComponentPreview
            title="With Radio Group"
            code={`const [person, setPerson] = React.useState('andy')

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarRadioGroup value={person} onValueChange={setPerson}>
        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
        <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
      </MenubarRadioGroup>
      <MenubarSeparator />
      <MenubarItem inset>Add Profile...</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          >
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value={person} onValueChange={setPerson}>
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  // ... other components as needed
} from '@/components/ui/menubar'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> Menubar → MenubarMenu(s) →
                MenubarTrigger + MenubarContent → MenubarItem(s)
              </li>
              <li>
                Each <code className="rounded bg-muted px-1">MenubarMenu</code>{' '}
                is a trigger/content pair (File, Edit, View, etc.)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">inset</code> prop to
                align plain items with checkbox/radio items
              </li>
              <li>
                Arrow keys navigate between top-level menus when a menu is open
              </li>
              <li>
                Submenus: MenubarSub → MenubarSubTrigger + MenubarSubContent
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/menubar
                </code>{' '}
                +{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/menu
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
                <strong>Menubar:</strong> Desktop app-style horizontal menu bar
                (File, Edit, View)
              </li>
              <li>
                <strong>Dropdown Menu:</strong> Single dropdown from a button
              </li>
              <li>
                <strong>Context Menu:</strong> Right-click contextual actions
              </li>
              <li>
                <strong>Navigation Menu:</strong> Site navigation with mega-menu
                style content
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Root bar uses{' '}
                <code className="rounded bg-muted px-1">bg-background</code>{' '}
                with border and shadow
              </li>
              <li>
                Bar height is{' '}
                <code className="rounded bg-muted px-1">h-9</code>
              </li>
              <li>
                Triggers use{' '}
                <code className="rounded bg-muted px-1">hover:bg-muted</code>{' '}
                and <code className="rounded bg-muted px-1">aria-expanded:bg-muted</code>
              </li>
              <li>
                Content uses{' '}
                <code className="rounded bg-muted px-1">bg-popover</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Arrow Left/Right:</strong> Navigate between top-level
                menus (when open)
              </li>
              <li>
                <strong>Arrow Up/Down:</strong> Navigate menu items
              </li>
              <li>
                <strong>Enter/Space:</strong> Open menu or select item
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
