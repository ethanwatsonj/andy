export const tints = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
] as const

export type Tint = (typeof tints)[number]

export const tintRoles: Record<Tint, string> = {
  100: "Default background",
  200: "Hover background",
  300: "Active / selected fill",
  400: "Default border",
  500: "Focus ring / hover border",
  600: "Solid / brand stop",
  700: "Pressed solid, primary accent",
  800: "Hover high-contrast fill",
  900: "Secondary text and icons",
  1000: "Primary text and icons",
}

export const palettes = [
  {
    id: "neutral",
    name: "Neutral",
    note: "Gray, renamed. The system lives here.",
    swatches: {
      100: "#FAFAFA",
      200: "#F5F5F5",
      300: "#EBEBEB",
      400: "#E0E0E0",
      500: "#A1A1A1",
      600: "#737373",
      700: "#525252",
      800: "#424242",
      900: "#2A2A2A",
      1000: "#171717",
    },
  },
  {
    id: "blue",
    name: "Blue",
    note: "Brand. Primary interactive is 700, not the solid 600.",
    swatches: {
      100: "#EEF3FF",
      200: "#D9E4FF",
      300: "#B8CCFF",
      400: "#8FABFF",
      500: "#6E95FF",
      600: "#5080FF",
      700: "#3B66E0",
      800: "#2C4FB5",
      900: "#1E3785",
      1000: "#122152",
    },
  },
  {
    id: "tomato",
    name: "Tomato",
    note: "Destructive and error.",
    swatches: {
      100: "#FFF1F0",
      200: "#FFD9D7",
      300: "#FFB3AF",
      400: "#FF8A84",
      500: "#FF655E",
      600: "#FF4A45",
      700: "#E02F2A",
      800: "#B52420",
      900: "#851A17",
      1000: "#54110F",
    },
  },
  {
    id: "tangerine",
    name: "Tangerine",
    note: "Warning and warm recording.",
    swatches: {
      100: "#FFF4EB",
      200: "#FFE4CC",
      300: "#FFC999",
      400: "#FFAF66",
      500: "#FF9A4D",
      600: "#FF8A38",
      700: "#E06E1F",
      800: "#B55616",
      900: "#853E10",
      1000: "#54280A",
    },
  },
  {
    id: "gold",
    name: "Gold",
    note: "Caution, highlights, annotation.",
    swatches: {
      100: "#FFF8E6",
      200: "#FFECB8",
      300: "#FFDC7A",
      400: "#FFCB3D",
      500: "#FABA14",
      600: "#F0A800",
      700: "#CC8F00",
      800: "#A37200",
      900: "#755200",
      1000: "#473200",
    },
  },
  {
    id: "sage",
    name: "Sage",
    note: "Success and confirmation.",
    swatches: {
      100: "#EAFBF2",
      200: "#C9F5DE",
      300: "#93E8BD",
      400: "#5CD99A",
      500: "#3DD188",
      600: "#2EC87A",
      700: "#24A664",
      800: "#1B824E",
      900: "#135C38",
      1000: "#0C3A23",
    },
  },
  {
    id: "peacock",
    name: "Peacock",
    note: "Info and cool recording.",
    swatches: {
      100: "#E6F9FC",
      200: "#B8F0F8",
      300: "#70E0EF",
      400: "#33CEED",
      500: "#12C2E0",
      600: "#00B4D4",
      700: "#0096B0",
      800: "#00778C",
      900: "#005566",
      1000: "#003540",
    },
  },
  {
    id: "grape",
    name: "Grape",
    note: "Secondary accent. Use rarely.",
    swatches: {
      100: "#F5F0FE",
      200: "#E6DAFC",
      300: "#CDB4F9",
      400: "#B48FF5",
      500: "#A878F2",
      600: "#9D66F0",
      700: "#824ED4",
      800: "#663AAE",
      900: "#4A2880",
      1000: "#2E1852",
    },
  },
  {
    id: "flamingo",
    name: "Flamingo",
    note: "Warm accent and annotation.",
    swatches: {
      100: "#FFF0F5",
      200: "#FFD6E4",
      300: "#FFADD0",
      400: "#FF7AB0",
      500: "#F8629A",
      600: "#F04E88",
      700: "#D1366E",
      800: "#A82856",
      900: "#7A1D3E",
      1000: "#4C1226",
    },
  },
] as const

export const typeScale = [
  { name: "Caption", size: 13, weight: "Regular", className: "text-[13px] font-normal" },
  { name: "Label", size: 14, weight: "Medium", className: "text-sm font-medium" },
  { name: "Body", size: 14, weight: "Medium", className: "text-sm font-medium" },
  { name: "Body emphasized", size: 14, weight: "Semibold", className: "text-sm font-semibold" },
  { name: "Title", size: 14, weight: "Semibold", className: "text-sm font-semibold" },
  { name: "Window title", size: 12, weight: "Semibold", className: "text-xs font-semibold" },
  { name: "Panel title", size: 18, weight: "Semibold", className: "text-lg font-semibold" },
] as const

export const spacing = [
  { name: "xs", px: 4 },
  { name: "sm", px: 8 },
  { name: "md", px: 12 },
  { name: "lg", px: 16 },
  { name: "xl", px: 24 },
  { name: "xxl", px: 32 },
] as const

export const radii = [
  { name: "sm", px: 4, use: "Chips, handles, swatches, checkboxes" },
  { name: "md", px: 8, use: "Buttons, inputs, hover states, soft controls" },
  { name: "lg", px: 12, use: "Floating panels, menus, cards, dialogs" },
] as const

export const motion = [
  { name: "Hover", duration: "100–120ms", easing: "ease-out", use: "Rows, chips, dropdown items" },
  { name: "Panel in", duration: "200ms", easing: "ease-out", use: "Toast, dialog, popover" },
  { name: "Panel out", duration: "250ms", easing: "ease-in", use: "Dismiss" },
  { name: "Spring", duration: "320–450ms", easing: "spring 0.78–0.82", use: "Playful moments only" },
] as const

export const gradients = [
  { name: "Warm", from: "#FFAF66", to: "#F04E88" },
  { name: "Cool", from: "#33CEED", to: "#3B66E0" },
  { name: "Midnight", from: "#1E3785", to: "#171717" },
] as const
