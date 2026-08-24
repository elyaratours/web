## 1. Project Bootstrap

- [x] 1.1 Initialize the root npm Astro project without modifying `.opencode/` package files, and verify root `package.json` and `package-lock.json` exist.
- [x] 1.2 Add TypeScript, Tailwind CSS, Lucide icons, and Astro SEO/build dependencies, and verify `npm install` succeeds.
- [x] 1.3 Add Astro, TypeScript, Tailwind, and PostCSS configuration for static output with custom-domain root routing, and verify `npm run build` creates `dist/`.
- [x] 1.4 Add npm scripts for `dev`, `build`, `preview`, and `check`, and verify `npm run check` and `npm run build` pass.

## 2. Content Model

- [x] 2.1 Create the tours content collection schema with required tour fields for title, duration, price, offered languages, image, reservation target, locale, and SEO metadata, and verify valid sample entries pass `npm run check`.
- [x] 2.2 Add Spanish and English sample tour Markdown entries using language-scoped organization, and verify each entry can be queried by the generated pages during `npm run build`.
- [x] 2.3 Add public image placeholders or assets using WebP/AVIF-ready paths under `public/images/`, and verify referenced tour image paths resolve in the production build output.

## 3. Pages And Presentation

- [x] 3.1 Create shared layout, navigation, footer, and locale helpers for Spanish and English routes, and verify `/`, `/es/`, and `/en/` render in `npm run build` output.
- [x] 3.2 Build a tourism-focused home page and tour catalog experience that highlights routes, local atmosphere, and reservation calls to action, and verify the built pages are not empty and contain tour links.
- [x] 3.3 Generate localized tour detail routes from the tour collection, and verify each sample tour produces a built detail page with title, duration, price, languages, image, description, and reservation call to action.
- [x] 3.4 Implement external reservation links or WhatsApp calls to action without internal checkout state, and verify built tour pages contain outbound reservation URLs.

## 4. SEO And Structured Data

- [x] 4.1 Add reusable SEO metadata handling for home, catalog, and tour detail pages, and verify built HTML includes title, description, canonical, and language-aware metadata.
- [x] 4.2 Generate JSON-LD structured data for tour detail pages from tour content fields, and verify built tour HTML includes an `application/ld+json` script.

## 5. Deployment And Documentation

- [x] 5.1 Add a GitHub Actions workflow that installs with npm, builds the Astro site, and publishes `dist/` to GitHub Pages, and verify the workflow references the root app package rather than `.opencode/`.
- [x] 5.2 Add custom-domain deployment support for root-path hosting, including `public/CNAME` only if the domain value is available during implementation, and verify generated URLs do not include a repository subpath.
- [x] 5.3 Add a minimal README with setup, development, build, preview, and deployment notes, and verify the documented commands match `package.json` scripts.
- [x] 5.4 Run final verification with `npm run check`, `npm run build`, and `openspec validate initialize-static-tourism-site --type change --strict`, and verify all commands pass.
