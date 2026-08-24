## Context

The repository currently has OpenSpec/OpenCode tooling but no website app, root package manifest, source tree, or CI workflow. See `proposal.md` for motivation; this design focuses on the first implementation shape that supports the `static-tourism-site` requirements.

## Goals / Non-Goals

**Goals:**

- Create a small, production-buildable Astro app using npm, TypeScript, Tailwind CSS, and static output.
- Make tours content-first so adding a route means adding Markdown content, not copying a page.
- Establish Spanish and English URL/content foundations early enough that SEO and navigation do not need a later rewrite.
- Keep deployment compatible with GitHub Pages on a custom domain using root-path routing.

**Non-Goals:**

- No internal booking engine, payment processing, account system, CMS admin, database, or server runtime.
- No complete final brand system or full content inventory beyond enough sample tours to validate the architecture.
- No image production pipeline beyond using static modern-format assets and paths ready for WebP/AVIF files.

## Decisions

### Use Astro static output as the app foundation

Use Astro with TypeScript and static generation. Configure the site for custom-domain GitHub Pages with root routing (`base` equivalent of `/`) rather than repository subpath routing.

Alternatives considered:

- Generic static HTML: simpler initially, but tour generation, content collections, layouts, and metadata would become manual quickly.
- React/Vite SPA: unnecessary client-side runtime for mostly content and worse default SEO shape.

### Use npm for the website package manager

Create a root `package.json` and lockfile for the website app with npm. Keep `.opencode/package.json` scoped to tooling and unrelated to the web app.

Alternatives considered:

- pnpm: faster and stricter, but adds a bootstrap decision the project does not need yet.
- yarn: no project-specific reason to prefer it.

### Store localized tour content as separate content entries

Represent Spanish and English tour pages as separate content entries, e.g. language-scoped tour Markdown files that can produce `/es/...` and `/en/...` routes. This keeps long-form translated copy natural and gives each language independent SEO metadata.

Alternatives considered:

- Single entry with nested translated fields: compact for small metadata, but awkward for long descriptions, future per-language slugs, and SEO copy.
- Spanish-only first: faster, but likely causes route and metadata churn when English is added.

### Define a tour content schema before adding pages

Create a tour collection schema with required fields for title, duration, price, offered languages, image, reservation target, and language/locale. Generate listing and detail pages from the collection.

Alternatives considered:

- Hardcoded cards/pages: fastest visually, but violates the core content architecture and makes future tour additions error-prone.
- JSON-only content: workable for metadata, but Markdown is better for tour descriptions.

### Keep reservation as an outbound action

Tour pages should render reservation calls to action as external links or WhatsApp links. No internal booking state is stored.

Alternatives considered:

- Embedded booking checkout: too much operational scope for the initial static site.
- Contact form: requires backend, form provider, or extra spam/security decisions.

### Implement SEO at page generation time

Generate title/description/canonical/language metadata for public pages and JSON-LD for tour detail pages from tour data where possible.

Alternatives considered:

- SEO after launch: risks route/content structure rework.
- Manual JSON-LD per page: duplicates data already present in tour entries.

## Risks / Trade-offs

- [Risk] GitHub Pages custom-domain settings may not be ready during initial implementation → Mitigation: configure root-path output and keep deployment workflow simple; add CNAME only when the domain value is known.
- [Risk] Separate localized tour entries can duplicate shared metadata → Mitigation: accept this initially for clearer SEO and simpler editing; refactor only if duplication becomes painful.
- [Risk] Placeholder imagery can weaken the tourism feel → Mitigation: structure `/public/images/` for WebP/AVIF assets and use obvious placeholders only until real images are provided.
- [Risk] JSON-LD fields may be incomplete for every tour type → Mitigation: emit conservative structured data from available fields and avoid claiming data not present in content.

## Migration Plan

- Bootstrap the Astro app in the repository root without changing `.opencode/` tooling files.
- Add content, pages, and deployment workflow in one change so the app can be built and previewed immediately.
- Rollback is removing the newly added website app files and workflow; there is no persisted user data or server state.
