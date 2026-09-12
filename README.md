# Andy

Personal design system. Headless React (Base UI + shadcn), Geist type, Linear craft. Tokens are the Grabbit 10-tint palettes.

This repo is two things:

1. A docs site you can host on Vercel (Geist-style reference)
2. A shadcn registry other projects can install from (`npx shadcn add @andy/button`)

## Develop

```bash
npm install
npm run dev
```

## Registry

```bash
npm run registry:build
```

JSON is written to `public/r`. After deploy:

```bash
npx shadcn@latest registry add @andy=https://YOUR_DOMAIN/r/{name}.json
npx shadcn@latest add @andy/theme
npx shadcn@latest add @andy/button
```

Set `NEXT_PUBLIC_REGISTRY_URL` on Vercel to `https://YOUR_DOMAIN/r/{name}.json`.

## Stack

- Next.js App Router
- Tailwind v4
- shadcn nova / Base UI
- Geist Sans + Geist Mono
