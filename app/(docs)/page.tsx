import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Introduction",
}

export default function IntroductionPage() {
  return (
    <article className="flex w-full max-w-3xl flex-col gap-16">
      <header className="flex flex-col gap-5">
        <p className="text-[13px] font-medium text-muted-foreground">Design system</p>
        <h1 className="text-4xl font-semibold tracking-tight">{site.name}</h1>
        <p className="max-w-xl text-[15px] leading-7 text-muted-foreground">
          Headless React primitives, Geist type, and Linear-level restraint.
          Tokens come from Grabbit. Components ship as source through a shadcn
          registry, so every other project can copy them in.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button render={<Link href="/install" />} nativeButton={false}>
            Install
          </Button>
          <Button
            variant="outline"
            render={<Link href="/principles" />}
            nativeButton={false}
          >
            Principles
          </Button>
        </div>
      </header>

      <section className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
        {[
          {
            title: "Host it",
            body: "This Next.js app is the canonical site. Deploy to Vercel. Docs, tokens, and /r/*.json all go with it.",
          },
          {
            title: "Copy it",
            body: "Other projects add @andy and pull components as source. Same model as shadcn — owned, not locked.",
          },
          {
            title: "Keep it quiet",
            body: "Neutral does the work. Primary blue is punctuation. Three radii. A 4pt grid. Motion stays short.",
          },
        ].map((item) => (
          <div key={item.title} className="flex flex-col gap-2 bg-card p-5">
            <h2 className="text-sm font-semibold">{item.title}</h2>
            <p className="text-[13px] leading-6 text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Start here</h2>
        <ul className="flex flex-col text-sm">
          {[
            ["Principles", "/principles", "Craft rules before components."],
            ["Colors", "/colors", "Ten scales, ten jobs per step."],
            ["Typography", "/typography", "Geist Sans and Geist Mono."],
            ["Button", "/components/button", "The first primitive."],
          ].map(([title, href, note]) => (
            <li key={href} className="border-b last:border-b-0">
              <Link
                href={href}
                className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-primary"
              >
                <span className="font-medium">{title}</span>
                <span className="text-[13px] text-muted-foreground">{note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
