## 1. Content Model

- [x] 1.1 Add an optional blog image positioning field to `src/content.config.ts` and verify `npm run check` accepts existing blog entries without the field.
- [x] 1.2 Add the bottom-oriented image position to the Spanish and English Albaicin sunset article frontmatter and verify both entries still pass content validation through `npm run check`.

## 2. Image Rendering

- [x] 2.1 Apply the optional image position in `src/components/BlogCard.astro` and verify the generated `/es/blog/` and `/en/blog/` listings keep `/images/sunset.jpeg` visible with the intended framing.
- [x] 2.2 Apply the optional image position in `src/pages/[locale]/blog/[slug].astro` and verify `/es/blog/albaicin-atardecer/` and `/en/blog/albaicin-sunset/` keep the city and sunset area visible.
- [x] 2.3 Preserve the default centered presentation for posts without custom image positioning and verify the pomegranate article pair still renders its existing image, metadata, title, category, summary, publication date, links, and language behavior.

## 3. Verification

- [x] 3.1 Run `npm run build` and verify the static build completes successfully with `dist/images/sunset.jpeg` present.
- [x] 3.2 Inspect the generated HTML for the Albaicin sunset article pair and verify visible image references and SEO/JSON-LD metadata continue to use `/images/sunset.jpeg`.
- [x] 3.3 Validate this OpenSpec change with `openspec validate fix-blog-image-cropping --type change --strict` and verify it passes.
