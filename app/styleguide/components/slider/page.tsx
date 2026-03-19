'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
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

function SliderWithValue() {
  const [value, setValue] = useState([50])
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={(v) => setValue(v as number[])} max={100} step={1} />
    </div>
  )
}

function RangeSlider() {
  const [value, setValue] = useState([25, 75])
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center justify-between">
        <Label>Price Range</Label>
        <span className="text-sm text-muted-foreground">
          ${value[0]} - ${value[1]}
        </span>
      </div>
      <Slider value={value} onValueChange={(v) => setValue(v as number[])} max={100} step={1} />
    </div>
  )
}

export default function SliderPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Slider
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A draggable input for selecting a value from a range.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Slider component allows users to select a value or range of
            values by dragging a thumb along a track. It supports single value
            and range selections.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Users need to select a value from a
            continuous range, like volume, brightness, price range, or any
            numeric input with a defined min/max.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Slider</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The slider component with track, range indicator, and draggable
              thumb(s). Supports single and range values.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { Slider } from '@/components/ui/slider'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variations">
        <div className="space-y-8">
          <ComponentPreview
            title="Default"
            code="<Slider defaultValue={[50]} max={100} step={1} />"
          >
            <div className="w-full max-w-sm">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Range Slider"
            code="<Slider defaultValue={[25, 75]} max={100} step={1} />"
          >
            <div className="w-full max-w-sm">
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="With Step"
            code="<Slider defaultValue={[50]} max={100} step={10} />"
          >
            <div className="w-full max-w-sm">
              <Slider defaultValue={[50]} max={100} step={10} />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled"
            code="<Slider defaultValue={[50]} max={100} disabled />"
          >
            <div className="w-full max-w-sm">
              <Slider defaultValue={[50]} max={100} disabled />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code='<Slider defaultValue={[50]} max={100} orientation="vertical" className="h-40" />'
          >
            <div className="h-40">
              <Slider
                defaultValue={[50]}
                max={100}
                orientation="vertical"
              />
            </div>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'number[]',
              description: 'Controlled value. Array for single or range.',
            },
            {
              name: 'defaultValue',
              type: 'number[]',
              description: 'Default value (uncontrolled).',
            },
            {
              name: 'onValueChange',
              type: '(value: number[]) => void',
              description: 'Callback fired when value changes.',
            },
            {
              name: 'min',
              type: 'number',
              default: '0',
              description: 'Minimum value of the slider.',
            },
            {
              name: 'max',
              type: 'number',
              default: '100',
              description: 'Maximum value of the slider.',
            },
            {
              name: 'step',
              type: 'number',
              default: '1',
              description: 'Step increment value.',
            },
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: 'Orientation of the slider.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the slider is disabled.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="With Label and Value"
            code={`const [value, setValue] = useState([50])

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Volume</Label>
    <span className="text-muted-foreground">{value[0]}%</span>
  </div>
  <Slider value={value} onValueChange={setValue} max={100} />
</div>`}
          >
            <SliderWithValue />
          </ComponentPreview>

          <ComponentPreview
            title="Price Range"
            code={`const [value, setValue] = useState([25, 75])

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Price Range</Label>
    <span className="text-muted-foreground">
      \${value[0]} - \${value[1]}
    </span>
  </div>
  <Slider value={value} onValueChange={setValue} max={100} />
</div>`}
          >
            <RangeSlider />
          </ComponentPreview>

          <ComponentPreview
            title="Temperature Control"
            code={`<div className="space-y-4">
  <Label>Temperature: 72°F</Label>
  <Slider defaultValue={[72]} min={60} max={80} step={1} />
</div>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <Label>Temperature: 72°F</Label>
              <Slider defaultValue={[72]} min={60} max={80} step={1} />
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
              <code>{`import { Slider } from '@/components/ui/slider'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Single value
<Slider defaultValue={[50]} max={100} step={1} />

// Range (two thumbs)
<Slider defaultValue={[25, 75]} max={100} step={1} />`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Value is always an array:{' '}
                <code className="rounded bg-muted px-1">[50]</code> for single,{' '}
                <code className="rounded bg-muted px-1">[25, 75]</code> for range
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/slider
                </code>{' '}
                primitive
              </li>
              <li>
                Full width by default (
                <code className="rounded bg-muted px-1">w-full</code>)
              </li>
              <li>
                For vertical, add{' '}
                <code className="rounded bg-muted px-1">
                  orientation=&quot;vertical&quot;
                </code>{' '}
                and set explicit height
              </li>
              <li>
                Track height is{' '}
                <code className="rounded bg-muted px-1">h-1.5</code> (6px)
              </li>
              <li>
                Thumb size is{' '}
                <code className="rounded bg-muted px-1">size-4</code> (16px)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--primary</code> for
                range indicator and thumb border
              </li>
              <li>
                <code className="rounded bg-muted px-1">--muted</code> for track
                background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--ring</code> for focus
                ring on thumb
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Controlled Component</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const [value, setValue] = useState([50])

<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
/>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
