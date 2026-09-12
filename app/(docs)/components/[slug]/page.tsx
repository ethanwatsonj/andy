import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { DocsPage, DocsSection } from "@/components/docs/preview"
import {
  componentDocs,
  componentSlugs,
  type ComponentSlug,
} from "@/lib/component-docs"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return componentSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = componentDocs[slug as ComponentSlug]
  if (!doc) return {}
  return { title: doc.title, description: doc.description }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = componentDocs[slug as ComponentSlug]
  if (!doc) notFound()

  return (
    <DocsPage title={doc.title} description={doc.description}>
      <DocsSection title="Preview">
        <ComponentPreview slug={slug as ComponentSlug} />
      </DocsSection>
      <DocsSection title="Install">
        <CodeBlock code={`npx shadcn@latest add @${site.registryName}/${slug}`} />
      </DocsSection>
      <DocsSection title="Usage">
        <CodeBlock code={doc.usage} />
      </DocsSection>
    </DocsPage>
  )
}
