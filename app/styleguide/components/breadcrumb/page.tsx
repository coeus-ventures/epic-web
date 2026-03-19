'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon, SlashIcon } from 'lucide-react'

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

export default function BreadcrumbDocPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Breadcrumb
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays the path to the current resource using a hierarchy of links.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Breadcrumb component shows users their current location within a
            site hierarchy and allows navigation to parent pages. It provides
            context and improves wayfinding in complex applications.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> Your app has multiple levels of
            navigation hierarchy, such as e-commerce categories, file systems,
            or multi-step workflows.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Navigation Menu (for main
            site navigation) or Tabs (for content sections), Breadcrumb shows
            the path taken to reach the current page.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Breadcrumb</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root nav element with aria-label=&quot;breadcrumb&quot;.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">BreadcrumbList</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              An ordered list (ol) containing the breadcrumb items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">BreadcrumbItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A list item (li) that wraps each breadcrumb entry.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">BreadcrumbLink</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A navigable link for parent pages. Supports render prop for custom
              elements like Next.js Link.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">BreadcrumbPage</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The current page indicator (non-clickable) with aria-current.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">BreadcrumbSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The visual separator between items. Defaults to chevron icon.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">BreadcrumbEllipsis</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Indicates truncated items when the path is too long.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default (Chevron Separator)"
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Current Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentPreview>

          <ComponentPreview
            title="Custom Separator (Slash)"
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <SlashIcon />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Current Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">BreadcrumbLink</h4>
            <PropsTable
              props={[
                {
                  name: 'href',
                  type: 'string',
                  description: 'The URL to navigate to.',
                },
                {
                  name: 'render',
                  type: 'React.ReactElement',
                  description:
                    'Custom element to render (e.g., Next.js Link). Uses render prop pattern.',
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
            <h4 className="mb-4 font-medium text-foreground">
              BreadcrumbSeparator
            </h4>
            <PropsTable
              props={[
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  default: '<ChevronRightIcon />',
                  description: 'Custom separator content (icon or text).',
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
            title="With Ellipsis"
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/category">Category</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Product</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Category</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Product</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentPreview>

          <ComponentPreview
            title="With Dropdown"
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          Components
          <ChevronDownIcon className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Button</DropdownMenuItem>
          <DropdownMenuItem>Input</DropdownMenuItem>
          <DropdownMenuItem>Card</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Button</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                      Components
                      <ChevronDownIcon className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Button</DropdownMenuItem>
                      <DropdownMenuItem>Input</DropdownMenuItem>
                      <DropdownMenuItem>Card</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Button</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentPreview>

          <ComponentPreview
            title="E-commerce Path"
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/phones">Phones</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>iPhone 15 Pro</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Phones</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>iPhone 15 Pro</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> Breadcrumb → BreadcrumbList
                → BreadcrumbItem(s)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">BreadcrumbLink</code>{' '}
                for navigable items,{' '}
                <code className="rounded bg-muted px-1">BreadcrumbPage</code> for
                current page
              </li>
              <li>
                <code className="rounded bg-muted px-1">BreadcrumbSeparator</code>{' '}
                must be placed between items manually
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">BreadcrumbEllipsis</code>{' '}
                when path is too long (typically &gt;4 items)
              </li>
              <li>
                BreadcrumbLink supports{' '}
                <code className="rounded bg-muted px-1">render</code> prop for
                custom Link components
              </li>
              <li>
                Custom separators: pass children to BreadcrumbSeparator (default
                is ChevronRight)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              With Next.js Link
            </h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import Link from 'next/link'

<BreadcrumbLink render={<Link href="/products" />}>
  Products
</BreadcrumbLink>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Links use{' '}
                <code className="rounded bg-muted px-1">text-muted-foreground</code>{' '}
                with hover transition to{' '}
                <code className="rounded bg-muted px-1">text-foreground</code>
              </li>
              <li>
                Current page (BreadcrumbPage) uses{' '}
                <code className="rounded bg-muted px-1">text-foreground</code>{' '}
                with <code className="rounded bg-muted px-1">font-normal</code>
              </li>
              <li>
                Separator icons default to{' '}
                <code className="rounded bg-muted px-1">size-3.5</code>
              </li>
              <li>
                List has responsive gap:{' '}
                <code className="rounded bg-muted px-1">gap-1.5 sm:gap-2.5</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Root element has{' '}
                <code className="rounded bg-muted px-1">
                  aria-label=&quot;breadcrumb&quot;
                </code>
              </li>
              <li>
                Current page has{' '}
                <code className="rounded bg-muted px-1">
                  aria-current=&quot;page&quot;
                </code>
              </li>
              <li>
                Separators are hidden from screen readers with{' '}
                <code className="rounded bg-muted px-1">aria-hidden</code>
              </li>
              <li>
                Ellipsis includes{' '}
                <code className="rounded bg-muted px-1">sr-only</code> text
                &quot;More&quot;
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
