## 1. Production Site URL

- [x] 1.1 Configure production builds to use `https://elyaratours.com` for `Astro.site`; verify built canonical, hreflang, Open Graph, image, and JSON-LD URLs no longer contain `https://web-elyara.example`.
- [x] 1.2 Add a build-time safeguard so production deployment cannot silently emit the placeholder `https://web-elyara.example` SEO domain.
- [x] 1.3 Verify local development remains usable without requiring production environment variables.

## 2. Sitemap And Robots

- [x] 2.1 Add sitemap generation for the static site, including localized home pages, tour detail pages, blog listing/detail pages, contact pages, tailor-made pages, and the root page as appropriate.
- [x] 2.2 Update `robots.txt` to declare `Sitemap: https://elyaratours.com/sitemap.xml` while keeping public crawling allowed.
- [x] 2.3 Verify the production build outputs a sitemap at the expected public path.

## 3. Language And Social Metadata

- [x] 3.1 Update `x-default` alternate metadata to point to `/es/` instead of the root meta-refresh page.
- [x] 3.2 Add an Open Graph image to localized home pages using the approved home hero image.
- [x] 3.3 Verify Spanish and English alternates still point to the matching localized pages.

## 4. Validation

- [x] 4.1 Run `npm run check` and verify there are no Astro, TypeScript, or content collection errors.
- [x] 4.2 Run `npm run build` and verify the production build succeeds.
- [x] 4.3 Inspect generated HTML for `/es/`, `/en/`, at least one Spanish tour page, at least one English tour page, and a blog page; verify SEO URLs use `https://elyaratours.com` and no generated page contains `web-elyara.example`.
- [x] 4.4 Run `openspec validate seo-technical-foundation --type change --strict` and verify the OpenSpec change is valid.
