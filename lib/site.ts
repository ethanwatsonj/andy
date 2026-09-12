export const site = {
  name: "Andy",
  title: "Andy",
  description:
    "A personal design system. Headless React, Geist type, Linear craft.",
  registryName: "andy",
  registryUrl:
    process.env.NEXT_PUBLIC_REGISTRY_URL ??
    "https://andy.vercel.app/r/{name}.json",
} as const
