'use client'

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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

export default function TabsPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Tabs
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A set of layered sections of content displayed one at a time.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Tabs component organizes content into multiple panels that share
            the same space, with only one panel visible at a time. Users can
            switch between panels using tab triggers.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to organize related content into
            distinct sections on a single page, such as settings panels,
            feature groups, or different views of the same data.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Accordion (expandable
            sections), Tabs show one panel at a time. Unlike Navigation Menu
            (page navigation), Tabs switch content within the same page without
            URL changes.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Tabs</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root component that manages tab state. Supports horizontal and
              vertical orientations.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TabsList</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for tab triggers. Supports default (pill) and line
              variants.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TabsTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Button that activates its associated content panel.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TabsContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Content panel that displays when its associated trigger is active.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">tabsListVariants</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Function for generating TabsList styles (default and line
              variants).
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
} from '@/components/ui/tabs'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default (Pill Style)"
            code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings content
  </TabsContent>
  <TabsContent value="password">
    Password settings content
  </TabsContent>
</Tabs>`}
          >
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </p>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                  <Button>Save changes</Button>
                </div>
              </TabsContent>
              <TabsContent value="password" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </p>
                  <div className="grid gap-2">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                  <Button>Save password</Button>
                </div>
              </TabsContent>
            </Tabs>
          </ComponentPreview>

          <ComponentPreview
            title="Line Variant"
            code={`<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
  <TabsContent value="reports">Reports content</TabsContent>
</Tabs>`}
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList variant="line">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Overview content goes here. This variant uses an underline
                  indicator.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Analytics content goes here.
                </p>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Reports content goes here.
                </p>
              </TabsContent>
            </Tabs>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical Orientation"
            code={`<Tabs defaultValue="general" orientation="vertical">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="general">General settings</TabsContent>
  <TabsContent value="security">Security settings</TabsContent>
  <TabsContent value="notifications">Notification settings</TabsContent>
</Tabs>`}
          >
            <Tabs
              defaultValue="general"
              orientation="vertical"
              className="w-full"
            >
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="flex-1">
                <div className="p-4">
                  <h3 className="font-medium">General Settings</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Configure your general preferences here.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="security" className="flex-1">
                <div className="p-4">
                  <h3 className="font-medium">Security Settings</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Configure your security preferences here.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="notifications" className="flex-1">
                <div className="p-4">
                  <h3 className="font-medium">Notification Settings</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Configure your notification preferences here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">Tabs</h4>
            <PropsTable
              props={[
                {
                  name: 'defaultValue',
                  type: 'string',
                  description: 'The value of the tab open by default.',
                },
                {
                  name: 'value',
                  type: 'string',
                  description: 'Controlled active tab value.',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string) => void',
                  description: 'Callback when active tab changes.',
                },
                {
                  name: 'orientation',
                  type: '"horizontal" | "vertical"',
                  default: '"horizontal"',
                  description: 'Layout orientation of the tabs.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">TabsList</h4>
            <PropsTable
              props={[
                {
                  name: 'variant',
                  type: '"default" | "line"',
                  default: '"default"',
                  description:
                    'Visual variant. Default uses pill style, line uses underline.',
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
            <h4 className="mb-4 font-medium text-foreground">TabsTrigger</h4>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description:
                    'Unique value that associates trigger with content (required).',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the tab is disabled.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">TabsContent</h4>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description:
                    'Value that associates content with its trigger (required).',
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
            title="With Icons"
            code={`<Tabs defaultValue="code">
  <TabsList>
    <TabsTrigger value="code">
      <Code className="mr-2 size-4" />
      Code
    </TabsTrigger>
    <TabsTrigger value="preview">
      <Eye className="mr-2 size-4" />
      Preview
    </TabsTrigger>
  </TabsList>
  <TabsContent value="code">Code content</TabsContent>
  <TabsContent value="preview">Preview content</TabsContent>
</Tabs>`}
          >
            <Tabs defaultValue="code" className="w-full">
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="code" className="mt-4">
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>{`function HelloWorld() {
  return <h1>Hello, World!</h1>
}`}</code>
                </pre>
              </TabsContent>
              <TabsContent value="preview" className="mt-4">
                <div className="rounded-md border border-border p-8 text-center">
                  <h1 className="text-2xl font-bold">Hello, World!</h1>
                </div>
              </TabsContent>
            </Tabs>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled Tab"
            code={`<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
    <TabsTrigger value="another">Another</TabsTrigger>
  </TabsList>
  <TabsContent value="active">Active content</TabsContent>
  <TabsContent value="another">Another content</TabsContent>
</Tabs>`}
          >
            <Tabs defaultValue="active" className="w-full">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="disabled" disabled>
                  Disabled
                </TabsTrigger>
                <TabsTrigger value="another">Another</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  This tab is active. The disabled tab cannot be selected.
                </p>
              </TabsContent>
              <TabsContent value="another" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Another tab content.
                </p>
              </TabsContent>
            </Tabs>
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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> Tabs → TabsList →
                TabsTrigger(s) + TabsContent(s)
              </li>
              <li>
                <code className="rounded bg-muted px-1">value</code> prop links
                TabsTrigger to TabsContent
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">defaultValue</code>{' '}
                for uncontrolled, <code className="rounded bg-muted px-1">value</code>{' '}
                + <code className="rounded bg-muted px-1">onValueChange</code>{' '}
                for controlled
              </li>
              <li>
                TabsList supports{' '}
                <code className="rounded bg-muted px-1">variant=&quot;line&quot;</code>{' '}
                for underline style
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">orientation=&quot;vertical&quot;</code>{' '}
                for vertical layout
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/tabs
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Default TabsList uses{' '}
                <code className="rounded bg-muted px-1">bg-muted</code> with
                rounded pill style
              </li>
              <li>
                Line variant uses transparent background with underline indicator
              </li>
              <li>
                Active trigger uses{' '}
                <code className="rounded bg-muted px-1">bg-background</code>{' '}
                (default) or underline (line)
              </li>
              <li>
                Vertical tabs use flex column layout with{' '}
                <code className="rounded bg-muted px-1">
                  justify-start
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Arrow Left/Right:</strong> Navigate between triggers
                (horizontal)
              </li>
              <li>
                <strong>Arrow Up/Down:</strong> Navigate between triggers
                (vertical)
              </li>
              <li>
                <strong>Home/End:</strong> Jump to first/last trigger
              </li>
              <li>
                <strong>Enter/Space:</strong> Activate focused trigger
              </li>
              <li>
                Focus automatically moves to content when trigger is activated
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
