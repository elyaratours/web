## 1. Commercial Metadata

- [x] 1.1 Add localized SEO-specific home titles and descriptions targeting Granada guided tours, Alhambra, Albaicin, and cultural route intent, verified with generated home HTML after `npm run build`.
- [x] 1.2 Add localized SEO-specific blog listing titles and descriptions targeting Granada guide and planning intent, verified with generated blog index HTML after `npm run build`.

## 2. Discovery Links

- [x] 2.1 Add localized footer discovery links to priority high-intent SEO landing pages, verified with generated Spanish and English page HTML.
- [x] 2.2 Preserve existing footer navigation to contact, blog, day trips, authority, private tours, and locale switching, verified through generated page markup.

## 3. Structured Data

- [x] 3.1 Add tour duration and itinerary JSON-LD from existing tour metadata only, verified by generated tour HTML inspection.
- [x] 3.2 Ensure itinerary data omits missing route points instead of inventing placeholders, verified by static build output.

## 4. Verification

- [x] 4.1 Run `npm run check` and verify no Astro or TypeScript diagnostics.
- [x] 4.2 Run `npm run build` and verify all static routes generate successfully.
- [x] 4.3 Run `git diff --check` and verify no whitespace errors.
