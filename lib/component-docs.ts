export const componentDocs = {
  button: {
    title: "Button",
    description:
      "The only place primary blue should feel loud. Secondary is a soft fill with a border.",
    usage: `import { Button } from "@/components/ui/button"

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`,
  },
  input: {
    title: "Input",
    description: "Compact 32px fields. Same radius as buttons. Focus uses the blue 500 ring.",
    usage: `import { Input } from "@/components/ui/input"

<Input placeholder="Email address" />`,
  },
  field: {
    title: "Field",
    description:
      "Forms are FieldGroup + Field, never ad-hoc stacks. Labels sit above, descriptions below.",
    usage: `import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" />
  </Field>
</FieldGroup>`,
  },
  checkbox: {
    title: "Checkbox",
    description: "Checked state is primary fill. Pair with Field for label hit area.",
    usage: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox id="digest" />`,
  },
  switch: {
    title: "Switch",
    description: "Binary preference. Default on only when the product can stand behind it.",
    usage: `import { Switch } from "@/components/ui/switch"

<Switch />`,
  },
  toggle: {
    title: "Toggle",
    description: "Pressed state is muted, not primary. Color is punctuation.",
    usage: `import { Toggle } from "@/components/ui/toggle"

<Toggle>Quiet</Toggle>`,
  },
  badge: {
    title: "Badge",
    description: "Status and metadata. Keep them short. Prefer outline or secondary.",
    usage: `import { Badge } from "@/components/ui/badge"

<Badge variant="secondary">Beta</Badge>`,
  },
  card: {
    title: "Card",
    description:
      "Content surfaces lean Notion: quiet fill, full composition, primary only on the main action.",
    usage: `import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter>
    <Button>Continue</Button>
  </CardFooter>
</Card>`,
  },
  tabs: {
    title: "Tabs",
    description: "Triggers always live in TabsList. Use for peer views, not hierarchy.",
    usage: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="one">
  <TabsList>
    <TabsTrigger value="one">One</TabsTrigger>
  </TabsList>
  <TabsContent value="one">…</TabsContent>
</Tabs>`,
  },
  dialog: {
    title: "Dialog",
    description:
      "Always a title. Primary action on the right. Overlay is light — the content should still feel close.",
    usage: `import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger render={<Button />}>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Context</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  },
  "dropdown-menu": {
    title: "Dropdown Menu",
    description:
      "Soft menus: 12px radius, double shadow, 100ms hover. Items stay in a Group.",
    usage: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger render={<Button />}>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>Item</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  tooltip: {
    title: "Tooltip",
    description: "Icon-only chrome and overflow labels. Never duplicate visible text.",
    usage: `import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger render={<Button />}>Hover</TooltipTrigger>
  <TooltipContent>Label</TooltipContent>
</Tooltip>`,
  },
  kbd: {
    title: "Kbd",
    description: "Keyboard is a first-class surface. Document shortcuts in the UI that uses them.",
    usage: `import { Kbd, KbdGroup } from "@/components/ui/kbd"

<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`,
  },
  skeleton: {
    title: "Skeleton",
    description: "Loading placeholders follow content shape. No custom pulse divs.",
    usage: `import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-24" />`,
  },
  toast: {
    title: "Toast",
    description:
      "Quiet confirmation. Toast in 200ms ease-out. Prefer a verb that already happened.",
    usage: `import { toast } from "sonner"

toast("Capture saved", { description: "Copied to clipboard." })`,
  },
} as const

export type ComponentSlug = keyof typeof componentDocs

export const componentSlugs = Object.keys(componentDocs) as ComponentSlug[]
