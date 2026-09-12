import type { Metadata } from "next"

import { DocsPage, DocsSection } from "@/components/docs/preview"
import { typeScale } from "@/lib/tokens"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Typography",
}

export default function TypographyPage() {
  return (
    <DocsPage
      title="Typography"
      description="Geist Sans for interface. Geist Mono for tokens, shortcuts, and code. Compact 14px controls, restrained content type."
    >
      <DocsSection title="Families">
        <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
          <div className="bg-card p-5">
            <p className="text-[13px] text-muted-foreground">Sans</p>
            <p className="mt-2 text-2xl font-medium tracking-tight">Geist</p>
            <p className="mt-1 text-sm text-muted-foreground">Regular, Medium, Semibold, Bold</p>
          </div>
          <div className="bg-card p-5">
            <p className="text-[13px] text-muted-foreground">Mono</p>
            <p className="mt-2 font-mono text-2xl font-medium tracking-tight">Geist Mono</p>
            <p className="mt-1 text-sm text-muted-foreground">Regular, Medium</p>
          </div>
        </div>
      </DocsSection>

      <DocsSection title="Scale">
        <div className="overflow-hidden rounded-xl border">
          {typeScale.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between gap-4 border-b px-4 py-3 last:border-b-0"
            >
              <span className={cn(item.className, "text-foreground")}>{item.name}</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {item.size} / {item.weight}
              </span>
            </div>
          ))}
        </div>
      </DocsSection>
    </DocsPage>
  )
}
