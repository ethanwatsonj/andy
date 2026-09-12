import type { Metadata } from "next"

import { ColorScales, TintLegend } from "@/components/docs/color-scale"
import { DocsPage, DocsSection } from "@/components/docs/preview"
import { gradients } from "@/lib/tokens"

export const metadata: Metadata = {
  title: "Colors",
}

export default function ColorsPage() {
  return (
    <DocsPage
      title="Colors"
      description="Ten scales, ten steps. Pick a step by job, not by eye. Neutral replaces gray. Primary interactive is blue 700."
    >
      <DocsSection title="Step jobs">
        <TintLegend />
      </DocsSection>
      <DocsSection title="Scales">
        <p className="text-[13px] text-muted-foreground">
          Click a swatch to copy its hex. CSS variables are{" "}
          <code className="font-mono text-foreground">--ds-{"{scale}"}-{"{step}"}</code>.
        </p>
        <ColorScales />
      </DocsSection>
      <DocsSection title="Recording gradients">
        <div className="grid gap-3 sm:grid-cols-3">
          {gradients.map((gradient) => (
            <div key={gradient.name} className="flex flex-col gap-2">
              <div
                className="h-20 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                }}
              />
              <div className="flex items-baseline justify-between text-[13px]">
                <span className="font-medium">{gradient.name}</span>
                <span className="font-mono text-muted-foreground">
                  {gradient.from} → {gradient.to}
                </span>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>
    </DocsPage>
  )
}
