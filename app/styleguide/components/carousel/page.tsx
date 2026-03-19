'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
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
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border bg-card p-6">
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

export default function CarouselPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Carousel
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A scrollable container for displaying a set of slides with navigation
          controls.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Carousel component provides a horizontal or vertical sliding
            interface for displaying multiple items. Built on Embla Carousel,
            it supports touch gestures, keyboard navigation, and various
            configuration options.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to display a collection of items
            in a space-efficient way, such as image galleries, product showcases,
            or testimonials.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Carousel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container that provides context and keyboard navigation.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CarouselContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The scrollable container that holds all carousel items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CarouselItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual slide container. Each item takes full width by default.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CarouselPrevious</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Navigation button to scroll to the previous slide.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">CarouselNext</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Navigation button to scroll to the next slide.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">useCarousel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Hook to access carousel state and controls programmatically.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  type CarouselApi,
} from '@/components/ui/carousel'`}</code>
        </pre>
      </Section>

      {/* Orientations */}
      <Section id="orientations" title="Orientations">
        <div className="space-y-8">
          <ComponentPreview
            title="Horizontal (default)"
            code={`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{num}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          >
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <CarouselItem key={num}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{num}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ComponentPreview>

          <ComponentPreview
            title="Vertical"
            code={`<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[200px]">
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num} className="pt-1 md:basis-1/2">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-3xl font-semibold">{num}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          >
            <Carousel orientation="vertical" className="w-full max-w-xs">
              <CarouselContent className="-mt-1 h-[200px]">
                {[1, 2, 3, 4, 5].map((num) => (
                  <CarouselItem key={num} className="pt-1 md:basis-1/2">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{num}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Carousel</h3>
            <PropsTable
              props={[
                {
                  name: 'orientation',
                  type: '"horizontal" | "vertical"',
                  default: '"horizontal"',
                  description: 'The scroll direction of the carousel.',
                },
                {
                  name: 'opts',
                  type: 'EmblaCarouselOptions',
                  description: 'Embla Carousel configuration options.',
                },
                {
                  name: 'plugins',
                  type: 'EmblaCarouselPlugin[]',
                  description: 'Embla Carousel plugins.',
                },
                {
                  name: 'setApi',
                  type: '(api: CarouselApi) => void',
                  description: 'Callback to receive the carousel API instance.',
                },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">CarouselItem</h3>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  description:
                    'Use basis-* classes to show multiple items (e.g., basis-1/2, basis-1/3).',
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
            title="Multiple Items Per View"
            code={`<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num} className="pl-1 basis-1/3">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">{num}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          >
            <Carousel className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <CarouselItem key={num} className="basis-1/3 pl-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">{num}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ComponentPreview>

          <ComponentPreview
            title="With Loop"
            code={`<Carousel opts={{ loop: true }} className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3].map((num) => (
      <CarouselItem key={num}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{num}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          >
            <Carousel opts={{ loop: true }} className="w-full max-w-xs">
              <CarouselContent>
                {[1, 2, 3].map((num) => (
                  <CarouselItem key={num}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{num}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">embla-carousel-react</code>
              </li>
              <li>
                Each{' '}
                <code className="rounded bg-muted px-1">CarouselItem</code>{' '}
                takes full width by default (
                <code className="rounded bg-muted px-1">basis-full</code>)
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">basis-1/2</code>,{' '}
                <code className="rounded bg-muted px-1">basis-1/3</code> for
                multiple items per view
              </li>
              <li>
                Navigation buttons are positioned absolutely outside the
                carousel
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  opts={'{'}loop: true{'}'}
                </code>{' '}
                for infinite scrolling
              </li>
              <li>
                Supports keyboard navigation (Arrow keys)
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">useCarousel</code> hook
                for programmatic control
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Common Patterns</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`// Multiple items with custom gap
<CarouselContent className="-ml-2">
  <CarouselItem className="pl-2 basis-1/3">...</CarouselItem>
</CarouselContent>

// API access for programmatic control
const [api, setApi] = useState<CarouselApi>()

<Carousel setApi={setApi}>...</Carousel>

// Go to specific slide
api?.scrollTo(2)

// Listen to slide change
api?.on("select", () => {
  console.log("Current slide:", api.selectedScrollSnap())
})`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
