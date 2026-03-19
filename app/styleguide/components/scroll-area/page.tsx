'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
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

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const artworks = [
  { artist: 'Ornella Binni', art: 'Reflection' },
  { artist: 'Tom Byrom', art: 'Time Lapse' },
  { artist: 'Vladimir Malyavko', art: 'My Way' },
  { artist: 'Yusuf Evli', art: 'Together' },
  { artist: 'Theo Lawson', art: 'Still Waters' },
  { artist: 'Lauren Mancke', art: 'Serenity' },
]

export default function ScrollAreaPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Scroll Area
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Augments native scroll functionality with custom, cross-browser
          styled scrollbars.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The ScrollArea component provides a consistent, styled scrollbar
            across all browsers. It hides native scrollbars while maintaining
            full scroll functionality, including keyboard and touch support.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need consistent scrollbar styling
            across browsers, building dropdowns or menus with scrollable
            content, or creating fixed-height containers with overflow.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ScrollArea</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main container component. Includes viewport, default vertical
              scrollbar, and corner element. Set height/width via className.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ScrollBar</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual scrollbar component. Use to add a horizontal scrollbar
              or customize scrollbar orientation and styling.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Vertical Scroll"
            code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`}
          >
            <ScrollArea className="h-72 w-48 rounded-md border border-border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                  <div key={tag}>
                    <div className="text-sm">{tag}</div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </ComponentPreview>

          <ComponentPreview
            title="Horizontal Scroll"
            code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {artworks.map((artwork) => (
      <figure key={artwork.artist} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <div className="h-[150px] w-[150px] bg-muted" />
        </div>
        <figcaption className="pt-2 text-xs">
          {artwork.art} by {artwork.artist}
        </figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          >
            <ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border border-border">
              <div className="flex w-max space-x-4 p-4">
                {artworks.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <div className="flex h-[150px] w-[150px] items-center justify-center bg-muted text-xs text-muted-foreground">
                        {artwork.art}
                      </div>
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {artwork.art}
                      </span>
                      <br />
                      {artwork.artist}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ComponentPreview>

          <ComponentPreview
            title="Both Directions"
            code={`<ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
  <div className="w-[500px]">
    <p className="whitespace-pre-wrap">
      {longContent}
    </p>
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          >
            <ScrollArea className="h-[200px] w-[350px] rounded-md border border-border p-4">
              <div className="w-[500px]">
                <p className="text-sm text-muted-foreground">
                  This is a scroll area that supports both vertical and
                  horizontal scrolling. The content is wider and taller than the
                  viewport, so you can scroll in both directions. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 font-medium text-foreground">ScrollArea</h4>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  description:
                    'CSS classes for the container. Set dimensions here (h-72, w-48, etc.).',
                },
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  description: 'The scrollable content.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-3 font-medium text-foreground">ScrollBar</h4>
            <PropsTable
              props={[
                {
                  name: 'orientation',
                  type: '"vertical" | "horizontal"',
                  default: '"vertical"',
                  description: 'The scrollbar direction.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes for the scrollbar.',
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
            title="In a Dropdown Menu"
            code={`<DropdownMenuContent>
  <ScrollArea className="h-72">
    {items.map((item) => (
      <DropdownMenuItem key={item.id}>
        {item.label}
      </DropdownMenuItem>
    ))}
  </ScrollArea>
</DropdownMenuContent>`}
          >
            <div className="w-48 rounded-md border border-border bg-popover p-1 shadow-md">
              <ScrollArea className="h-48">
                <div className="space-y-1">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    >
                      Menu item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Code Block"
            code={`<ScrollArea className="h-[200px] w-full rounded-md border bg-zinc-950 p-4">
  <pre className="text-sm text-zinc-50">
    <code>{codeString}</code>
  </pre>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          >
            <ScrollArea className="h-[200px] w-full rounded-md border border-border bg-zinc-950 p-4">
              <pre className="text-sm text-zinc-50">
                <code>{`function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first 10 Fibonacci numbers
const results = Array.from({ length: 10 }, (_, i) =>
  fibonacci(i)
);

console.log(results);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

export { fibonacci };`}</code>
              </pre>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ComponentPreview>

          <ComponentPreview
            title="Card List"
            code={`<ScrollArea className="h-96">
  <div className="space-y-4 pr-4">
    {notifications.map((notification) => (
      <Card key={notification.id}>
        <CardHeader>
          <CardTitle>{notification.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{notification.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</ScrollArea>`}
          >
            <ScrollArea className="h-72 w-full">
              <div className="space-y-4 pr-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <h4 className="font-medium">Notification {i + 1}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      This is the content of notification {i + 1}. It contains
                      some important information for the user.
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </ComponentPreview>
        </div>
      </Section>

      {/* Notes for the AI */}
      <Section id="ai-notes" title="Notes for the AI">
        <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-6">
          <div>
            <h4 className="font-medium text-foreground">Import</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Vertical scroll (default)
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {/* Content taller than container */}
  </div>
</ScrollArea>

// Horizontal scroll
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max p-4">
    {/* Content wider than container */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">ScrollArea</code>{' '}
                includes a vertical scrollbar by default
              </li>
              <li>
                Add <code className="rounded bg-muted px-1">&lt;ScrollBar orientation=&quot;horizontal&quot; /&gt;</code>{' '}
                inside ScrollArea for horizontal scrolling
              </li>
              <li>
                Set dimensions via{' '}
                <code className="rounded bg-muted px-1">className</code> on
                ScrollArea (e.g., <code className="rounded bg-muted px-1">h-72 w-48</code>)
              </li>
              <li>
                For horizontal scrolling, use{' '}
                <code className="rounded bg-muted px-1">whitespace-nowrap</code>{' '}
                and <code className="rounded bg-muted px-1">w-max</code> on content
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">@base-ui/react/scroll-area</code>
              </li>
              <li>
                Hides native scrollbars while keeping full keyboard/touch support
              </li>
              <li>
                Scrollbar thumb uses{' '}
                <code className="rounded bg-muted px-1">bg-border</code> color
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Fixed height list
<ScrollArea className="h-[400px]">
  {items.map(...)}
</ScrollArea>

// Horizontal carousel
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex w-max gap-4 p-4">
    {items.map(...)}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>

// Code block with both scrolls
<ScrollArea className="h-[300px] rounded-md border">
  <pre className="w-max p-4">
    <code>{code}</code>
  </pre>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Data Attributes</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;scroll-area&quot;
                </code>{' '}
                on root
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;scroll-area-viewport&quot;
                </code>{' '}
                on viewport
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;scroll-area-scrollbar&quot;
                </code>{' '}
                on scrollbar
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  data-slot=&quot;scroll-area-thumb&quot;
                </code>{' '}
                on thumb
              </li>
              <li>
                <code className="rounded bg-muted px-1">data-orientation</code>{' '}
                set on scrollbar
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
