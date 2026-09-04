## Why

The public site currently emits production SEO URLs that point to `https://web-elyara.example` instead of the real domain, and the site has no sitemap for search engines. This weakens canonical, hreflang, Open Graph, and structured-data signals for `elyaratours.com`, making discovery and indexing less reliable.

## What Changes

- Use `https://elyaratours.com` as the production site URL for canonical links, hreflang alternates, Open Graph URLs, image URLs, and JSON-LD URLs.
- Prevent production builds from silently using the placeholder `https://web-elyara.example` domain.
- Generate a sitemap that includes localized home pages, tour detail pages, blog pages, contact pages, tailor-made pages, and the root redirect page where appropriate.
- Declare the sitemap URL in `robots.txt`.
- Point `x-default` alternate metadata at the Spanish home page instead of the root meta-refresh page.
- Add an Open Graph image to localized home pages.
- Preserve existing public routing, Spanish/English localization, static GitHub Pages deployment, email reservation behavior, and page content.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Strengthens technical SEO foundations for production indexing on `elyaratours.com`.

## Impact

- Affects Astro site URL configuration and GitHub Pages deployment environment handling.
- Affects shared SEO head metadata generation.
- Affects `robots.txt` and generated sitemap output.
- Affects localized home metadata by adding a default social preview image.
- Does not change tour inventory, blog content, reservation URLs, calendar behavior, backend behavior, accounts, checkout, or payments.
