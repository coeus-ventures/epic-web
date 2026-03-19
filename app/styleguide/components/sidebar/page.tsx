'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User,
  ChevronUp,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

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
      <div className="rounded-lg border border-border bg-card overflow-hidden">
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

const menuItems = [
  { title: 'Home', icon: Home, url: '#' },
  { title: 'Inbox', icon: Inbox, url: '#' },
  { title: 'Calendar', icon: Calendar, url: '#' },
  { title: 'Search', icon: Search, url: '#' },
  { title: 'Settings', icon: Settings, url: '#' },
]

export default function SidebarPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Sidebar
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A composable, collapsible sidebar component for app navigation.
        </p>
      </header>

      {/* What it is */}
      <Section id="overview" title="What it is">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            The Sidebar component provides a responsive sidebar navigation
            pattern with support for collapsing, mobile sheets, and
            keyboard shortcuts. It handles state management, responsive behavior,
            and accessibility automatically.
          </p>
          <p className="text-muted-foreground">
            <strong>Use when:</strong> You need persistent app navigation that
            can collapse to icons on desktop and becomes a sheet on mobile.
            Ideal for dashboards, admin panels, and complex applications.
          </p>
          <p className="text-muted-foreground">
            <strong>Key difference:</strong> Unlike Navigation Menu (top-level
            site nav with dropdowns), Sidebar is for persistent side navigation
            with hierarchical menus, collapsible groups, and state persistence.
          </p>
        </div>
      </Section>

      {/* Sub-components */}
      <Section id="sub-components" title="Sub-components">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SidebarProvider</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Context provider that manages sidebar state (open/collapsed).
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">Sidebar</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              The main sidebar container with side, variant, and collapsible
              options.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SidebarHeader</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Top section for branding, logo, or workspace selector.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SidebarContent</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Scrollable main content area for navigation groups.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SidebarFooter</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Bottom section for user menu, settings, or actions.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              SidebarGroup / SidebarGroupLabel / SidebarGroupContent
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Group navigation items with optional label header.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">
              SidebarMenu / SidebarMenuItem / SidebarMenuButton
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Menu list with navigable items. MenuButton supports render prop
              for custom links.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SidebarTrigger</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Toggle button to expand/collapse the sidebar.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">SidebarInset</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Main content wrapper that adjusts for sidebar width.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-medium text-foreground">useSidebar</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Hook to access sidebar state (open, collapsed, mobile, etc.).
            </p>
          </div>
        </div>
      </Section>

      {/* Import */}
      <Section id="import" title="Import">
        <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
          <code>{`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'`}</code>
        </pre>
      </Section>

      {/* Variants */}
      <Section id="variants" title="Variants">
        <div className="space-y-8">
          <ComponentPreview
            title="Basic Sidebar"
            code={`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2 className="px-2 font-semibold">App Name</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Inbox />
                <span>Inbox</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <header className="flex items-center gap-2 p-4">
      <SidebarTrigger />
      <h1>Page Content</h1>
    </header>
  </SidebarInset>
</SidebarProvider>`}
          >
            <div className="h-[400px] relative">
              <SidebarProvider defaultOpen={true}>
                <Sidebar collapsible="none" className="absolute inset-y-0 left-0 w-64 border-r">
                  <SidebarHeader className="border-b px-4 py-2">
                    <h2 className="font-semibold">App Name</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {menuItems.map((item) => (
                            <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton>
                                <item.icon />
                                <span>{item.title}</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter className="border-t px-4 py-2">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="size-4" />
                      <span>John Doe</span>
                    </div>
                  </SidebarFooter>
                </Sidebar>
                <main className="ml-64 p-4">
                  <h1 className="text-lg font-semibold">Page Content</h1>
                  <p className="mt-2 text-muted-foreground">
                    Your main content goes here.
                  </p>
                </main>
              </SidebarProvider>
            </div>
          </ComponentPreview>
        </div>
      </Section>

      {/* Props */}
      <Section id="props" title="Props">
        <div className="space-y-8">
          <div>
            <h4 className="mb-4 font-medium text-foreground">SidebarProvider</h4>
            <PropsTable
              props={[
                {
                  name: 'defaultOpen',
                  type: 'boolean',
                  default: 'true',
                  description: 'Initial open state.',
                },
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
            <h4 className="mb-4 font-medium text-foreground">Sidebar</h4>
            <PropsTable
              props={[
                {
                  name: 'side',
                  type: '"left" | "right"',
                  default: '"left"',
                  description: 'Which side the sidebar appears on.',
                },
                {
                  name: 'variant',
                  type: '"sidebar" | "floating" | "inset"',
                  default: '"sidebar"',
                  description: 'Visual variant of the sidebar.',
                },
                {
                  name: 'collapsible',
                  type: '"offcanvas" | "icon" | "none"',
                  default: '"offcanvas"',
                  description: 'How the sidebar collapses.',
                },
              ]}
            />
          </div>
          <div>
            <h4 className="mb-4 font-medium text-foreground">SidebarMenuButton</h4>
            <PropsTable
              props={[
                {
                  name: 'isActive',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether this item is the current page.',
                },
                {
                  name: 'tooltip',
                  type: 'string | TooltipContentProps',
                  description: 'Tooltip shown when collapsed to icon mode.',
                },
                {
                  name: 'variant',
                  type: '"default" | "outline"',
                  default: '"default"',
                  description: 'Visual variant.',
                },
                {
                  name: 'size',
                  type: '"default" | "sm" | "lg"',
                  default: '"default"',
                  description: 'Size variant.',
                },
                {
                  name: 'render',
                  type: 'React.ReactElement',
                  description: 'Custom element to render (e.g., Next.js Link).',
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
            title="With Footer User Menu"
            code={`<SidebarFooter>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <User />
            <span>Username</span>
            <ChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top">
          <DropdownMenuItem>Account</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarFooter>`}
          >
            <div className="h-[300px] relative">
              <SidebarProvider defaultOpen={true}>
                <Sidebar collapsible="none" className="absolute inset-y-0 left-0 w-64 border-r">
                  <SidebarHeader className="border-b px-4 py-2">
                    <h2 className="font-semibold">App Name</h2>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton isActive>
                              <Home />
                              <span>Home</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <Settings />
                              <span>Settings</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            className="w-full"
                            render={<SidebarMenuButton className="w-full" />}
                          >
                            <User />
                            <span>Username</span>
                            <ChevronUp className="ml-auto" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                            <DropdownMenuItem>Account</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarFooter>
                </Sidebar>
              </SidebarProvider>
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
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar'`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Basic Usage</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Logo</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Section</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icon />
                <span>Label</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>User menu</SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    {/* Page content */}
  </SidebarInset>
</SidebarProvider>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Key Points</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Required:</strong> SidebarProvider must wrap Sidebar and
                SidebarInset
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">SidebarInset</code>{' '}
                for main content area that adjusts to sidebar width
              </li>
              <li>
                <code className="rounded bg-muted px-1">SidebarTrigger</code>{' '}
                toggles sidebar; place in header
              </li>
              <li>
                Keyboard shortcut <code className="rounded bg-muted px-1">⌘B</code>{' '}
                toggles sidebar automatically
              </li>
              <li>
                On mobile, sidebar becomes a Sheet overlay
              </li>
              <li>
                Use <code className="rounded bg-muted px-1">isActive</code> prop
                on SidebarMenuButton for current page
              </li>
              <li>
                Use{' '}
                <code className="rounded bg-muted px-1">
                  render={'{<Link href="..." />}'}
                </code>{' '}
                for Next.js Link
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Collapsible Modes</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">offcanvas</code>:
                Sidebar slides off screen (default)
              </li>
              <li>
                <code className="rounded bg-muted px-1">icon</code>: Collapses
                to icon-only rail
              </li>
              <li>
                <code className="rounded bg-muted px-1">none</code>: Never
                collapses
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">useSidebar Hook</h4>
            <pre className="mt-2 rounded bg-muted p-2 text-xs">
              <code>{`const {
  state,       // 'expanded' | 'collapsed'
  open,        // boolean
  setOpen,     // (open: boolean) => void
  openMobile,  // boolean
  setOpenMobile,
  isMobile,    // boolean
  toggleSidebar,
} = useSidebar()`}</code>
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-foreground">
              CSS Variables / Customization
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1">--sidebar-width</code>:
                16rem (256px) default
              </li>
              <li>
                <code className="rounded bg-muted px-1">
                  --sidebar-width-icon
                </code>
                : 3rem (48px) collapsed
              </li>
              <li>
                Uses{' '}
                <code className="rounded bg-muted px-1">bg-sidebar</code> and{' '}
                <code className="rounded bg-muted px-1">
                  text-sidebar-foreground
                </code>
              </li>
              <li>
                Active items use{' '}
                <code className="rounded bg-muted px-1">
                  bg-sidebar-accent
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground">Accessibility</h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>⌘B / Ctrl+B:</strong> Toggle sidebar
              </li>
              <li>
                Mobile uses Sheet component with proper focus management
              </li>
              <li>
                SidebarTrigger has sr-only label &quot;Toggle Sidebar&quot;
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
