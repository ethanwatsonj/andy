"use client"

import { previews } from "@/components/docs/previews"
import { Preview } from "@/components/docs/preview"
import type { ComponentSlug } from "@/lib/component-docs"

export function ComponentPreview({ slug }: { slug: ComponentSlug }) {
  return <Preview>{previews[slug]}</Preview>
}
