# laubach.dev

Austin Laubach's personal developer site: projects, about/credentials, contact.
Live at https://laubach.dev.

## Deploy: read this first

**A push to `main` redeploys the live site.** Cloudflare Workers (static assets)
builds from the `laubach-dev/` subdirectory and deploys with `npx wrangler deploy`.
`laubach-dev/wrangler.jsonc` makes it a static-assets-only Worker (no adapter, no
server code). Don't add `@astrojs/cloudflare`; without this file Cloudflare
auto-injects it.
Never push without being asked. Run `npm run build` locally before any push;
a broken build means a failed deploy.

## Layout

`docs/` is local-only (gitignored): personal notes, session logs, design and
content drafts. It may be missing on a fresh clone.

```
docs/progress/          dated session logs (decisions, done, remaining work)
docs/design/redesign-2026-11.html  approved visual reference (2026-11-24); match it
docs/design/style-draft.html  superseded terminal-style draft; don't use
docs/content-drafts.md  site copy with approval status; check before writing page text
laubach-dev/            the Astro project (all commands run here)
  astro.config.mjs      Astro + @astrojs/react
  wrangler.jsonc        Cloudflare: serve dist/ as static assets, 404.html for misses
  public/               static files served as-is (favicon, resume PDF later)
  src/styles/global.css reset + design tokens (--color-*, --space-*, --text-*)
  src/layouts/Base.astro  <head>, Nav, <main><slot/></main>, Footer
  src/components/       Nav, Footer, Hero, SectionHead, ProjectCard (.astro)
  src/pages/            one file per route: index, projects, about, contact
```

The repo root is not the Astro root. `cd laubach-dev` before any npm/astro command.

## Commands (from `laubach-dev/`)

| Command | Does |
| :-- | :-- |
| `npm ci` | install from lockfile (needed on a fresh clone) |
| `npm run dev` | dev server at http://localhost:4321 |
| `npx astro dev --background` | dev server in background; `astro dev stop/status/logs` to manage |
| `npm run build` | production build to `dist/`; the check before pushing |
| `npx astro check` | type-check `.astro` and TS files |

Node >= 22.12 (see `package.json` engines).

## Stack decisions (made deliberately; don't reverse without asking)

- **Astro, static output.** Pages are `.astro` files rendered at build time.
- **React islands only when a component needs client-side state.** Default to
  plain `.astro`. No `client:*` directive means zero JS shipped.
- **Plain CSS with design tokens. No Tailwind.** Chosen for learning value.
  Global tokens live in `src/styles/global.css`; component styles go in the
  component's scoped `<style>` block and use the tokens, not raw values.
- **Cloudflare** for registrar, DNS, and hosting.

## Conventions

- Every page wraps its content in `<Base title="X - laubach.dev" description="...">`.
- New nav links: add to `Nav.astro` with the `aria-current` pattern already there.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Keep the `:focus-visible` outline and semantic HTML (`<nav>`, `<ul>/<li>`, headings in order).
- Mobile breakpoint in use: `@media (max-width: 480px)`. Check layouts at ~400px wide.
- Theme follows the OS: light palette in `:root`, dark overrides under
  `prefers-color-scheme: dark`. Add every new color as a token in both.

## Brand and visual direction (decided 2026-11-24, replaces the 2026-10-24 terminal look)

- Goal: industry professional, sleek, uniform. Not "techy", not a plain résumé either.
- The header wordmark `[ laubach.dev ]` (monospace, square brackets) stays. It is
  the only monospace text on the site; everything else is IBM Plex Sans.
- Copper accent on cool slate neutrals. Full-width section bands alternate
  background colors for rhythm. Spacing is compact: keep section padding tight
  around headings.
- Sentence case everywhere. No pills or chips, status dots, shell prompts, blinking
  cursors, rotating text, numbered section markers, `./` nav markers, `›` bullets,
  `↗` arrows, build-status footer, or grid background.
- **One card style site-wide** (`.card`): surface fill, 1px border, 6px radius; on
  hover/focus only the border shifts toward the accent. No scale, tint, icons, or glows.
- Buttons are rectangles (4px radius). At most one solid primary button per page;
  everything else is a text link.
- No availability or job-seeking copy ("open to roles", "looking for").
- Public contact address: `hello@laubach.dev` (Cloudflare Email Routing). Never publish Austin's personal email.

## Working with Austin

- Austin built this by hand to learn. When changing structure or introducing a new
  concept, say briefly why, the same way `docs/progress/` records decisions.
- Site copy must be true. Don't invent skills, projects, or credentials; mark
  placeholders visibly and let Austin confirm before they ship.
- Voice: plain first person, like a professional describing their own work.
  No product-style taglines, cute labels, or decorative jargon (e.g. `linux(1)`,
  `man -k austin`).
- After a working session, add or update a dated log in `docs/progress/`
  (format: decisions, what closed, remaining work).
- Commits: Conventional Commits, imperative, lowercase, no trailing period.

## Current state (2026-11-24)

The 2026-11-24 redesign (copper, sans, compact) is built in the working tree and
not yet committed; `main` still serves the October terminal look. Pages: home,
projects, about, contact (working Web3Forms form), and 404. Project data lives in
`laubach-dev/src/data/projects.ts`; the Web3Forms key is in
`laubach-dev/src/config.ts`. Not built yet: blog/notes, SEO and social preview
tags. The latest handoff is the newest file in `docs/progress/` (local only).
