# AGENTS.md

## Current Repo State

- The root website app exists and uses npm; do not use `.opencode/package.json` or `.opencode/package-lock.json` as the app manifest.
- Main commands: `npm run dev`, `npm run check`, `npm run build`, `npm run preview`.
- `.opencode/` contains repo-local OpenCode/OpenSpec tooling only.
- OpenSpec changes live under `openspec/changes/`; validate this change style with `openspec validate <change-name> --type change --strict`.

## Product Direction

- Build a static tourism website for offering tours and routes, visually closer to `pateandogranada.net` and `freetoursgranada.es` than to a generic SaaS landing page.
- Initial stack target: Astro, TypeScript, Tailwind CSS, GitHub Pages, GitHub Actions, Lucide icons, Astro Content Collections, WebP/AVIF images, Astro SEO with JSON-LD, ES/EN languages.
- Reservations should start as external links or WhatsApp, not an internal booking/payment system.

## Content Architecture

- Tours should be data-driven with Astro Content Collections, not hand-copied full pages per tour.
- Astro 7 content config is `src/content.config.ts`, not legacy `src/content/config.ts`.
- Store localized tour entries under `src/content/tours/<locale>/` as Markdown; current locales are `es` and `en`.
- Use `routeSlug` for public tour URLs; do not use frontmatter `slug` because Astro treats it as the collection slug and localized entries can collide.
- Expected tour frontmatter includes `title`, `duration`, `price`, `languages`, `image`, `reservationUrl`, `locale`, `routeSlug`, and SEO fields, followed by the tour description body.
- Adding a tour such as `Granada and the New World` should normally mean adding localized Markdown entries and letting Astro generate the pages.

## Implementation Notes

- Prefer static generation and GitHub Pages-compatible routing; avoid server-only features unless the hosting plan changes.
- Keep Spanish and English in mind from the start when naming routes, content fields, metadata, and navigation.
- Use `/public` image paths and modern formats (`.webp` or `.avif`) for tour imagery when assets are added.
- Include structured data for tour/detail pages via JSON-LD when SEO metadata is implemented.
- GitHub Pages is configured for custom-domain root routing with `base: '/'`; set `PUBLIC_SITE_URL` to the real domain before launch.
- There is no `public/CNAME` yet because the actual custom domain has not been provided.
