'use client'

import { useState } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from '@/components/ui/combobox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
]

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

function BasicCombobox() {
  const [value, setValue] = useState<string | null>(null)
  return (
    <Combobox value={value} onValueChange={setValue}>
      <ComboboxInput placeholder="Select framework..." className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          {frameworks.map((framework) => (
            <ComboboxItem key={framework.value} value={framework.value}>
              {framework.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxWithClear() {
  const [value, setValue] = useState<string | null>('react')
  return (
    <Combobox value={value} onValueChange={setValue}>
      <ComboboxInput placeholder="Select framework..." showClear className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          {frameworks.map((framework) => (
            <ComboboxItem key={framework.value} value={framework.value}>
              {framework.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxWithGroups() {
  const [value, setValue] = useState<string | null>(null)
  return (
    <Combobox value={value} onValueChange={setValue}>
      <ComboboxInput placeholder="Select tech..." className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Frameworks</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="angular">Angular</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Build Tools</ComboboxLabel>
            <ComboboxItem value="vite">Vite</ComboboxItem>
            <ComboboxItem value="webpack">Webpack</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}

export default function ComboboxPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Combobox
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          An autocomplete input with a filterable dropdown list.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Combobox component combines a text input with a dropdown list,
            allowing users to either type to filter options or select from the
            list. It&apos;s ideal for large option sets where searching is
            helpful.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You have a large list of options (10+)
            and want to allow users to search/filter, or when you want to
            combine free-text input with predefined options.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Combobox</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Root component managing state and selection.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxInput</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Text input with integrated trigger and optional clear button.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Dropdown popup containing the list of options.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxList</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Scrollable container for items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxItem</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Individual selectable option with checkmark indicator.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxGroup</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Groups related items together.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxLabel</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Label for a group of items.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxEmpty</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Shown when no items match the search.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">ComboboxSeparator</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Visual divider between items or groups.
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from '@/components/ui/combobox'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variations">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic"
            code={`const [value, setValue] = useState<string | null>(null)

<Combobox value={value} onValueChange={setValue}>
  <ComboboxInput placeholder="Select framework..." className="w-56" />
  <ComboboxContent>
    <ComboboxList>
      {frameworks.map((fw) => (
        <ComboboxItem key={fw.value} value={fw.value}>
          {fw.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
    <ComboboxEmpty>No framework found.</ComboboxEmpty>
  </ComboboxContent>
</Combobox>`}
          >
            <BasicCombobox />
          </ComponentPreview>

          <ComponentPreview
            title="With Clear Button"
            code={`<Combobox value={value} onValueChange={setValue}>
  <ComboboxInput
    placeholder="Select framework..."
    showClear
    className="w-56"
  />
  <ComboboxContent>
    <ComboboxList>
      {frameworks.map((fw) => (
        <ComboboxItem key={fw.value} value={fw.value}>
          {fw.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
    <ComboboxEmpty>No framework found.</ComboboxEmpty>
  </ComboboxContent>
</Combobox>`}
          >
            <ComboboxWithClear />
          </ComponentPreview>

          <ComponentPreview
            title="With Groups"
            code={`<Combobox value={value} onValueChange={setValue}>
  <ComboboxInput placeholder="Select tech..." className="w-56" />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxGroup>
        <ComboboxLabel>Frameworks</ComboboxLabel>
        <ComboboxItem value="react">React</ComboboxItem>
        <ComboboxItem value="vue">Vue</ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup>
        <ComboboxLabel>Build Tools</ComboboxLabel>
        <ComboboxItem value="vite">Vite</ComboboxItem>
        <ComboboxItem value="webpack">Webpack</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
    <ComboboxEmpty>No results found.</ComboboxEmpty>
  </ComboboxContent>
</Combobox>`}
          >
            <ComboboxWithGroups />
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              Combobox
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string | null',
                  description: 'Controlled value of the selected item.',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string | null) => void',
                  description: 'Callback when value changes.',
                },
                {
                  name: 'defaultValue',
                  type: 'string',
                  description: 'Default value (uncontrolled).',
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-foreground">
              ComboboxInput
            </h3>
            <PropsTable
              props={[
                {
                  name: 'placeholder',
                  type: 'string',
                  description: 'Placeholder text.',
                },
                {
                  name: 'showTrigger',
                  type: 'boolean',
                  default: 'true',
                  description: 'Show dropdown trigger button.',
                },
                {
                  name: 'showClear',
                  type: 'boolean',
                  default: 'false',
                  description: 'Show clear button when value selected.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable the input.',
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
            <h3 className="mb-4 text-lg font-medium text-foreground">
              ComboboxItem
            </h3>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  description: 'Unique value for this option.',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable this option.',
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
            title="With Label"
            code={`<div className="space-y-2">
  <Label>Framework</Label>
  <Combobox value={value} onValueChange={setValue}>
    <ComboboxInput placeholder="Search..." className="w-56" />
    <ComboboxContent>
      <ComboboxList>
        {frameworks.map((fw) => (
          <ComboboxItem key={fw.value} value={fw.value}>
            {fw.label}
          </ComboboxItem>
        ))}
      </ComboboxList>
      <ComboboxEmpty>No results.</ComboboxEmpty>
    </ComboboxContent>
  </Combobox>
</div>`}
          >
            <div className="space-y-2">
              <Label>Framework</Label>
              <BasicCombobox />
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
              <code>{`import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from '@/components/ui/combobox'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const [value, setValue] = useState<string | null>(null)

<Combobox value={value} onValueChange={setValue}>
  <ComboboxInput placeholder="Search..." />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxItem value="opt1">Option 1</ComboboxItem>
      <ComboboxItem value="opt2">Option 2</ComboboxItem>
    </ComboboxList>
    <ComboboxEmpty>No results found.</ComboboxEmpty>
  </ComboboxContent>
</Combobox>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                Structure:{' '}
                <code className="rounded bg-muted px-1">Combobox</code> {'>'}{' '}
                <code className="rounded bg-muted px-1">ComboboxInput</code> +{' '}
                <code className="rounded bg-muted px-1">ComboboxContent</code>
              </li>
              <li>
                Always include{' '}
                <code className="rounded bg-muted px-1">ComboboxList</code>{' '}
                inside content
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">ComboboxEmpty</code> for
                no-results state
              </li>
              <li>
                Add{' '}
                <code className="rounded bg-muted px-1">showClear</code> to show
                clear button
              </li>
              <li>
                Width is controlled on{' '}
                <code className="rounded bg-muted px-1">ComboboxInput</code>
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">
                  @base-ui/react/combobox
                </code>{' '}
                primitive
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Required Sub-components</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">Combobox</code> - Required (root)
              </li>
              <li>
                <code className="rounded bg-muted px-1">ComboboxInput</code> - Required
              </li>
              <li>
                <code className="rounded bg-muted px-1">ComboboxContent</code> - Required
              </li>
              <li>
                <code className="rounded bg-muted px-1">ComboboxList</code> - Required
              </li>
              <li>
                <code className="rounded bg-muted px-1">ComboboxItem</code> - Required (at least one)
              </li>
              <li>
                <code className="rounded bg-muted px-1">ComboboxEmpty</code> - Recommended
              </li>
              <li>
                <code className="rounded bg-muted px-1">ComboboxGroup</code>,{' '}
                <code className="rounded bg-muted px-1">ComboboxLabel</code>,{' '}
                <code className="rounded bg-muted px-1">ComboboxSeparator</code> - Optional
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              Combobox vs Select
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Combobox:</strong> Searchable, better for large lists
                (10+)
              </li>
              <li>
                <strong>Select:</strong> Fixed options, better for small lists
                (under 10)
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
