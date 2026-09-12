import type { Metadata } from "next"

import { ComponentGallery } from "@/components/docs/component-gallery"
import { DocsPage } from "@/components/docs/preview"

export const metadata: Metadata = {
  title: "Components",
}

export default function ComponentsPage() {
  return (
    <DocsPage
      title="Components"
      description="Headless Base UI, Andy tokens. Copy them into other projects through the registry."
    >
      <ComponentGallery />
    </DocsPage>
  )
}
