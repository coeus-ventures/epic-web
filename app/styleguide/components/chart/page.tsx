'use client'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, Area, AreaChart } from 'recharts'

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

const barChartData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const lineChartData = [
  { month: 'Jan', value: 186 },
  { month: 'Feb', value: 305 },
  { month: 'Mar', value: 237 },
  { month: 'Apr', value: 273 },
  { month: 'May', value: 209 },
  { month: 'Jun', value: 314 },
]

const chartConfig: ChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
  value: {
    label: 'Value',
    color: 'var(--chart-1)',
  },
}

export default function ChartPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Chart
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A wrapper for Recharts with themed styling, tooltips, and legends.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Chart component provides a styled wrapper around Recharts,
            integrating with the design system&apos;s color tokens and providing
            consistent tooltip and legend styling. It handles theme-aware colors
            and responsive container sizing automatically.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display data visualizations
            like bar charts, line charts, area charts, or pie charts.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ChartContainer</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root wrapper that provides context, responsive sizing, and CSS
              variables for chart colors.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ChartTooltip</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Re-export of Recharts Tooltip component.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ChartTooltipContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Custom styled tooltip content with support for different indicator
              styles.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ChartLegend</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Re-export of Recharts Legend component.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ChartLegendContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Custom styled legend content with optional icons.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ChartConfig</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Type for configuring chart data series with labels, colors, and
              optional icons.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'

// Also import chart types from recharts
import { Bar, BarChart, Line, LineChart, ... } from 'recharts'`}</code>
        </pre>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">ChartContainer</h3>
            <PropsTable
              props={[
                {
                  name: 'config',
                  type: 'ChartConfig',
                  description:
                    'Configuration object defining data series with labels and colors.',
                },
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'Recharts chart component (BarChart, LineChart, etc.).',
                },
                {
                  name: 'id',
                  type: 'string',
                  description: 'Optional ID for the chart container.',
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
            <h3 className="mb-4 text-lg font-medium">ChartTooltipContent</h3>
            <PropsTable
              props={[
                {
                  name: 'indicator',
                  type: '"line" | "dot" | "dashed"',
                  default: '"dot"',
                  description: 'Style of the color indicator.',
                },
                {
                  name: 'hideLabel',
                  type: 'boolean',
                  default: 'false',
                  description: 'Hide the tooltip label.',
                },
                {
                  name: 'hideIndicator',
                  type: 'boolean',
                  default: 'false',
                  description: 'Hide the color indicator.',
                },
                {
                  name: 'nameKey',
                  type: 'string',
                  description: 'Key to use for the name field.',
                },
                {
                  name: 'labelKey',
                  type: 'string',
                  description: 'Key to use for the label field.',
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
            title="Bar Chart"
            code={`const chartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}

<ChartContainer config={chartConfig} className="h-[200px]">
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`}
          >
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart data={barChartData}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </ComponentPreview>

          <ComponentPreview
            title="Line Chart"
            code={`<ChartContainer config={chartConfig} className="h-[200px]">
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line
      type="monotone"
      dataKey="value"
      stroke="var(--color-value)"
      strokeWidth={2}
    />
  </LineChart>
</ChartContainer>`}
          >
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <LineChart data={lineChartData}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-value)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </ComponentPreview>

          <ComponentPreview
            title="Area Chart"
            code={`<ChartContainer config={chartConfig} className="h-[200px]">
  <AreaChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area
      type="monotone"
      dataKey="value"
      fill="var(--color-value)"
      fillOpacity={0.3}
      stroke="var(--color-value)"
    />
  </AreaChart>
</ChartContainer>`}
          >
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <AreaChart data={lineChartData}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  fill="var(--color-value)"
                  fillOpacity={0.3}
                  stroke="var(--color-value)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const config: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
}

<ChartContainer config={config} className="h-[300px]">
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="revenue" fill="var(--color-revenue)" />
  </BarChart>
</ChartContainer>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">ChartContainer</code>{' '}
                wraps Recharts&apos;{' '}
                <code className="rounded bg-muted px-1">ResponsiveContainer</code>
              </li>
              <li>
                Config keys become CSS variables:{' '}
                <code className="rounded bg-muted px-1">
                  --color-[key]
                </code>
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">var(--chart-1)</code>{' '}
                through{' '}
                <code className="rounded bg-muted px-1">var(--chart-5)</code>{' '}
                for theme colors
              </li>
              <li>
                <code className="rounded bg-muted px-1">ChartContainer</code>{' '}
                defaults to{' '}
                <code className="rounded bg-muted px-1">aspect-video</code> -
                override with className
              </li>
              <li>
                Config can include{' '}
                <code className="rounded bg-muted px-1">icon</code> for custom
                legend icons
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">theme</code> in config
                for light/dark specific colors
              </li>
              <li>
                All Recharts components work inside ChartContainer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--chart-1</code> through{' '}
                <code className="rounded bg-muted px-1">--chart-5</code> for
                data series
              </li>
              <li>
                <code className="rounded bg-muted px-1">--border</code> for grid
                lines
              </li>
              <li>
                <code className="rounded bg-muted px-1">--muted-foreground</code>{' '}
                for axis labels
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">ChartConfig Example</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const chartConfig: ChartConfig = {
  views: {
    label: "Page Views",
    color: "var(--chart-1)",
  },
  visitors: {
    label: "Visitors",
    color: "var(--chart-2)",
    // Optional: theme-specific colors
    theme: {
      light: "#2563eb",
      dark: "#3b82f6",
    },
  },
}`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
