# laubach.dev

Austin Laubach's personal developer site: projects, about/credentials, contact.
Live at https://laubach.dev.

## Deploy: read this first

**A push to `main` redeploys the live site.** Cloudflare Workers (static assets)
builds from the `laubach-dev/` subdirectory (root dir set in the Cloudflare dashboard; no wrangler config in the repo).
Never push without being asked. Run `npm run build` locally before any push;
a broken build means a failed deploy.

## Layout

```
docs/progress/          dated session logs (decisions, done, remaining work)
docs/design/style-draft.html  approved visual reference (tokens, hero, cards); match it
docs/content-drafts.md  site copy with approval status; check before writing page text
laubach-dev/            the Astro project (all commands run here)
  astro.config.mjs      Astro + @astrojs/react integration
  public/               static files served as-is (favicon, resume PDF later)
  src/styles/global.css reset + design tokens (--color-*, --space-*, --text-*)
  src/layouts/Base.astro  <head>, Nav, <main><slot/></main>, Footer
  src/components/       Nav.astro, Footer.astro
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
- Dark mode is planned; add colors as tokens in `:root` so a dark block can override them later.

## Brand and visual direction (decided 2026-10-24)

- The header wordmark `[ laubach.dev ]` (monospace, square brackets) stays. Restyle around it, not over it.
- Look: terminal + blueprint mix. Clean, engineered, computer-science feel.
  - **Dark-first**, with a light theme via `prefers-color-scheme`.
  - Sections open with labelled mono markers: `01 | projects`, `02 | about`.
  - Terminal idioms used sparingly as content: shell prompt, `ls -l`-style project rows, build-status footer.
  - **No grid background.** Austin rejected it.
  - **One interaction style site-wide.** Item cards (strengths, projects) share a
    `.card` style: on hover/focus they fade to an accent tint over 0.25s and scale
    to 1.015. No icons, corner brackets, or glows; don't mix in a second style.
- Public contact address: `hello@laubach.dev` (Cloudflare Email Routing). Never publish Austin's personal email.

## Working with Austin

- Austin built this by hand to learn. When changing structure or introducing a new
  concept, say briefly why, the same way `docs/progress/` records decisions.
- Site copy must be true. Don't invent skills, projects, or credentials; mark
  placeholders visibly and let Austin confirm before they ship.
- Voice: plain first person, like a professional describing their own work.
  No product-style taglines, cute labels, or decorative jargon (e.g. `linux(1)`,
  `man -k austin`). Terminal styling lives in the visuals, not the wording.
- After a working session, add or update a dated log in `docs/progress/`
  (format: decisions, what closed, remaining work).
- Commits: Conventional Commits, imperative, lowercase, no trailing period.

## Current state (2026-10-24)

Redesign is built on branch `redesign` (committed and pushed 2026-10-24): new
tokens, nav, footer, home/projects/about/contact/404 pages. Project data lives in
`laubach-dev/src/data/projects.ts`; the Web3Forms key goes in
`laubach-dev/src/config.ts` (empty = form disabled). The blog is not built yet.

Planned pages:

- `/` home: whoami hero with rotating "I build" phrases (command-line tools, web apps, games), 01 strengths 2x2 (Linux, Networking, Systems setup, Deployment), 02 projects, 03 about, 04 contact
- `/projects`: full project list
- `/about`: bio, credentials, resume
- `/contact`: `hello@laubach.dev` + contact form
- `/resume.pdf` in `public/`, linked from hero and about
- custom 404 page
- blog / notes (Astro content collections)

**Deploy hold:** the Boo & Breakfast project entry and `public/resume.pdf` (which
mentions it) must not reach `main` before 2026-10-30. See `docs/content-drafts.md`.

Next: collect real content page by page, then implement.
