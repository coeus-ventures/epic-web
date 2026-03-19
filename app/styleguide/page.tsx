'use client'

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

function ColorSwatch({
  name,
  variable,
  className,
  foregroundClass,
}: {
  name: string
  variable: string
  className: string
  foregroundClass?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex h-20 w-full items-center justify-center rounded-lg border border-border ${className}`}
      >
        {foregroundClass && (
          <span className={`text-sm font-medium ${foregroundClass}`}>Aa</span>
        )}
      </div>
      <div className="space-y-0.5">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{variable}</p>
      </div>
    </div>
  )
}

function RadiusSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`size-16 border-2 border-primary bg-muted ${className}`}
      />
      <p className="text-xs text-muted-foreground">{name}</p>
    </div>
  )
}

function ShadowSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`size-20 rounded-lg bg-card ${className}`}
      />
      <p className="text-xs text-muted-foreground">{name}</p>
    </div>
  )
}

export default function StyleguidePage() {
  return (
    <div className="max-w-5xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Design System
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Visual documentation of all design tokens and components
        </p>
      </header>

      {/* Colors Section */}
      <Section id="colors" title="Colors">
        {/* Semantic Colors */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-foreground">
            Semantic Colors
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <ColorSwatch
              name="Primary"
              variable="--primary"
              className="bg-primary"
              foregroundClass="text-primary-foreground"
            />
            <ColorSwatch
              name="Secondary"
              variable="--secondary"
              className="bg-secondary"
              foregroundClass="text-secondary-foreground"
            />
            <ColorSwatch
              name="Muted"
              variable="--muted"
              className="bg-muted"
              foregroundClass="text-muted-foreground"
            />
            <ColorSwatch
              name="Accent"
              variable="--accent"
              className="bg-accent"
              foregroundClass="text-accent-foreground"
            />
            <ColorSwatch
              name="Destructive"
              variable="--destructive"
              className="bg-destructive"
              foregroundClass="text-destructive-foreground"
            />
          </div>
        </div>

        {/* Backgrounds and Surfaces */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-foreground">
            Backgrounds & Surfaces
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <ColorSwatch
              name="Background"
              variable="--background"
              className="bg-background"
              foregroundClass="text-foreground"
            />
            <ColorSwatch
              name="Card"
              variable="--card"
              className="bg-card"
              foregroundClass="text-card-foreground"
            />
            <ColorSwatch
              name="Popover"
              variable="--popover"
              className="bg-popover"
              foregroundClass="text-popover-foreground"
            />
            <ColorSwatch
              name="Sidebar"
              variable="--sidebar"
              className="bg-sidebar"
              foregroundClass="text-sidebar-foreground"
            />
          </div>
        </div>

        {/* Borders */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-foreground">
            Borders & Inputs
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <ColorSwatch
              name="Border"
              variable="--border"
              className="bg-border"
            />
            <ColorSwatch
              name="Input"
              variable="--input"
              className="bg-input"
            />
            <ColorSwatch
              name="Ring"
              variable="--ring"
              className="bg-ring"
            />
          </div>
        </div>

        {/* Chart Colors */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-foreground">
            Chart Colors
          </h3>
          <div className="grid grid-cols-5 gap-4">
            <ColorSwatch
              name="Chart 1"
              variable="--chart-1"
              className="bg-chart-1"
            />
            <ColorSwatch
              name="Chart 2"
              variable="--chart-2"
              className="bg-chart-2"
            />
            <ColorSwatch
              name="Chart 3"
              variable="--chart-3"
              className="bg-chart-3"
            />
            <ColorSwatch
              name="Chart 4"
              variable="--chart-4"
              className="bg-chart-4"
            />
            <ColorSwatch
              name="Chart 5"
              variable="--chart-5"
              className="bg-chart-5"
            />
          </div>
        </div>
      </Section>

      {/* Typography Section */}
      <Section id="typography" title="Typography">
        <div className="space-y-8">
          {/* Font Families */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Font Families
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <p className="font-sans text-lg">
                  Sans: The quick brown fox jumps over the lazy dog
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  --font-sans
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="font-serif text-lg">
                  Serif: The quick brown fox jumps over the lazy dog
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  --font-serif
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="font-mono text-lg">
                  Mono: The quick brown fox jumps over the lazy dog
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  --font-mono
                </p>
              </div>
            </div>
          </div>

          {/* Heading Hierarchy */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Heading Hierarchy
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <h1 className="text-4xl font-bold tracking-tight">
                  Heading 1 - Bold 4xl
                </h1>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Heading 2 - Semibold 3xl
                </h2>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="text-2xl font-semibold">
                  Heading 3 - Semibold 2xl
                </h3>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h4 className="text-xl font-medium">Heading 4 - Medium xl</h4>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Body Text
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <p className="text-lg text-foreground">
                  Large body text (text-lg) - Used for lead paragraphs and
                  important content.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="text-base text-foreground">
                  Base body text (text-base) - Default paragraph text for
                  general content.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="text-sm text-foreground">
                  Small body text (text-sm) - Used for secondary information
                  and labels.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="text-xs text-muted-foreground">
                  Extra small text (text-xs, muted) - Used for captions and
                  helper text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Spacing & Radius Section */}
      <Section id="spacing-radius" title="Spacing & Border Radius">
        <div className="space-y-8">
          {/* Border Radius */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Border Radius
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Base radius: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--radius: 0.625rem</code>
            </p>
            <div className="flex flex-wrap gap-6">
              <RadiusSwatch name="rounded-sm" className="rounded-sm" />
              <RadiusSwatch name="rounded-md" className="rounded-md" />
              <RadiusSwatch name="rounded-lg" className="rounded-lg" />
              <RadiusSwatch name="rounded-xl" className="rounded-xl" />
              <RadiusSwatch name="rounded-full" className="rounded-full" />
            </div>
          </div>

          {/* Spacing */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Spacing Scale
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Base spacing: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--spacing: 0.25rem</code>
            </p>
            <div className="flex items-end gap-2">
              {[1, 2, 3, 4, 6, 8, 12, 16].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <div
                    className="bg-primary"
                    style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
                  />
                  <span className="text-xs text-muted-foreground">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Shadows Section */}
      <Section id="shadows" title="Shadows">
        <div className="flex flex-wrap gap-8 rounded-lg bg-muted/30 p-8">
          <ShadowSwatch name="shadow-2xs" className="shadow-2xs" />
          <ShadowSwatch name="shadow-xs" className="shadow-xs" />
          <ShadowSwatch name="shadow-sm" className="shadow-sm" />
          <ShadowSwatch name="shadow" className="shadow" />
          <ShadowSwatch name="shadow-md" className="shadow-md" />
          <ShadowSwatch name="shadow-lg" className="shadow-lg" />
          <ShadowSwatch name="shadow-xl" className="shadow-xl" />
          <ShadowSwatch name="shadow-2xl" className="shadow-2xl" />
        </div>
      </Section>

    </div>
  )
}
