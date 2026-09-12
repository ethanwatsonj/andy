"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start gap-2 px-2 text-muted-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="hidden size-3.5 dark:block" />
      <MoonIcon className="size-3.5 dark:hidden" />
      Theme
      <Kbd className="ml-auto">D</Kbd>
    </Button>
  )
}
