import type { Metadata } from "next"

import { DocsPage, DocsSection } from "@/components/docs/preview"
import { motion } from "@/lib/tokens"

export const metadata: Metadata = {
  title: "Motion",
}

export default function MotionPage() {
  return (
    <DocsPage
      title="Motion"
      description="Short ease-out hovers. Panels ease in and out. Springs are reserved for moments that should feel alive."
    >
      <DocsSection>
        <div className="overflow-hidden rounded-xl border">
          <div className="grid grid-cols-[1fr_7rem_8rem_1fr] gap-2 border-b bg-muted/50 px-4 py-2 font-mono text-[11px] text-muted-foreground">
            <span>Name</span>
            <span>Duration</span>
            <span>Easing</span>
            <span>Use</span>
          </div>
          {motion.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[1fr_7rem_8rem_1fr] gap-2 border-b px-4 py-3 text-[13px] last:border-b-0"
            >
              <span className="font-medium">{item.name}</span>
              <span className="font-mono text-muted-foreground">{item.duration}</span>
              <span className="font-mono text-muted-foreground">{item.easing}</span>
              <span className="text-muted-foreground">{item.use}</span>
            </div>
          ))}
        </div>
      </DocsSection>
    </DocsPage>
  )
}
