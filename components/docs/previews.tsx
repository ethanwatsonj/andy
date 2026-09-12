"use client"

import type { ReactNode } from "react"
import { toast } from "sonner"
import { SearchIcon } from "lucide-react"

import type { ComponentSlug } from "@/lib/component-docs"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const previews = {
  button: (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button>
        <SearchIcon data-icon="inline-start" />
        Search
      </Button>
    </div>
  ),
  input: (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input placeholder="Email address" />
      <Input placeholder="Disabled" disabled />
      <Textarea placeholder="A short note" />
    </div>
  ),
  field: (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="docs-email">Email</FieldLabel>
          <Input id="docs-email" type="email" placeholder="you@studio.dev" />
          <FieldDescription>Used for account recovery only.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="docs-note">Note</FieldLabel>
          <Textarea id="docs-note" placeholder="Optional context" />
        </Field>
      </FieldGroup>
    </form>
  ),
  checkbox: (
    <Field orientation="horizontal">
      <Checkbox id="docs-checkbox" defaultChecked />
      <FieldLabel htmlFor="docs-checkbox">Send me a weekly digest</FieldLabel>
    </Field>
  ),
  switch: (
    <Field orientation="horizontal">
      <Switch id="docs-switch" defaultChecked />
      <FieldLabel htmlFor="docs-switch">Auto-tag new captures</FieldLabel>
    </Field>
  ),
  toggle: (
    <div className="flex gap-2">
      <Toggle defaultPressed>Quiet</Toggle>
      <Toggle variant="outline">Dense</Toggle>
    </div>
  ),
  badge: (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  card: (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Capture library</CardTitle>
        <CardDescription>Content surfaces stay quiet. Primary is punctuation.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Neutral fills, generous space, one action that matters.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Open library</Button>
        <Button variant="ghost">Dismiss</Button>
      </CardFooter>
    </Card>
  ),
  tabs: (
    <Tabs defaultValue="tokens">
      <TabsList>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
        <TabsTrigger value="components">Components</TabsTrigger>
        <TabsTrigger value="install">Install</TabsTrigger>
      </TabsList>
      <TabsContent value="tokens">Palette, type, materials.</TabsContent>
      <TabsContent value="components">Headless primitives, themed once.</TabsContent>
      <TabsContent value="install">Add the registry, then copy source.</TabsContent>
    </Tabs>
  ),
  dialog: (
    <Dialog>
      <DialogTrigger render={<Button />}>Open dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ship this capture?</DialogTitle>
          <DialogDescription>
            Suggest, then confirm. Nothing moves until you say so.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Ship it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Group by
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Project</DropdownMenuItem>
          <DropdownMenuItem>Flow</DropdownMenuItem>
          <DropdownMenuItem>Date</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Clear grouping</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  tooltip: (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
      <TooltipContent>Short, and only when needed.</TooltipContent>
    </Tooltip>
  ),
  kbd: (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
  skeleton: (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="h-4 w-2/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  ),
  toast: (
    <Button
      variant="outline"
      onClick={() => toast("Capture saved", { description: "Copied to clipboard." })}
    >
      Show toast
    </Button>
  ),
} as const satisfies Record<ComponentSlug, ReactNode>
