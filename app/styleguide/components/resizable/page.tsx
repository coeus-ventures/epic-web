'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
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

export default function ResizablePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Resizable
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Resizable component provides draggable dividers to resize
            adjacent panels. Built on react-resizable-panels, it supports
            keyboard navigation, persistence, and both horizontal and vertical
            layouts.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Building IDE-like layouts, sidebars with
            adjustable widths, split views, or any interface where users should
            control panel sizes.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ResizablePanelGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The container that holds all panels and handles. Sets the
              orientation (horizontal or vertical) for the entire group.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ResizablePanel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              An individual resizable panel. Accepts size constraints like
              defaultSize, minSize, and maxSize.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ResizableHandle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The draggable divider between panels. Optionally displays a
              visible handle indicator with the withHandle prop.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Horizontal (Default)"
            code={`<ResizablePanelGroup orientation="horizontal" className="min-h-[200px]">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Left Panel
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Right Panel
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          >
            <ResizablePanelGroup
              orientation="horizontal"
              className="min-h-[200px] rounded-lg border border-border"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">
                    Left Panel
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">
                    Right Panel
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code={`<ResizablePanelGroup orientation="vertical" className="min-h-[300px]">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Top Panel
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Bottom Panel
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          >
            <ResizablePanelGroup
              orientation="vertical"
              className="min-h-[300px] rounded-lg border border-border"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">
                    Top Panel
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">
                    Bottom Panel
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Handle Indicator"
            code={`<ResizablePanelGroup orientation="horizontal" className="min-h-[200px]">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Panel One
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Panel Two
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
          >
            <ResizablePanelGroup
              orientation="horizontal"
              className="min-h-[200px] rounded-lg border border-border"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">
                    Panel One
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="text-sm text-muted-foreground">
                    Panel Two
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 font-medium text-foreground">
              ResizablePanelGroup
            </h4>
            <PropsTable
              props={[
                {
                  name: 'orientation',
                  type: '"horizontal" | "vertical"',
                  default: '"horizontal"',
                  description: 'The direction panels resize.',
                },
                {
                  name: 'autoSaveId',
                  type: 'string',
                  description:
                    'Unique ID for persisting panel sizes to localStorage.',
                },
                {
                  name: 'onLayout',
                  type: '(sizes: number[]) => void',
                  description: 'Callback when panel sizes change.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes for the container.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-3 font-medium text-foreground">ResizablePanel</h4>
            <PropsTable
              props={[
                {
                  name: 'defaultSize',
                  type: 'number',
                  description:
                    'Initial size as a percentage (0-100). All panels should sum to 100.',
                },
                {
                  name: 'minSize',
                  type: 'number',
                  description: 'Minimum size as a percentage.',
                },
                {
                  name: 'maxSize',
                  type: 'number',
                  description: 'Maximum size as a percentage.',
                },
                {
                  name: 'collapsible',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the panel can be collapsed.',
                },
                {
                  name: 'collapsedSize',
                  type: 'number',
                  description: 'Size when collapsed (requires collapsible).',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-3 font-medium text-foreground">ResizableHandle</h4>
            <PropsTable
              props={[
                {
                  name: 'withHandle',
                  type: 'boolean',
                  default: 'false',
                  description: 'Display a visible drag indicator.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes for the handle.',
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
            title="Three-Panel Layout"
            code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={20} minSize={15}>
    <Sidebar />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={60}>
    <MainContent />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={20} minSize={15}>
    <RightPanel />
  </ResizablePanel>
</ResizablePanelGroup>`}
          >
            <ResizablePanelGroup
              orientation="horizontal"
              className="min-h-[200px] rounded-lg border border-border"
            >
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                  <span className="text-xs text-muted-foreground">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-4">
                  <span className="text-sm text-muted-foreground">
                    Main Content
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                  <span className="text-xs text-muted-foreground">
                    Right Panel
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Nested Panels (IDE Layout)"
            code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={25}>
    <FileTree />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup orientation="vertical">
      <ResizablePanel defaultSize={70}>
        <Editor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={30}>
        <Terminal />
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}
          >
            <ResizablePanelGroup
              orientation="horizontal"
              className="min-h-[300px] rounded-lg border border-border"
            >
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-full items-center justify-center bg-muted/30 p-4">
                  <span className="text-xs text-muted-foreground">
                    File Tree
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup orientation="vertical">
                  <ResizablePanel defaultSize={70}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="text-sm text-muted-foreground">
                        Editor
                      </span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={30}>
                    <div className="flex h-full items-center justify-center bg-muted/50 p-4">
                      <span className="text-xs text-muted-foreground">
                        Terminal
                      </span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Size Persistence"
            code={`<ResizablePanelGroup
  orientation="horizontal"
  autoSaveId="my-layout"
>
  <ResizablePanel defaultSize={50}>
    Left Panel
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Right Panel
  </ResizablePanel>
</ResizablePanelGroup>`}
          >
            <div className="rounded-md border border-dashed border-border px-4 py-6 text-center text-sm text-muted-foreground">
              Use autoSaveId to persist panel sizes across page reloads
            </div>
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
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={50}>
    Panel 1
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Panel 2
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                All three components are required:{' '}
                <code className="rounded bg-muted px-1">ResizablePanelGroup</code>,{' '}
                <code className="rounded bg-muted px-1">ResizablePanel</code>,{' '}
                <code className="rounded bg-muted px-1">ResizableHandle</code>
              </li>
              <li>
                <code className="rounded bg-muted px-1">defaultSize</code> values
                are percentages and should sum to 100
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">orientation</code> prop:{' '}
                <code className="rounded bg-muted px-1">&quot;horizontal&quot;</code> or{' '}
                <code className="rounded bg-muted px-1">&quot;vertical&quot;</code>
              </li>
              <li>
                Add <code className="rounded bg-muted px-1">withHandle</code> to
                ResizableHandle for a visible drag indicator
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">autoSaveId</code> on
                ResizablePanelGroup for localStorage persistence
              </li>
              <li>
                Set <code className="rounded bg-muted px-1">minSize</code> and{' '}
                <code className="rounded bg-muted px-1">maxSize</code> to
                constrain panel dimensions
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">react-resizable-panels</code>{' '}
                library
              </li>
              <li>Keyboard accessible: use arrow keys when handle is focused</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Nested Layout Pattern</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel>Sidebar</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
    <ResizablePanelGroup orientation="vertical">
      <ResizablePanel>Editor</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Terminal</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Data Attributes</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;resizable-panel-group&quot;
                </code>{' '}
                on the group
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;resizable-panel&quot;
                </code>{' '}
                on each panel
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;resizable-handle&quot;
                </code>{' '}
                on the handle
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  aria-orientation
                </code>{' '}
                is set automatically on handles
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
