'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
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
      <div className="flex flex-wrap items-start gap-4 rounded-lg border border-border bg-card p-6">
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

export default function AspectRatioPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Aspect Ratio
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Displays content within a desired ratio, maintaining proportions
          across different viewport sizes.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The AspectRatio component constrains its children to a specific
            width-to-height ratio. It's useful for images, videos, and any
            content that needs consistent proportions.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display images, videos, or
            embeds with consistent proportions, or when building responsive
            image galleries and media grids.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AspectRatio</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main container component that enforces the aspect ratio on its
              children. Uses CSS custom property{' '}
              <code className="rounded bg-muted px-1">--ratio</code> internally.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import { AspectRatio } from '@/components/ui/aspect-ratio'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Landscape (16:9)"
            code={`<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="rounded-md object-cover" />
</AspectRatio>`}
          >
            <div className="w-64">
              <AspectRatio ratio={16 / 9}>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
                  16:9
                </div>
              </AspectRatio>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Square (1:1)"
            code={`<AspectRatio ratio={1}>
  <img src="..." alt="..." className="rounded-md object-cover" />
</AspectRatio>`}
          >
            <div className="w-32">
              <AspectRatio ratio={1}>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
                  1:1
                </div>
              </AspectRatio>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Portrait (9:16)"
            code={`<AspectRatio ratio={9 / 16}>
  <img src="..." alt="..." className="rounded-md object-cover" />
</AspectRatio>`}
          >
            <div className="w-24">
              <AspectRatio ratio={9 / 16}>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
                  9:16
                </div>
              </AspectRatio>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Classic Photo (4:3)"
            code={`<AspectRatio ratio={4 / 3}>
  <img src="..." alt="..." className="rounded-md object-cover" />
</AspectRatio>`}
          >
            <div className="w-48">
              <AspectRatio ratio={4 / 3}>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground">
                  4:3
                </div>
              </AspectRatio>
            </div>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <PropsTable
          props={[
            {
              name: 'ratio',
              type: 'number',
              description:
                'The desired aspect ratio (width / height). E.g., 16/9 = 1.777...',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply to the container.',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description:
                'The content to display within the aspect ratio container.',
            },
          ]}
        />
      </Section>

      {/* Examples */}
      <Section id="examples" title="Examples">
        <div className="space-y-8">
          <ComponentPreview
            title="Image with Object Cover"
            code={`<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
  <img
    src="/image.jpg"
    alt="Description"
    className="h-full w-full object-cover"
  />
</AspectRatio>`}
          >
            <div className="w-64">
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
              >
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  Image placeholder
                </div>
              </AspectRatio>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Video Embed Container"
            code={`<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/..."
    className="h-full w-full rounded-lg"
    allowFullScreen
  />
</AspectRatio>`}
          >
            <div className="w-80">
              <AspectRatio ratio={16 / 9}>
                <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground">
                  Video embed area
                </div>
              </AspectRatio>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Responsive Image Grid"
            code={`<div className="grid grid-cols-3 gap-4">
  {images.map((src) => (
    <AspectRatio ratio={1} key={src}>
      <img src={src} alt="..." className="rounded-md object-cover" />
    </AspectRatio>
  ))}
</div>`}
          >
            <div className="grid w-full max-w-sm grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <AspectRatio ratio={1} key={i}>
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                    {i}
                  </div>
                </AspectRatio>
              ))}
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
              <code>{`import { AspectRatio } from '@/components/ui/aspect-ratio'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="h-full w-full object-cover" />
</AspectRatio>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                The <code className="rounded bg-muted px-1">ratio</code> prop is
                required and must be a number (width / height)
              </li>
              <li>
                Common ratios: <code className="rounded bg-muted px-1">16/9</code>{' '}
                (widescreen), <code className="rounded bg-muted px-1">4/3</code>{' '}
                (classic), <code className="rounded bg-muted px-1">1</code>{' '}
                (square), <code className="rounded bg-muted px-1">9/16</code>{' '}
                (portrait)
              </li>
              <li>
                Children should use{' '}
                <code className="rounded bg-muted px-1">h-full w-full</code> to
                fill the container
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">object-cover</code>{' '}
                on images to prevent distortion
              </li>
              <li>
                Add <code className="rounded bg-muted px-1">overflow-hidden</code>{' '}
                to the AspectRatio for rounded corners on children
              </li>
              <li>
                This is a custom implementation using CSS{' '}
                <code className="rounded bg-muted px-1">aspect-ratio</code>{' '}
                property with a CSS variable
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              The component uses a CSS custom property internally:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--ratio</code> is set
                via inline style and consumed by the{' '}
                <code className="rounded bg-muted px-1">aspect-(--ratio)</code>{' '}
                Tailwind class
              </li>
              <li>
                The container is <code className="rounded bg-muted px-1">relative</code>{' '}
                positioned by default for absolute child positioning
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
