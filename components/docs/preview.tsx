import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Preview({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex min-h-40 items-center justify-center rounded-xl border bg-card p-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export function DocsPage({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <article className="flex w-full max-w-3xl flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      </header>
      {children}
    </article>
  )
}

export function DocsSection({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      {title ? (
        <h2 className="text-[13px] font-medium text-muted-foreground">{title}</h2>
      ) : null}
      {children}
    </section>
  )
}
