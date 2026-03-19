'use client'

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Check } from 'lucide-react'

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

export default function AvatarPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Avatar
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An image element with a fallback for representing users.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Avatar component displays a user's profile image or initials
            as a fallback. It's commonly used in user profiles, comments,
            navigation headers, and anywhere user identity needs to be displayed.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display a user's profile
            picture, show user initials when no image is available, or create
            avatar groups for team displays.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Avatar</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container that wraps the image and fallback. Supports
              three sizes: sm, default, and lg.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AvatarImage</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The image element that displays the user's photo. Automatically
              hidden when the image fails to load.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AvatarFallback</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Displayed when the image is loading or fails to load. Typically
              contains user initials or an icon.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AvatarBadge</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              A small indicator badge positioned on the avatar, useful for status
              indicators or verification marks.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AvatarGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Container for displaying multiple avatars with overlapping layout.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AvatarGroupCount</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Displays a count indicator for additional avatars not shown in the
              group.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@/components/ui/avatar'`}</code>
        </pre>
      </Section>

      {/* Sizes */}
      <Section id="sizes" title="Sizes">
        <div className="space-y-8">
          <ComponentPreview
            title="Small (size='sm')"
            code={`<Avatar size="sm">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          >
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ComponentPreview>

          <ComponentPreview
            title="Default (size='default')"
            code={`<Avatar size="default">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          >
            <Avatar size="default">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ComponentPreview>

          <ComponentPreview
            title="Large (size='lg')"
            code={`<Avatar size="lg">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          >
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Avatar</h3>
            <PropsTable
              props={[
                {
                  name: 'size',
                  type: '"default" | "sm" | "lg"',
                  default: '"default"',
                  description: 'The size of the avatar.',
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
            <h3 className="mb-4 text-lg font-medium">AvatarImage</h3>
            <PropsTable
              props={[
                {
                  name: 'src',
                  type: 'string',
                  description: 'The image source URL.',
                },
                {
                  name: 'alt',
                  type: 'string',
                  description: 'Alternative text for the image.',
                },
                {
                  name: 'className',
                  type: 'string',
                  description: 'Additional CSS classes to apply.',
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
            title="With Fallback (no image)"
            code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
          >
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </ComponentPreview>

          <ComponentPreview
            title="With Badge"
            code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarBadge>
    <Check />
  </AvatarBadge>
</Avatar>`}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge>
                <Check />
              </AvatarBadge>
            </Avatar>
          </ComponentPreview>

          <ComponentPreview
            title="Avatar Group"
            code={`<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>`}
          >
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+5</AvatarGroupCount>
            </AvatarGroup>
          </ComponentPreview>

          <ComponentPreview
            title="All Sizes Comparison"
            code={`<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
<Avatar size="default"><AvatarFallback>MD</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>`}
          >
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
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
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@/components/ui/avatar'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Avatar>
  <AvatarImage src="user-photo.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Avatar requires <code className="rounded bg-muted px-1">AvatarImage</code>{' '}
                and/or <code className="rounded bg-muted px-1">AvatarFallback</code>{' '}
                as children
              </li>
              <li>
                Available sizes:{' '}
                <code className="rounded bg-muted px-1">sm</code> (24px),{' '}
                <code className="rounded bg-muted px-1">default</code> (32px),{' '}
                <code className="rounded bg-muted px-1">lg</code> (40px)
              </li>
              <li>
                <code className="rounded bg-muted px-1">AvatarFallback</code>{' '}
                automatically shows when the image fails to load
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">AvatarBadge</code>{' '}
                for status indicators or verification marks
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">AvatarGroup</code>{' '}
                to display multiple avatars with overlapping layout
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">AvatarGroupCount</code>{' '}
                to show "+X" for additional users not displayed
              </li>
              <li>
                Component uses{' '}
                <code className="rounded bg-muted px-1">@base-ui/react/avatar</code>{' '}
                primitive under the hood
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              The avatar uses semantic color tokens. Customize via className:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--muted</code> for
                fallback background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--muted-foreground</code>{' '}
                for fallback text
              </li>
              <li>
                <code className="rounded bg-muted px-1">--primary</code> for
                badge background
              </li>
              <li>
                <code className="rounded bg-muted px-1">--border</code> for
                avatar border overlay
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Avatar with verified badge
<Avatar>
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback>{user.initials}</AvatarFallback>
  <AvatarBadge><Check /></AvatarBadge>
</Avatar>

// Team avatar group
<AvatarGroup>
  {team.slice(0, 3).map(user => (
    <Avatar key={user.id}>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
  ))}
  {team.length > 3 && (
    <AvatarGroupCount>+{team.length - 3}</AvatarGroupCount>
  )}
</AvatarGroup>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
