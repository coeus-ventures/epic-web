export type NavItem = {
  title: string
  href: string
  items?: NavItem[]
}

export const styleguideNavigation: NavItem[] = [
  {
    title: 'Foundation',
    href: '/styleguide',
    items: [
      { title: 'Colors', href: '/styleguide#colors' },
      { title: 'Typography', href: '/styleguide#typography' },
      { title: 'Spacing & Radius', href: '/styleguide#spacing-radius' },
      { title: 'Shadows', href: '/styleguide#shadows' },
    ],
  },
  {
    title: 'Inputs & Forms',
    href: '/styleguide/components/button',
    items: [
      { title: 'Button', href: '/styleguide/components/button' },
      { title: 'Button Group', href: '/styleguide/components/button-group' },
      { title: 'Checkbox', href: '/styleguide/components/checkbox' },
      { title: 'Combobox', href: '/styleguide/components/combobox' },
      { title: 'Field', href: '/styleguide/components/field' },
      { title: 'Input', href: '/styleguide/components/input' },
      { title: 'Input Group', href: '/styleguide/components/input-group' },
      { title: 'Input OTP', href: '/styleguide/components/input-otp' },
      { title: 'Label', href: '/styleguide/components/label' },
      { title: 'Native Select', href: '/styleguide/components/native-select' },
      { title: 'Radio Group', href: '/styleguide/components/radio-group' },
      { title: 'Select', href: '/styleguide/components/select' },
      { title: 'Slider', href: '/styleguide/components/slider' },
      { title: 'Switch', href: '/styleguide/components/switch' },
      { title: 'Textarea', href: '/styleguide/components/textarea' },
      { title: 'Toggle', href: '/styleguide/components/toggle' },
      { title: 'Toggle Group', href: '/styleguide/components/toggle-group' },
    ],
  },
  {
    title: 'Data Display',
    href: '/styleguide/components/avatar',
    items: [
      { title: 'Avatar', href: '/styleguide/components/avatar' },
      { title: 'Badge', href: '/styleguide/components/badge' },
      { title: 'Calendar', href: '/styleguide/components/calendar' },
      { title: 'Card', href: '/styleguide/components/card' },
      { title: 'Carousel', href: '/styleguide/components/carousel' },
      { title: 'Chart', href: '/styleguide/components/chart' },
      { title: 'Empty', href: '/styleguide/components/empty' },
      { title: 'Item', href: '/styleguide/components/item' },
      { title: 'Kbd', href: '/styleguide/components/kbd' },
      { title: 'Separator', href: '/styleguide/components/separator' },
      { title: 'Skeleton', href: '/styleguide/components/skeleton' },
      { title: 'Spinner', href: '/styleguide/components/spinner' },
      { title: 'Table', href: '/styleguide/components/table' },
    ],
  },
  {
    title: 'Feedback',
    href: '/styleguide/components/alert',
    items: [
      { title: 'Alert', href: '/styleguide/components/alert' },
      { title: 'Alert Dialog', href: '/styleguide/components/alert-dialog' },
      { title: 'Progress', href: '/styleguide/components/progress' },
      { title: 'Sonner', href: '/styleguide/components/sonner' },
      { title: 'Tooltip', href: '/styleguide/components/tooltip' },
    ],
  },
  {
    title: 'Layout',
    href: '/styleguide/components/aspect-ratio',
    items: [
      { title: 'Aspect Ratio', href: '/styleguide/components/aspect-ratio' },
      { title: 'Collapsible', href: '/styleguide/components/collapsible' },
      { title: 'Direction', href: '/styleguide/components/direction' },
      { title: 'Resizable', href: '/styleguide/components/resizable' },
      { title: 'Scroll Area', href: '/styleguide/components/scroll-area' },
    ],
  },
  {
    title: 'Navigation',
    href: '/styleguide/components/accordion',
    items: [
      { title: 'Accordion', href: '/styleguide/components/accordion' },
      { title: 'Breadcrumb', href: '/styleguide/components/breadcrumb' },
      { title: 'Command', href: '/styleguide/components/command' },
      { title: 'Context Menu', href: '/styleguide/components/context-menu' },
      { title: 'Dropdown Menu', href: '/styleguide/components/dropdown-menu' },
      { title: 'Menubar', href: '/styleguide/components/menubar' },
      { title: 'Navigation Menu', href: '/styleguide/components/navigation-menu' },
      { title: 'Pagination', href: '/styleguide/components/pagination' },
      { title: 'Sidebar', href: '/styleguide/components/sidebar' },
      { title: 'Tabs', href: '/styleguide/components/tabs' },
    ],
  },
  {
    title: 'Overlays',
    href: '/styleguide/components/dialog',
    items: [
      { title: 'Dialog', href: '/styleguide/components/dialog' },
      { title: 'Drawer', href: '/styleguide/components/drawer' },
      { title: 'Hover Card', href: '/styleguide/components/hover-card' },
      { title: 'Popover', href: '/styleguide/components/popover' },
      { title: 'Sheet', href: '/styleguide/components/sheet' },
    ],
  },
]
