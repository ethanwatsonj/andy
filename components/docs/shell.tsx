"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon } from "lucide-react"

import { ThemeToggle } from "@/components/docs/theme-toggle"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { navigation } from "@/lib/nav"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-6 px-3 py-4">
      {navigation.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <div className="px-2 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
            {group.title}
          </div>
          <div className="flex flex-col">
            {group.items.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-[13px] transition-colors duration-100",
                    active
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="min-h-svh lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-svh flex-col border-r bg-sidebar lg:flex">
        <Link href="/" className="flex h-14 items-center px-5">
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </Link>
        <ScrollArea className="min-h-0 flex-1">
          <NavList />
        </ScrollArea>
        <div className="border-t p-2">
          <ThemeToggle />
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm lg:hidden">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            {site.name}
          </Link>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </header>

        {open ? (
          <div className="fixed inset-0 z-30 bg-background lg:hidden">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <span className="text-sm font-semibold">{site.name}</span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <XIcon />
              </Button>
            </div>
            <ScrollArea className="h-[calc(100svh-3.5rem)]">
              <NavList onNavigate={() => setOpen(false)} />
              <div className="border-t p-2">
                <ThemeToggle />
              </div>
            </ScrollArea>
          </div>
        ) : null}

        <main className="px-6 py-10 lg:px-12 lg:py-14">{children}</main>
      </div>
    </div>
  )
}
