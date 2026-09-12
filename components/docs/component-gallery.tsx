"use client"

import Link from "next/link"

import { previews } from "@/components/docs/previews"
import { Preview } from "@/components/docs/preview"
import { componentDocs } from "@/lib/component-docs"
import { componentNav } from "@/lib/nav"

export function ComponentGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {componentNav.map((item) => {
        const slug = item.slug as keyof typeof previews
        const doc = componentDocs[slug]
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col overflow-hidden rounded-xl border transition-colors hover:bg-muted/40"
          >
            <Preview className="pointer-events-none min-h-32 rounded-none border-0 border-b bg-card">
              {previews[slug]}
            </Preview>
            <div className="flex flex-col gap-1 p-3">
              <span className="text-sm font-medium">{doc.title}</span>
              <span className="line-clamp-2 text-[13px] text-muted-foreground">
                {doc.description}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
