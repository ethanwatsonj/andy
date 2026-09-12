export type NavItem = {
  href: string
  title: string
  slug?: string
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export const componentNav: NavItem[] = [
  { href: "/components/button", title: "Button", slug: "button" },
  { href: "/components/input", title: "Input", slug: "input" },
  { href: "/components/field", title: "Field", slug: "field" },
  { href: "/components/checkbox", title: "Checkbox", slug: "checkbox" },
  { href: "/components/switch", title: "Switch", slug: "switch" },
  { href: "/components/toggle", title: "Toggle", slug: "toggle" },
  { href: "/components/badge", title: "Badge", slug: "badge" },
  { href: "/components/card", title: "Card", slug: "card" },
  { href: "/components/tabs", title: "Tabs", slug: "tabs" },
  { href: "/components/dialog", title: "Dialog", slug: "dialog" },
  { href: "/components/dropdown-menu", title: "Dropdown Menu", slug: "dropdown-menu" },
  { href: "/components/tooltip", title: "Tooltip", slug: "tooltip" },
  { href: "/components/kbd", title: "Kbd", slug: "kbd" },
  { href: "/components/skeleton", title: "Skeleton", slug: "skeleton" },
  { href: "/components/toast", title: "Toast", slug: "toast" },
]

export const navigation: NavGroup[] = [
  {
    title: "Get started",
    items: [
      { href: "/", title: "Introduction" },
      { href: "/install", title: "Install" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { href: "/principles", title: "Principles" },
      { href: "/colors", title: "Colors" },
      { href: "/typography", title: "Typography" },
      { href: "/materials", title: "Materials" },
      { href: "/motion", title: "Motion" },
    ],
  },
  {
    title: "Components",
    items: [{ href: "/components", title: "Overview" }, ...componentNav],
  },
]
