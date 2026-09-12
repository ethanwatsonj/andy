import type { Metadata } from "next"

import { DocsPage } from "@/components/docs/preview"

export const metadata: Metadata = {
  title: "Principles",
}

const principles = [
  {
    title: "Craft is the product",
    source: "Linear",
    body: "Quality is not a coat of paint at the end. Spacing, type, and states are the work. If it is not ready to ship at this standard, it is not ready.",
  },
  {
    title: "Decide before decorating",
    source: "Geist",
    body: "Resolve hierarchy, interaction, and empty states before choosing color. Working code that is the wrong pattern is still wrong.",
  },
  {
    title: "Restraint is a feature",
    source: "Geist",
    body: "Neutral does the work. Color is punctuation. Primary blue appears on the one action that matters, never as chrome.",
  },
  {
    title: "Dual chrome",
    source: "Grabbit",
    body: "Floating tools lean Figma: small radii, directional shadow, HUD density. Content surfaces lean Notion: flat fills, generous space, one primary.",
  },
  {
    title: "Calm density",
    source: "Linear",
    body: "Information can be dense. Chrome cannot. Recede navigation, shrink icons, soften separators. The task stays in focus.",
  },
  {
    title: "Suggest, never assume",
    source: "Grabbit",
    body: "Automation proposes. The user confirms. No silent moves, no surprise side effects, no optimistic organize.",
  },
  {
    title: "Three radii, 4pt grid",
    source: "Grabbit",
    body: "4, 8, and 12. xs through xxl on fours. If a value is not on the scale, it does not ship.",
  },
  {
    title: "Motion is short",
    source: "Linear / Grabbit",
    body: "Hovers are 100–120ms ease-out. Panels ease in and out. Springs are for delight, not for every row.",
  },
  {
    title: "Keyboard is first-class",
    source: "Linear",
    body: "If a mouse can do it, a key should too. Document shortcuts in the UI that uses them.",
  },
  {
    title: "Tokens over one-offs",
    source: "Andy",
    body: "If you need a new color, name a semantic. Do not reach into the palette from a screen. Headless structure, one theme.",
  },
]

export default function PrinciplesPage() {
  return (
    <DocsPage
      title="Principles"
      description="Linear’s craft bar, Geist’s restraint, Grabbit’s dual chrome. These are the rules the components exist to enforce."
    >
      <ol className="flex flex-col">
        {principles.map((item, index) => (
          <li key={item.title} className="flex flex-col gap-2 border-b py-6 first:pt-0 last:border-b-0">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-sm font-semibold">
                <span className="mr-2 font-mono text-[11px] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </h2>
              <span className="text-[11px] text-muted-foreground">{item.source}</span>
            </div>
            <p className="max-w-2xl pl-7 text-sm leading-7 text-muted-foreground">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </DocsPage>
  )
}
