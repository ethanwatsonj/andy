"use client"

import * as React from "react"

import { palettes, tints, tintRoles } from "@/lib/tokens"

function contrastClass(hex: string) {
  const value = hex.replace("#", "")
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.65 ? "text-ds-neutral-1000" : "text-white"
}

export function ColorScales() {
  const [copied, setCopied] = React.useState<string | null>(null)

  async function copy(value: string) {
    await navigator.clipboard.writeText(value)
    setCopied(value)
    window.setTimeout(() => setCopied(null), 1200)
  }

  return (
    <div className="flex flex-col gap-8">
      {palettes.map((palette) => (
        <div key={palette.id} className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold">{palette.name}</h2>
              <p className="text-[13px] text-muted-foreground">{palette.note}</p>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              {copied?.startsWith(palette.id) ? "Copied" : `ds-${palette.id}-*`}
            </span>
          </div>
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border sm:grid-cols-5 lg:grid-cols-10">
            {tints.map((tint) => {
              const hex = palette.swatches[tint]
              return (
                <button
                  key={tint}
                  type="button"
                  onClick={() => copy(hex)}
                  className={`flex aspect-square flex-col items-start justify-between p-2 text-left transition-opacity hover:opacity-90 ${contrastClass(hex)}`}
                  style={{ backgroundColor: hex }}
                  aria-label={`Copy ${palette.name} ${tint} ${hex}`}
                >
                  <span className="text-[11px] font-medium">{tint}</span>
                  <span className="font-mono text-[10px] opacity-80">{hex}</span>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export function TintLegend() {
  return (
    <div className="overflow-hidden rounded-xl border">
      {(Object.entries(tintRoles) as [string, string][]).map(([tint, role]) => (
        <div
          key={tint}
          className="flex items-center justify-between gap-4 border-b px-3 py-2 last:border-b-0"
        >
          <span className="font-mono text-[13px] text-muted-foreground">{tint}</span>
          <span className="text-[13px]">{role}</span>
        </div>
      ))}
    </div>
  )
}
