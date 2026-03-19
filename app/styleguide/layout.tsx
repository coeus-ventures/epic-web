'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { notFound } from 'next/navigation'
import { styleguideNavigation } from './navigation'
import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="gap-2"
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
      <span className="text-xs">Toggle theme</span>
    </Button>
  )
}

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (process.env.NODE_ENV !== 'development') {
    notFound()
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-border p-4">
            <h1 className="text-lg font-semibold text-foreground">
              Styleguide
            </h1>
            <p className="text-xs text-muted-foreground">Design Tokens & Components</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4">
              {styleguideNavigation.map((section) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    className={cn(
                      'block text-sm font-medium text-foreground hover:text-primary',
                      pathname === section.href && 'text-primary'
                    )}
                  >
                    {section.title}
                  </Link>
                  {section.items && (
                    <ul className="mt-2 space-y-1 border-l border-border pl-4">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with Theme Toggle */}
          <div className="border-t border-border p-4">
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 bg-background">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
