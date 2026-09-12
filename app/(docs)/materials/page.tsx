import type { Metadata } from "next"

import { DocsPage, DocsSection } from "@/components/docs/preview"
import { radii, spacing } from "@/lib/tokens"

export const metadata: Metadata = {
  title: "Materials",
}

export default function MaterialsPage() {
  return (
    <DocsPage
      title="Materials"
      description="Radius, spacing, and elevation are named presets. Map every corner and gap to one of these — never a one-off."
    >
      <DocsSection title="Radius">
        <div className="grid gap-3 sm:grid-cols-3">
          {radii.map((item) => (
            <div key={item.name} className="flex flex-col gap-3 rounded-xl border bg-card p-4">
              <div
                className="size-16 bg-primary/15 ring-1 ring-primary/30"
                style={{ borderRadius: item.px }}
              />
              <div>
                <p className="text-sm font-medium">
                  {item.name}
                  <span className="ml-2 font-mono text-[12px] text-muted-foreground">
                    {item.px}px
                  </span>
                </p>
                <p className="mt-1 text-[13px] text-muted-foreground">{item.use}</p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Spacing">
        <div className="flex flex-col overflow-hidden rounded-xl border">
          {spacing.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 border-b px-4 py-3 last:border-b-0"
            >
              <span className="w-10 font-mono text-[12px] text-muted-foreground">
                {item.name}
              </span>
              <div className="h-2 bg-primary" style={{ width: item.px }} />
              <span className="ml-auto font-mono text-[12px] text-muted-foreground">
                {item.px}px
              </span>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Elevation">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-card p-6 shadow-panel ring-1 ring-foreground/10">
            <p className="text-sm font-medium">Panel</p>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Resting floating chrome. 1px / 6px / 18%.
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-panel-raised ring-1 ring-foreground/10">
            <p className="text-sm font-medium">Panel raised</p>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Dragging or preview cards. 2px / 10px / 45%.
            </p>
          </div>
        </div>
      </DocsSection>
    </DocsPage>
  )
}
