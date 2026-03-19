'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
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

export default function PaginationPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Pagination
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Navigation controls for moving between pages of content.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Pagination component provides navigation controls for paginated
            content. It includes numbered page links, previous/next buttons, and
            ellipsis indicators for large page counts.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You have a list of items split across
            multiple pages, such as search results, product listings, or data
            tables.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Breadcrumb (hierarchical
            location), Pagination handles linear page-based navigation. Unlike
            Tabs (content switching), Pagination typically involves server-side
            data fetching.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Pagination</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root nav element with proper aria-label.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PaginationContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Flexbox container for pagination items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PaginationItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              List item wrapper for each pagination element.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PaginationLink</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Numbered page link. Styled as Button with icon size.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PaginationPrevious</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              &quot;Previous&quot; navigation link with arrow icon.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PaginationNext</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              &quot;Next&quot; navigation link with arrow icon.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">PaginationEllipsis</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Indicates skipped pages (typically &quot;...&quot;).
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic Pagination"
            code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ComponentPreview>

          <ComponentPreview
            title="With Ellipsis"
            code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">PaginationLink</h4>
            <PropsTable
              props={[
                {
                  name: 'href',
                  type: 'string',
                  description: 'The URL for this page.',
                },
                {
                  name: 'isActive',
                  type: 'boolean',
                  default: 'false',
                  description:
                    'Whether this is the current page. Uses outline variant when true.',
                },
                {
                  name: 'size',
                  type: 'ButtonSize',
                  default: '"icon"',
                  description: 'Button size variant.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">
              PaginationPrevious / PaginationNext
            </h4>
            <PropsTable
              props={[
                {
                  name: 'href',
                  type: 'string',
                  description: 'The URL for previous/next page.',
                },
                {
                  name: 'text',
                  type: 'string',
                  default: '"Previous" / "Next"',
                  description: 'Custom text label.',
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
            title="First Page"
            code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ComponentPreview>

          <ComponentPreview
            title="Last Page"
            code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">8</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">9</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">9</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    10
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ComponentPreview>

          <ComponentPreview
            title="Simple (Just Prev/Next)"
            code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> Pagination →
                PaginationContent → PaginationItem(s) → link components
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">isActive</code> on
                PaginationLink to mark current page
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">PaginationEllipsis</code>{' '}
                to indicate skipped pages
              </li>
              <li>
                PaginationPrevious/Next text hides on mobile (sm:block)
              </li>
              <li>
                All links render as anchor tags via Button with{' '}
                <code className="rounded bg-muted px-1">nativeButton=false</code>
              </li>
              <li>
                Active state uses outline variant; inactive uses ghost
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              Dynamic Pagination Logic
            </h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Common pattern for generating page numbers
function getPageNumbers(current: number, total: number) {
  // Always show first, last, and pages around current
  const pages: (number | 'ellipsis')[] = []

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  pages.push(1)
  if (current > 3) pages.push('ellipsis')

  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i)
  }

  if (current < total - 2) pages.push('ellipsis')
  pages.push(total)

  return pages
}`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Links use Button component with{' '}
                <code className="rounded bg-muted px-1">size=&quot;icon&quot;</code>
              </li>
              <li>
                Active state uses{' '}
                <code className="rounded bg-muted px-1">variant=&quot;outline&quot;</code>
              </li>
              <li>
                Inactive uses{' '}
                <code className="rounded bg-muted px-1">variant=&quot;ghost&quot;</code>
              </li>
              <li>
                Previous/Next use{' '}
                <code className="rounded bg-muted px-1">size=&quot;default&quot;</code>{' '}
                for text
              </li>
              <li>
                Content has{' '}
                <code className="rounded bg-muted px-1">gap-1</code> between
                items
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Root has{' '}
                <code className="rounded bg-muted px-1">
                  role=&quot;navigation&quot;
                </code>{' '}
                and{' '}
                <code className="rounded bg-muted px-1">
                  aria-label=&quot;pagination&quot;
                </code>
              </li>
              <li>
                Active page has{' '}
                <code className="rounded bg-muted px-1">
                  aria-current=&quot;page&quot;
                </code>
              </li>
              <li>
                Previous/Next have proper{' '}
                <code className="rounded bg-muted px-1">aria-label</code>
              </li>
              <li>
                Ellipsis has{' '}
                <code className="rounded bg-muted px-1">aria-hidden</code> and
                sr-only text
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
