'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import * as React from 'react'

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

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/styleguide/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content.',
  },
  {
    title: 'Hover Card',
    href: '/styleguide/components/hover-card',
    description: 'For sighted users to preview content behind a link.',
  },
  {
    title: 'Progress',
    href: '/styleguide/components/progress',
    description: 'Displays an indicator showing completion progress.',
  },
  {
    title: 'Scroll Area',
    href: '/styleguide/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/styleguide/components/tabs',
    description: 'A set of layered sections of content.',
  },
  {
    title: 'Tooltip',
    href: '/styleguide/components/tooltip',
    description: 'A popup that displays information on hover.',
  },
]

const ListItem = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuLink> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default function NavigationMenuPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Navigation Menu
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of links for navigating websites with support for
          mega-menu style content.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Navigation Menu component provides a horizontal navigation bar
            with dropdown panels that can contain rich content like link lists,
            feature cards, or promotional content (mega-menu pattern).
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need main site navigation with
            expandable sections for categories, features, or resources (like on
            marketing sites or documentation).
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Menubar (application
            commands), Navigation Menu is for site navigation with rich content
            panels. Unlike Dropdown Menu (single action list), it supports
            multi-column layouts and featured content.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NavigationMenu</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root component that wraps the navigation.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NavigationMenuList</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Horizontal list of navigation items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NavigationMenuItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Wrapper for each navigation item (trigger + content).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              NavigationMenuTrigger
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Button that opens the dropdown content. Includes chevron icon.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              NavigationMenuContent
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The dropdown panel for rich content.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">NavigationMenuLink</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual navigation link. Can be used directly or inside
              content.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              navigationMenuTriggerStyle
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A function that returns trigger styles for consistent styling of
              links.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="With Dropdown Content"
            code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] md:w-[500px]">
          <li>
            <NavigationMenuLink href="/docs">
              Introduction
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink href="/docs/installation">
              Installation
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/docs"
                    className={navigationMenuTriggerStyle()}
                  >
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ComponentPreview>

          <ComponentPreview
            title="Simple Links Only"
            code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
        Contact
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">NavigationMenu</h4>
            <PropsTable
              props={[
                {
                  name: 'align',
                  type: '"start" | "center" | "end"',
                  default: '"start"',
                  description: 'Alignment of the dropdown content.',
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
              NavigationMenuLink
            </h4>
            <PropsTable
              props={[
                {
                  name: 'href',
                  type: 'string',
                  description: 'The URL to navigate to.',
                },
                {
                  name: 'active',
                  type: 'boolean',
                  default: 'false',
                  description:
                    'Whether the link is the current active page.',
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
            title="With Featured Card"
            code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink
              className="flex h-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6"
              href="/"
            >
              <div className="text-lg font-medium">Featured</div>
              <p className="text-sm text-muted-foreground">
                Our most popular product.
              </p>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink href="/product-1">Product 1</NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink href="/product-2">Product 2</NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Featured Product
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Our most popular product with amazing features.
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Product A">
                        Description of product A.
                      </ListItem>
                      <ListItem href="#" title="Product B">
                        Description of product B.
                      </ListItem>
                      <ListItem href="#" title="Product C">
                        Description of product C.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<NavigationMenu>
  <NavigationMenuList>
    {/* With dropdown */}
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          <li><NavigationMenuLink href="/a">Link A</NavigationMenuLink></li>
          <li><NavigationMenuLink href="/b">Link B</NavigationMenuLink></li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Simple link */}
    <NavigationMenuItem>
      <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> NavigationMenu →
                NavigationMenuList → NavigationMenuItem(s)
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">NavigationMenuTrigger</code>{' '}
                + <code className="rounded bg-muted px-1">NavigationMenuContent</code>{' '}
                for dropdowns
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  navigationMenuTriggerStyle()
                </code>{' '}
                to style direct links to match triggers
              </li>
              <li>
                Content panels support any layout (grid, flexbox, etc.)
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/navigation-menu
                </code>
              </li>
              <li>
                Trigger includes chevron icon automatically
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              When to Use Each Navigation Component
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Navigation Menu:</strong> Site navigation with rich
                dropdown content (mega-menus)
              </li>
              <li>
                <strong>Menubar:</strong> Application command menus (File, Edit,
                View)
              </li>
              <li>
                <strong>Breadcrumb:</strong> Show current location in hierarchy
              </li>
              <li>
                <strong>Tabs:</strong> Switch between content sections on same
                page
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Trigger uses{' '}
                <code className="rounded bg-muted px-1">bg-background</code>{' '}
                with <code className="rounded bg-muted px-1">hover:bg-muted</code>
              </li>
              <li>
                Content panel uses{' '}
                <code className="rounded bg-muted px-1">bg-popover</code>{' '}
                with shadow
              </li>
              <li>
                Set content width via className (e.g.,{' '}
                <code className="rounded bg-muted px-1">w-[400px]</code>)
              </li>
              <li>
                Links use{' '}
                <code className="rounded bg-muted px-1">hover:bg-accent</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Enter/Space:</strong> Open dropdown or activate link
              </li>
              <li>
                <strong>Arrow keys:</strong> Navigate within dropdown content
              </li>
              <li>
                <strong>Escape:</strong> Close dropdown
              </li>
              <li>
                <strong>Tab:</strong> Move focus through items
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
