## Why

The project needs an initial static website foundation to present and offer tourism tours and routes without starting from a fragile hand-built page structure. Establishing Astro, content collections, SEO, deployment, and multilingual routing now prevents early architecture choices from blocking future tour additions.

## What Changes

- Initialize a static Astro website using TypeScript and Tailwind CSS.
- Add a data-driven tours architecture using Astro Content Collections instead of manually copied tour pages.
- Generate public tour listing and tour detail pages from Markdown tour entries.
- Prepare Spanish and English public routes, metadata, and navigation patterns from the start.
- Add external reservation calls to action, initially through WhatsApp or outbound booking links.
- Add GitHub Pages deployment through GitHub Actions for a custom-domain site using root routing.
- Add SEO basics, including tour/detail JSON-LD structured data.
- Add a visual baseline inspired by tourism route websites such as pateandogranada.net and freetoursgranada.es, avoiding a generic SaaS landing-page feel.

## Capabilities

### New Capabilities

- `static-tourism-site`: Public static tourism website with generated tour pages, multilingual foundations, external reservations, SEO metadata, and deployable Astro project structure.

### Modified Capabilities

- None.

## Impact

- Adds the root website app manifest, Astro/Tailwind/TypeScript configuration, source tree, content collection schema, sample tour content, public assets structure, and GitHub Actions deploy workflow.
- Introduces npm as the package manager for the website app.
- Keeps `.opencode/` as tooling-only and separate from the website application manifest.
