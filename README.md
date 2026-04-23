# marbellaachievers.github.io

Static marketing site for the [Marbella Achievers Toastmasters Club](https://www.toastmasters.org/Find-a-Club/00005183-achievers-club).

Built with [Astro](https://astro.build/) + Tailwind CSS. Hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` deploy automatically via `.github/workflows/deploy.yml`. In repo settings, set Pages → **Source: GitHub Actions** once.

## Project structure

- `src/data/site.ts` &mdash; single source of truth for links, meeting details, pricing, FAQ, nav.
- `src/components/` &mdash; one Astro component per section.
- `src/layouts/Base.astro` &mdash; shared `<head>`, JSON-LD, nav, footer.
- `src/assets/images/` &mdash; photos, optimized via Astro's `Image` component.
- `public/` &mdash; robots.txt, favicon, static assets served as-is.
- [AGENTS.md](./AGENTS.md) &mdash; full design and content brief for human and AI contributors.
