'use client'

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
} from '@/components/ui/item'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MoreHorizontal, Star, Mail, Trash2, FileText } from 'lucide-react'

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

export default function ItemPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Item
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A flexible list item component with support for media, content, and
          actions.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Item component provides a consistent structure for list items
            with support for icons, images, titles, descriptions, and action
            buttons. It&apos;s designed for use in lists, menus, and anywhere you
            need to display structured data with a consistent layout.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display lists of contacts,
            files, notifications, settings, or any data that benefits from a
            structured item layout.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Item</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container with variants for default, outline, and muted
              styling. Supports different sizes.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemMedia</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for icons or images with variants for icon and image
              styling.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for the title and description, takes up remaining space.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemTitle</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main text/heading of the item.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemDescription</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Secondary text with muted styling.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemActions</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for action buttons on the right side.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for grouping multiple Items with proper spacing.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A horizontal separator for dividing items in a group.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ItemHeader / ItemFooter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Full-width containers for header or footer content within an item.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
} from '@/components/ui/item'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Default (transparent)"
            code={`<Item variant="default">
  <ItemMedia variant="icon"><Mail /></ItemMedia>
  <ItemContent>
    <ItemTitle>Default Item</ItemTitle>
    <ItemDescription>No border, transparent background.</ItemDescription>
  </ItemContent>
</Item>`}
          >
            <Item variant="default">
              <ItemMedia variant="icon">
                <Mail />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Default Item</ItemTitle>
                <ItemDescription>
                  No border, transparent background.
                </ItemDescription>
              </ItemContent>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="Outline"
            code={`<Item variant="outline">
  <ItemMedia variant="icon"><Mail /></ItemMedia>
  <ItemContent>
    <ItemTitle>Outline Item</ItemTitle>
    <ItemDescription>With visible border.</ItemDescription>
  </ItemContent>
</Item>`}
          >
            <Item variant="outline">
              <ItemMedia variant="icon">
                <Mail />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Outline Item</ItemTitle>
                <ItemDescription>With visible border.</ItemDescription>
              </ItemContent>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="Muted"
            code={`<Item variant="muted">
  <ItemMedia variant="icon"><Mail /></ItemMedia>
  <ItemContent>
    <ItemTitle>Muted Item</ItemTitle>
    <ItemDescription>With muted background.</ItemDescription>
  </ItemContent>
</Item>`}
          >
            <Item variant="muted">
              <ItemMedia variant="icon">
                <Mail />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Muted Item</ItemTitle>
                <ItemDescription>With muted background.</ItemDescription>
              </ItemContent>
            </Item>
          </ComponentPreview>
        </div>
      </Section>

      {/* Sizes */}
      <Section id="sizes" title="Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Default Size"
            code={`<Item size="default">
  <ItemContent><ItemTitle>Default Size</ItemTitle></ItemContent>
</Item>`}
          >
            <Item size="default" variant="outline">
              <ItemContent>
                <ItemTitle>Default Size</ItemTitle>
              </ItemContent>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="Small Size"
            code={`<Item size="sm">
  <ItemContent><ItemTitle>Small Size</ItemTitle></ItemContent>
</Item>`}
          >
            <Item size="sm" variant="outline">
              <ItemContent>
                <ItemTitle>Small Size</ItemTitle>
              </ItemContent>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="Extra Small Size"
            code={`<Item size="xs">
  <ItemContent><ItemTitle>Extra Small Size</ItemTitle></ItemContent>
</Item>`}
          >
            <Item size="xs" variant="outline">
              <ItemContent>
                <ItemTitle>Extra Small Size</ItemTitle>
              </ItemContent>
            </Item>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Item</h3>
            <PropsTable
              props={[
                {
                  name: 'variant',
                  type: '"default" | "outline" | "muted"',
                  default: '"default"',
                  description: 'The visual style of the item.',
                },
                {
                  name: 'size',
                  type: '"default" | "sm" | "xs"',
                  default: '"default"',
                  description: 'The size affecting padding and gaps.',
                },
                {
                  name: 'render',
                  type: 'React.ReactElement',
                  description: 'Render as a different element (e.g., link).',
                },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">ItemMedia</h3>
            <PropsTable
              props={[
                {
                  name: 'variant',
                  type: '"default" | "icon" | "image"',
                  default: '"default"',
                  description: 'Styling for icons or images.',
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
            title="With Avatar and Actions"
            code={`<Item variant="outline">
  <ItemMedia variant="image">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </ItemMedia>
  <ItemContent>
    <ItemTitle>John Doe</ItemTitle>
    <ItemDescription>john@example.com</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost" size="icon-sm">
      <MoreHorizontal />
    </Button>
  </ItemActions>
</Item>`}
          >
            <Item variant="outline">
              <ItemMedia variant="image">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>John Doe</ItemTitle>
                <ItemDescription>john@example.com</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon-sm">
                  <MoreHorizontal />
                </Button>
              </ItemActions>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="File Item with Badge"
            code={`<Item variant="outline">
  <ItemMedia variant="icon">
    <FileText />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>
      Report.pdf
      <Badge variant="secondary">New</Badge>
    </ItemTitle>
    <ItemDescription>2.4 MB • Updated 2 hours ago</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost" size="icon-sm">
      <Star />
    </Button>
    <Button variant="ghost" size="icon-sm">
      <Trash2 />
    </Button>
  </ItemActions>
</Item>`}
          >
            <Item variant="outline">
              <ItemMedia variant="icon">
                <FileText />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  Report.pdf
                  <Badge variant="secondary">New</Badge>
                </ItemTitle>
                <ItemDescription>2.4 MB • Updated 2 hours ago</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon-sm">
                  <Star />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <Trash2 />
                </Button>
              </ItemActions>
            </Item>
          </ComponentPreview>

          <ComponentPreview
            title="Item Group"
            code={`<ItemGroup>
  <Item>
    <ItemMedia variant="icon"><Mail /></ItemMedia>
    <ItemContent>
      <ItemTitle>Email 1</ItemTitle>
      <ItemDescription>Subject line here...</ItemDescription>
    </ItemContent>
  </Item>
  <ItemSeparator />
  <Item>
    <ItemMedia variant="icon"><Mail /></ItemMedia>
    <ItemContent>
      <ItemTitle>Email 2</ItemTitle>
      <ItemDescription>Another subject...</ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>`}
          >
            <ItemGroup>
              <Item>
                <ItemMedia variant="icon">
                  <Mail />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Email 1</ItemTitle>
                  <ItemDescription>Subject line here...</ItemDescription>
                </ItemContent>
              </Item>
              <ItemSeparator />
              <Item>
                <ItemMedia variant="icon">
                  <Mail />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Email 2</ItemTitle>
                  <ItemDescription>Another subject...</ItemDescription>
                </ItemContent>
              </Item>
            </ItemGroup>
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
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
} from '@/components/ui/item'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Item>
  <ItemMedia variant="icon">
    <Icon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Title</ItemTitle>
    <ItemDescription>Description</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button>Action</Button>
  </ItemActions>
</Item>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">ItemMedia</code> with{' '}
                <code className="rounded bg-muted px-1">
                  variant=&quot;icon&quot;
                </code>{' '}
                auto-sizes icons to 16px
              </li>
              <li>
                <code className="rounded bg-muted px-1">ItemMedia</code> with{' '}
                <code className="rounded bg-muted px-1">
                  variant=&quot;image&quot;
                </code>{' '}
                provides 40px container (8px for sm, 6px for xs)
              </li>
              <li>
                <code className="rounded bg-muted px-1">ItemContent</code>{' '}
                expands to fill available space (flex-1)
              </li>
              <li>
                <code className="rounded bg-muted px-1">ItemTitle</code>{' '}
                supports badges and icons as children
              </li>
              <li>
                <code className="rounded bg-muted px-1">ItemGroup</code>{' '}
                provides{' '}
                <code className="rounded bg-muted px-1">gap-4</code> between
                items (2.5 for sm, 2 for xs)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">render</code> prop
                to make items clickable links
              </li>
              <li>
                Built on Base UI&apos;s{' '}
                <code className="rounded bg-muted px-1">useRender</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Clickable item (as link)
<Item render={<a href="/profile" />}>
  <ItemContent>
    <ItemTitle>View Profile</ItemTitle>
  </ItemContent>
</Item>

// Contact list
<ItemGroup>
  {contacts.map(contact => (
    <Item key={contact.id} variant="outline">
      <ItemMedia variant="image">
        <Avatar>
          <AvatarImage src={contact.avatar} />
          <AvatarFallback>{contact.initials}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{contact.name}</ItemTitle>
        <ItemDescription>{contact.email}</ItemDescription>
      </ItemContent>
    </Item>
  ))}
</ItemGroup>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
