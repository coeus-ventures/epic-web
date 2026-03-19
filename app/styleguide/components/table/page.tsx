'use client'

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
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

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
]

export default function TablePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Table
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A responsive table component for displaying tabular data.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Table component provides a structured way to display data in
            rows and columns. It includes sub-components for headers, body,
            footer, and individual cells, with built-in styling for hover states
            and responsive overflow handling.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display structured data like
            lists of records, invoices, users, or any dataset that benefits from
            tabular presentation.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Table</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root table element wrapped in a scrollable container.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for table header rows (thead).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableBody</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for table body rows (tbody).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableFooter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for table footer rows (tfoot).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableRow</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A table row with hover and selected states.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableHead</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A header cell (th) with medium font weight.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableCell</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A data cell (td) for table content.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">TableCaption</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A caption element for describing the table.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'`}</code>
        </pre>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <p className="mb-4 text-sm text-muted-foreground">
          All table sub-components accept standard HTML element props for their
          respective elements (table, thead, tbody, tfoot, tr, th, td, caption).
        </p>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
            {
              name: 'data-state',
              type: '"selected"',
              description:
                'On TableRow, triggers selected background styling.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic Table"
            code={`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.method}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
          >
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ComponentPreview>

          <ComponentPreview
            title="With Footer"
            code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.slice(0, 3).map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$750.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.slice(0, 3).map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell className="text-right">$750.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
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
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Value 1</TableCell>
      <TableCell>Value 2</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Table is wrapped in a scrollable container for horizontal
                overflow
              </li>
              <li>
                <code className="rounded bg-muted px-1">TableRow</code> has
                hover state:{' '}
                <code className="rounded bg-muted px-1">hover:bg-muted/50</code>
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  data-state=&quot;selected&quot;
                </code>{' '}
                on TableRow for selection styling
              </li>
              <li>
                <code className="rounded bg-muted px-1">TableHead</code> uses{' '}
                <code className="rounded bg-muted px-1">
                  whitespace-nowrap
                </code>{' '}
                by default
              </li>
              <li>
                <code className="rounded bg-muted px-1">TableCaption</code> is
                positioned at the bottom with{' '}
                <code className="rounded bg-muted px-1">caption-bottom</code>
              </li>
              <li>
                <code className="rounded bg-muted px-1">TableFooter</code> has
                subtle background styling
              </li>
              <li>
                All rows have bottom border; last row in body has no border
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--muted</code> for hover
                and footer backgrounds
              </li>
              <li>
                <code className="rounded bg-muted px-1">--border</code> for row
                borders
              </li>
              <li>
                <code className="rounded bg-muted px-1">--foreground</code> for
                header text
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Right-aligned amount column
<TableHead className="text-right">Amount</TableHead>
<TableCell className="text-right">{amount}</TableCell>

// Fixed width column
<TableHead className="w-[100px]">ID</TableHead>

// Selected row
<TableRow data-state={isSelected ? "selected" : undefined}>
  ...
</TableRow>

// With checkbox
<TableCell>
  <Checkbox checked={isSelected} />
</TableCell>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
