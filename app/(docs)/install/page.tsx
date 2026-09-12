import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { DocsPage, DocsSection } from "@/components/docs/preview"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Install",
}

export default function InstallPage() {
  return (
    <DocsPage
      title="Install"
      description="Andy is a shadcn registry. Point your other projects at this site, then add components as source."
    >
      <DocsSection title="1. Add the registry">
        <CodeBlock
          code={`npx shadcn@latest registry add @${site.registryName}=${site.registryUrl}`}
        />
        <p className="text-[13px] leading-6 text-muted-foreground">
          Or add it by hand in <code className="font-mono text-foreground">components.json</code>:
        </p>
        <CodeBlock
          code={`{
  "registries": {
    "@${site.registryName}": "${site.registryUrl}"
  }
}`}
        />
      </DocsSection>

      <DocsSection title="2. Install the theme, then primitives">
        <CodeBlock
          code={`npx shadcn@latest add @${site.registryName}/theme
npx shadcn@latest add @${site.registryName}/button`}
        />
        <p className="text-[13px] leading-6 text-muted-foreground">
          Theme injects the Grabbit token set (10-tint palettes, semantic light/dark,
          three radii). Components are Base UI + Tailwind — headless structure, Andy
          visuals.
        </p>
      </DocsSection>

      <DocsSection title="3. Local registry while developing this site">
        <CodeBlock
          code={`npm run registry:build
# serves at http://localhost:3000/r/{name}.json`}
        />
        <p className="text-[13px] leading-6 text-muted-foreground">
          On Vercel, <code className="font-mono text-foreground">next build</code> runs
          the registry build first so <code className="font-mono text-foreground">/r</code> is
          static. Set{" "}
          <code className="font-mono text-foreground">NEXT_PUBLIC_REGISTRY_URL</code> to
          your production URL template if it is not {site.registryUrl}.
        </p>
      </DocsSection>
    </DocsPage>
  )
}
