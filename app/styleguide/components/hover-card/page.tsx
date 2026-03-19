'use client'

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CalendarDays } from 'lucide-react'

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

export default function HoverCardPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Hover Card
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A card that appears on hover to preview content behind a link or element.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Hover Card component displays a preview card when users hover over a
            trigger element. It is designed for sighted users to quickly preview
            content without navigating away from the current page.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You want to show additional context about a
            link, user profile, or any element that benefits from a preview on hover.
          </p>
          <p className="text-muted-foreground">
            <strong>Hover Card vs Popover:</strong> Hover Card opens on hover and is
            read-only (for previewing). Popover opens on click and can contain
            interactive elements.
          </p>
          <p className="text-muted-foreground">
            <strong>Hover Card vs Tooltip:</strong> Hover Card shows rich content
            (images, text blocks). Tooltip is for short text hints only.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">HoverCard</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root container that manages hover state and timing.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">HoverCardTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Element that triggers the hover card on mouse enter.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">HoverCardContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for the preview content. Supports positioning via side and align props.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Positioning Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Bottom (Default)"
            code={`<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">Hover me</span>
  </HoverCardTrigger>
  <HoverCardContent side="bottom">
    Content appears below
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Hover me (bottom)</span>
              </HoverCardTrigger>
              <HoverCardContent side="bottom">
                <p>Content appears below the trigger.</p>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>

          <ComponentPreview
            title="Top"
            code={`<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">Hover me</span>
  </HoverCardTrigger>
  <HoverCardContent side="top">
    Content appears above
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Hover me (top)</span>
              </HoverCardTrigger>
              <HoverCardContent side="top">
                <p>Content appears above the trigger.</p>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>

          <ComponentPreview
            title="Left"
            code={`<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">Hover me</span>
  </HoverCardTrigger>
  <HoverCardContent side="left">
    Content appears to the left
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Hover me (left)</span>
              </HoverCardTrigger>
              <HoverCardContent side="left">
                <p>Content appears to the left.</p>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>

          <ComponentPreview
            title="Right"
            code={`<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">Hover me</span>
  </HoverCardTrigger>
  <HoverCardContent side="right">
    Content appears to the right
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Hover me (right)</span>
              </HoverCardTrigger>
              <HoverCardContent side="right">
                <p>Content appears to the right.</p>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>

          <ComponentPreview
            title="Alignment Options"
            code={`<HoverCard>
  <HoverCardTrigger>Align Start</HoverCardTrigger>
  <HoverCardContent align="start">...</HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger>Align Center</HoverCardTrigger>
  <HoverCardContent align="center">...</HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger>Align End</HoverCardTrigger>
  <HoverCardContent align="end">...</HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Align Start</span>
              </HoverCardTrigger>
              <HoverCardContent align="start">
                <p>Aligned to the start edge.</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Align Center</span>
              </HoverCardTrigger>
              <HoverCardContent align="center">
                <p>Aligned to the center.</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <span className="underline cursor-pointer">Align End</span>
              </HoverCardTrigger>
              <HoverCardContent align="end">
                <p>Aligned to the end edge.</p>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">HoverCard</h3>
            <PropsTable
              props={[
                {
                  name: 'open',
                  type: 'boolean',
                  description: 'Controlled open state.',
                },
                {
                  name: 'onOpenChange',
                  type: '(open: boolean) => void',
                  description: 'Callback when open state changes.',
                },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">HoverCardContent</h3>
            <PropsTable
              props={[
                {
                  name: 'side',
                  type: '"top" | "right" | "bottom" | "left"',
                  default: '"bottom"',
                  description: 'Preferred side to position the content.',
                },
                {
                  name: 'sideOffset',
                  type: 'number',
                  default: '4',
                  description: 'Distance from the trigger in pixels.',
                },
                {
                  name: 'align',
                  type: '"start" | "center" | "end"',
                  default: '"center"',
                  description: 'Alignment along the side.',
                },
                {
                  name: 'alignOffset',
                  type: 'number',
                  default: '4',
                  description: 'Offset for alignment in pixels.',
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
            title="User Profile Card"
            code={`<HoverCard>
  <HoverCardTrigger className="font-medium underline cursor-pointer">
    @johndoe
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="/avatars/01.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@johndoe</h4>
        <p className="text-sm text-muted-foreground">
          Software engineer. Building cool stuff.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger className="font-medium underline cursor-pointer">
                @johndoe
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@johndoe</h4>
                    <p className="text-sm text-muted-foreground">
                      Software engineer. Building cool stuff.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>

          <ComponentPreview
            title="Link Preview"
            code={`<HoverCard>
  <HoverCardTrigger>
    <a href="#" className="text-primary underline">
      Read the documentation
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Documentation</h4>
      <p className="text-sm text-muted-foreground">
        Comprehensive guides and API reference for all components.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger>
                <a href="#" className="text-primary underline" onClick={(e) => e.preventDefault()}>
                  Read the documentation
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive guides and API reference for all components.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </ComponentPreview>

          <ComponentPreview
            title="With Button Trigger"
            code={`<HoverCard>
  <HoverCardTrigger render={<Button variant="outline" />}>
    Hover for info
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm">
      This information appears when hovering over the button.
    </p>
  </HoverCardContent>
</HoverCard>`}
          >
            <HoverCard>
              <HoverCardTrigger render={<Button variant="outline" />}>
                Hover for info
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm">
                  This information appears when hovering over the button.
                </p>
              </HoverCardContent>
            </HoverCard>
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
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">Hover me</span>
  </HoverCardTrigger>
  <HoverCardContent>
    Preview content here
  </HoverCardContent>
</HoverCard>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Required Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">HoverCard</code> - Root wrapper (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">HoverCardTrigger</code> - Hover target (required)
              </li>
              <li>
                <code className="rounded bg-muted px-1">HoverCardContent</code> - Content container (required)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                HoverCard opens on <strong>hover</strong>, not click
              </li>
              <li>
                Default width is <code className="rounded bg-muted px-1">w-64</code> (16rem);
                customize with className
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">render</code> prop on HoverCardTrigger for custom elements
              </li>
              <li>
                Position with <code className="rounded bg-muted px-1">side</code> and{' '}
                <code className="rounded bg-muted px-1">align</code> props on HoverCardContent
              </li>
              <li>
                Built-in delay handling for smooth hover interactions
              </li>
              <li>
                HoverCard uses <code className="rounded bg-muted px-1">@base-ui/react/preview-card</code> primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">When to Use HoverCard vs Popover vs Tooltip</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>HoverCard:</strong> Rich preview content (user profiles, link previews).
                Opens on hover. Content is read-only/non-interactive.
              </li>
              <li>
                <strong>Popover:</strong> Interactive content (forms, menus, actions).
                Opens on click. Can contain buttons, inputs, etc.
              </li>
              <li>
                <strong>Tooltip:</strong> Short text hints only. Opens on hover.
                No rich content or interactivity.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Primarily for sighted users (hover interaction)</li>
              <li>Content should be supplementary, not essential</li>
              <li>Consider keyboard users: content is also accessible on focus</li>
              <li>Don't put critical actions inside HoverCard</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">CSS Variables / Customization</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--popover</code> - Background color
              </li>
              <li>
                <code className="rounded bg-muted px-1">--popover-foreground</code> - Text color
              </li>
              <li>
                Override width via className on HoverCardContent
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
