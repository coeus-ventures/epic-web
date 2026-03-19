'use client'

import { Button } from '@/components/ui/button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group'
import { Separator } from '@/components/ui/separator'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

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

export default function ButtonGroupPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Button Group
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A container that groups related buttons together with visual
          connection.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The ButtonGroup component visually connects related buttons by
            removing borders between them and adjusting border radius. It
            supports horizontal and vertical orientations.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You have a set of related actions that
            should be visually grouped, such as text formatting controls,
            alignment options, or navigation segments.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ButtonGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The container that groups buttons. Supports horizontal and
              vertical orientations.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ButtonGroupSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A visual separator between buttons. Automatically adjusts
              orientation based on group.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ButtonGroupText</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A text element styled to match button group aesthetics for labels
              or badges.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Orientations">
        <div className="space-y-8">
          <ComponentPreview
            title="Horizontal (Default)"
            code={`<ButtonGroup orientation="horizontal">
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`}
          >
            <ButtonGroup orientation="horizontal">
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code={`<ButtonGroup orientation="vertical">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>`}
          >
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              ButtonGroup
            </h3>
            <PropsTable
              props={[
                {
                  name: 'orientation',
                  type: '"horizontal" | "vertical"',
                  default: '"horizontal"',
                  description: 'The orientation of the button group.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes to apply.',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              ButtonGroupSeparator
            </h3>
            <PropsTable
              props={[
                {
                  name: 'orientation',
                  type: '"horizontal" | "vertical"',
                  default: '"vertical"',
                  description:
                    'The orientation of the separator line. Usually opposite of group.',
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
            title="Icon Button Group"
            code={`<ButtonGroup>
  <Button variant="outline" size="icon">
    <Bold />
  </Button>
  <Button variant="outline" size="icon">
    <Italic />
  </Button>
  <Button variant="outline" size="icon">
    <Underline />
  </Button>
</ButtonGroup>`}
          >
            <ButtonGroup>
              <Button variant="outline" size="icon">
                <Bold />
              </Button>
              <Button variant="outline" size="icon">
                <Italic />
              </Button>
              <Button variant="outline" size="icon">
                <Underline />
              </Button>
            </ButtonGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Separator"
            code={`<ButtonGroup>
  <Button variant="outline" size="icon">
    <AlignLeft />
  </Button>
  <Button variant="outline" size="icon">
    <AlignCenter />
  </Button>
  <Button variant="outline" size="icon">
    <AlignRight />
  </Button>
  <ButtonGroupSeparator />
  <Button variant="outline" size="icon">
    <Bold />
  </Button>
  <Button variant="outline" size="icon">
    <Italic />
  </Button>
</ButtonGroup>`}
          >
            <ButtonGroup>
              <Button variant="outline" size="icon">
                <AlignLeft />
              </Button>
              <Button variant="outline" size="icon">
                <AlignCenter />
              </Button>
              <Button variant="outline" size="icon">
                <AlignRight />
              </Button>
              <ButtonGroupSeparator />
              <Button variant="outline" size="icon">
                <Bold />
              </Button>
              <Button variant="outline" size="icon">
                <Italic />
              </Button>
            </ButtonGroup>
          </ComponentPreview>

          <ComponentPreview
            title="With Text Label"
            code={`<ButtonGroup>
  <ButtonGroupText>Format</ButtonGroupText>
  <Button variant="outline" size="icon">
    <Bold />
  </Button>
  <Button variant="outline" size="icon">
    <Italic />
  </Button>
</ButtonGroup>`}
          >
            <ButtonGroup>
              <ButtonGroupText>Format</ButtonGroupText>
              <Button variant="outline" size="icon">
                <Bold />
              </Button>
              <Button variant="outline" size="icon">
                <Italic />
              </Button>
            </ButtonGroup>
          </ComponentPreview>

          <ComponentPreview
            title="Mixed Button Sizes"
            code={`<ButtonGroup>
  <Button variant="outline" size="sm">Small</Button>
  <Button variant="outline" size="sm">Actions</Button>
</ButtonGroup>`}
          >
            <ButtonGroup>
              <Button variant="outline" size="sm">
                Small
              </Button>
              <Button variant="outline" size="sm">
                Actions
              </Button>
            </ButtonGroup>
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
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<ButtonGroup orientation="horizontal">
  <Button variant="outline">Option A</Button>
  <Button variant="outline">Option B</Button>
  <Button variant="outline">Option C</Button>
</ButtonGroup>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Always use{' '}
                <code className="rounded bg-muted px-1">variant=&quot;outline&quot;</code>{' '}
                buttons inside ButtonGroup for proper border handling
              </li>
              <li>
                The group automatically removes intermediate borders and adjusts
                corner radius
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">ButtonGroupSeparator</code>{' '}
                to visually separate button sections within the group
              </li>
              <li>
                <code className="rounded bg-muted px-1">ButtonGroupText</code>{' '}
                can be used for labels that match button styling
              </li>
              <li>
                Works with any button size (
                <code className="rounded bg-muted px-1">size=&quot;icon&quot;</code>,{' '}
                <code className="rounded bg-muted px-1">size=&quot;sm&quot;</code>, etc.)
              </li>
              <li>
                Set{' '}
                <code className="rounded bg-muted px-1">orientation=&quot;vertical&quot;</code>{' '}
                for stacked button layouts
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Text formatting toolbars (bold, italic, underline)</li>
              <li>Alignment controls (left, center, right)</li>
              <li>View mode toggles (list, grid, card)</li>
              <li>Pagination controls (prev, page numbers, next)</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
