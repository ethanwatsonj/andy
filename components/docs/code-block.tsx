"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CodeBlock({
  code,
  className,
}: {
  code: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  async function onCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className={cn("group relative", className)}>
      <pre className="overflow-x-auto rounded-xl bg-ds-neutral-1000 p-4 font-mono text-[13px] leading-relaxed text-ds-neutral-200">
        <code>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon-xs"
        className="absolute top-2 right-2 text-ds-neutral-400 hover:bg-white/10 hover:text-ds-neutral-100"
        onClick={onCopy}
        aria-label="Copy code"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
