'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
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

export default function AccordionPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Accordion
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that reveal or hide
          associated content.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Accordion component displays collapsible content panels for
            presenting information in a limited space. Each panel can be
            expanded or collapsed independently.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need to organize content into
            collapsible sections, such as FAQs, settings panels, or detailed
            information that users can reveal on demand.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Tabs, Accordion allows
            multiple sections to be open simultaneously and works better for
            longer content that benefits from vertical scrolling.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Accordion</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The root container that manages the state of all accordion items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AccordionItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Wraps each collapsible section with its trigger and content.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AccordionTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The clickable header that toggles the visibility of the content.
              Includes a chevron icon that rotates based on state.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">AccordionContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The collapsible content area that animates in/out when toggled.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic Accordion"
            code={`<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match your design
                  system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>

          <ComponentPreview
            title="With Default Open"
            code={`<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion defaultValue={['item-1']} className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Open by default</AccordionTrigger>
                <AccordionContent>
                  This item is open when the component first renders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Closed by default</AccordionTrigger>
                <AccordionContent>
                  This section starts collapsed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">Accordion</h4>
            <PropsTable
              props={[
                {
                  name: 'defaultValue',
                  type: 'string[]',
                  description: 'The value(s) of items open by default.',
                },
                {
                  name: 'value',
                  type: 'string[]',
                  description: 'Controlled value of open item(s).',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string[]) => void',
                  description: 'Callback when open items change.',
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
            <h4 className="mb-4 font-medium text-foreground">AccordionItem</h4>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  default: '-',
                  description: 'Unique identifier for this item (required).',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the item is disabled.',
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
            title="FAQ Section"
            code={`<Accordion className="w-full">
  <AccordionItem value="faq-1">
    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
    <AccordionContent>
      We accept all major credit cards, PayPal, and bank transfers.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>How long does shipping take?</AccordionTrigger>
    <AccordionContent>
      Standard shipping takes 3-5 business days. Express shipping
      is available for 1-2 day delivery.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-3">
    <AccordionTrigger>What is your return policy?</AccordionTrigger>
    <AccordionContent>
      We offer a 30-day return policy for all unused items in
      their original packaging.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, and bank transfers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                <AccordionContent>
                  Standard shipping takes 3-5 business days. Express shipping is
                  available for 1-2 day delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for all unused items in their
                  original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>

          <ComponentPreview
            title="With Multiple Open Items"
            code={`<Accordion defaultValue={["item-1", "item-2"]} className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>First open item</AccordionTrigger>
    <AccordionContent>This section is open on load.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second open item</AccordionTrigger>
    <AccordionContent>This section is also open on load.</AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion defaultValue={['item-1', 'item-2']} className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>First open item</AccordionTrigger>
                <AccordionContent>
                  This section is open when the component first renders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Second open item</AccordionTrigger>
                <AccordionContent>
                  This section is also open when the component first renders.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section Title</AccordionTrigger>
    <AccordionContent>
      Section content goes here.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required structure:</strong> Accordion → AccordionItem →
                AccordionTrigger + AccordionContent
              </li>
              <li>
                Each <code className="rounded bg-muted px-1">AccordionItem</code>{' '}
                requires a unique{' '}
                <code className="rounded bg-muted px-1">value</code> prop
              </li>
              <li>
                Multiple items can be open simultaneously by default
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  defaultValue={'{["item-1"]}'}
                </code>{' '}
                to set initially open item(s)
              </li>
              <li>
                The chevron icon is automatically included in AccordionTrigger
              </li>
              <li>
                Built on{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/accordion
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Override border style via className on AccordionItem (uses{' '}
                <code className="rounded bg-muted px-1">not-last:border-b</code>)
              </li>
              <li>
                Trigger hover shows underline; customize via className
              </li>
              <li>
                Content animations use{' '}
                <code className="rounded bg-muted px-1">
                  animate-accordion-down/up
                </code>
              </li>
              <li>
                Links in content get automatic hover styles and underlines
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Enter/Space:</strong> Toggle the focused trigger
              </li>
              <li>
                <strong>Arrow Down:</strong> Move focus to next trigger
              </li>
              <li>
                <strong>Arrow Up:</strong> Move focus to previous trigger
              </li>
              <li>
                <strong>Home:</strong> Move focus to first trigger
              </li>
              <li>
                <strong>End:</strong> Move focus to last trigger
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
