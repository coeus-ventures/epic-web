import { Plus, Settings, HelpCircle, Copy } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export default function TooltipPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Tooltip
        </h1>
        <p className="mt-2 text-muted-foreground">
          A popup that displays information related to an element when it
          receives focus or hover.
        </p>
      </header>

      {/* What it is */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          What it is
        </h2>
        <p className="text-muted-foreground">
          The Tooltip component provides contextual information when users hover
          over or focus on an element. Use tooltips for icon-only buttons,
          truncated text, or any UI element that benefits from additional
          context. Tooltips should contain brief, helpful text.
        </p>
      </section>

      {/* Sub-components */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Sub-components
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-medium text-foreground">
                  Component
                </th>
                <th className="py-3 text-left font-medium text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">TooltipProvider</td>
                <td className="py-3">
                  Provider component (should wrap your app or tooltip groups)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">Tooltip</td>
                <td className="py-3">Root wrapper for individual tooltip</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">TooltipTrigger</td>
                <td className="py-3">Element that triggers the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">TooltipContent</td>
                <td className="py-3">The popup content with positioning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Import */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Import</h2>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
          {`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'`}
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Basic tooltip
            </h3>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="outline" size="icon">
                      <Plus className="size-4" />
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Add item</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<Tooltip>
  <TooltipTrigger
    render={
      <Button variant="outline" size="icon">
        <Plus className="size-4" />
      </Button>
    }
  />
  <TooltipContent>
    <p>Add item</p>
  </TooltipContent>
</Tooltip>`}
            </pre>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Different positions
            </h3>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                  Top
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                  Right
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                  Bottom
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip on bottom</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                  Left
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs">
              {`<TooltipContent side="top">...</TooltipContent>
<TooltipContent side="right">...</TooltipContent>
<TooltipContent side="bottom">...</TooltipContent>
<TooltipContent side="left">...</TooltipContent>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Props</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              TooltipProvider
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Prop
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Type
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Default
                    </th>
                    <th className="py-3 text-left font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="py-3 pr-4 font-mono text-sm">delay</td>
                    <td className="py-3 pr-4 font-mono text-sm">number</td>
                    <td className="py-3 pr-4 font-mono text-sm">0</td>
                    <td className="py-3">Delay in ms before tooltip appears</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              TooltipContent
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Prop
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Type
                    </th>
                    <th className="py-3 pr-4 text-left font-medium text-foreground">
                      Default
                    </th>
                    <th className="py-3 text-left font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">side</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; |
                      &quot;left&quot;
                    </td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;top&quot;
                    </td>
                    <td className="py-3">Position relative to trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">sideOffset</td>
                    <td className="py-3 pr-4 font-mono text-sm">number</td>
                    <td className="py-3 pr-4 font-mono text-sm">4</td>
                    <td className="py-3">Distance from trigger in pixels</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-mono text-sm">align</td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;start&quot; | &quot;center&quot; | &quot;end&quot;
                    </td>
                    <td className="py-3 pr-4 font-mono text-sm">
                      &quot;center&quot;
                    </td>
                    <td className="py-3">Alignment along the side</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-sm">alignOffset</td>
                    <td className="py-3 pr-4 font-mono text-sm">number</td>
                    <td className="py-3 pr-4 font-mono text-sm">0</td>
                    <td className="py-3">Offset from the aligned edge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Examples</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Icon button toolbar
            </h3>
            <div className="flex items-center gap-1 rounded-lg border border-border p-2">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="ghost" size="icon">
                      <Copy className="size-4" />
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="ghost" size="icon">
                      <Settings className="size-4" />
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="ghost" size="icon">
                      <HelpCircle className="size-4" />
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Help</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              With keyboard shortcut
            </h3>
            <Tooltip>
              <TooltipTrigger render={<Button />}>Save</TooltipTrigger>
              <TooltipContent>
                <p>
                  Save changes{' '}
                  <kbd className="ml-1 rounded bg-foreground/20 px-1.5 py-0.5 text-xs">
                    ⌘S
                  </kbd>
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Disabled button with tooltip
            </h3>
            <Tooltip>
              <TooltipTrigger
                render={
                  <span className="inline-block">
                    <Button disabled>Submit</Button>
                  </span>
                }
              />
              <TooltipContent>
                <p>Please fill in all required fields</p>
              </TooltipContent>
            </Tooltip>
            <p className="mt-2 text-xs text-muted-foreground">
              Wrap disabled buttons in a span to enable tooltip on disabled
              elements.
            </p>
          </div>
        </div>
      </section>

      {/* Notes for the AI */}
      <section className="rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Notes for the AI
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h3 className="font-medium text-foreground">Import statement</h3>
            <pre className="mt-1 rounded bg-muted p-2 font-mono text-xs">
              {`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Required structure</h3>
            <p>
              A{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                TooltipProvider
              </code>{' '}
              must wrap the tooltips (usually in root layout). Each tooltip
              needs:{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                Tooltip
              </code>{' '}
              →{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                TooltipTrigger
              </code>{' '}
              +{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                TooltipContent
              </code>
              .
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              TooltipProvider setup
            </h3>
            <p>
              The{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                TooltipProvider
              </code>{' '}
              should be added to your root layout or providers file. The default
              delay is 0ms in this project (instant tooltips).
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              Using render prop with triggers
            </h3>
            <p>
              Use the{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                render
              </code>{' '}
              prop on{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                TooltipTrigger
              </code>{' '}
              to render a custom component (like Button) instead of the default
              element. Example:{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                {'render={<Button />}'}
              </code>
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">
              Disabled elements workaround
            </h3>
            <p>
              Disabled elements don't fire events. Wrap disabled buttons in
              a{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                {'<span>'}
              </code>{' '}
              to show tooltips:{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                {'render={<span><Button disabled>...</Button></span>}'}
              </code>
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground">CSS variables</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>
                <code className="font-mono text-xs">--foreground</code> -
                Tooltip background color
              </li>
              <li>
                <code className="font-mono text-xs">--background</code> -
                Tooltip text color
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground">Common patterns</h3>
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 font-mono text-xs">
              {`// Icon button with tooltip
<Tooltip>
  <TooltipTrigger
    render={
      <Button variant="ghost" size="icon">
        <Settings className="size-4" />
      </Button>
    }
  />
  <TooltipContent>
    <p>Settings</p>
  </TooltipContent>
</Tooltip>

// With keyboard shortcut
<TooltipContent>
  <p>Save <kbd className="ml-1 ...">⌘S</kbd></p>
</TooltipContent>

// Custom position
<TooltipContent side="right" sideOffset={8}>
  <p>Tooltip text</p>
</TooltipContent>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
