## 1. Content Model

- [x] 1.1 Add a `blog` Astro Content Collection schema with locale, translation key, public slug, title, excerpt, category, publication dates, image metadata, SEO description, published state, ordering, and optional related tour references; verify `npm run check` accepts valid article frontmatter.
- [x] 1.2 Add helper functions for fetching published blog articles by locale, sorting articles, resolving article URLs, finding translation alternates, and resolving related published tours; verify helpers are used without duplicating filtering logic in pages.
- [x] 1.3 Seed representative Spanish and English article Markdown entries covering the editorial tone; verify published entries appear in generated static paths and unpublished entries do not.

## 2. Public Pages

- [x] 2.1 Add localized blog listing pages at `/es/blog/` and `/en/blog/` with editorial intro copy, article cards, category labels, summaries, images when available, and links to detail pages; verify both listing URLs render in `npm run build` output.
- [x] 2.2 Add localized article detail pages at `/[locale]/blog/[slug]/` with title, category, publication date, image, body content, and localized back/navigation copy; verify detail pages are generated only for published entries.
- [x] 2.3 Add related-tour presentation on article detail pages when related published tours exist in the same locale; verify articles without related tours still render cleanly.

## 3. Navigation and Localization

- [x] 3.1 Extend localized i18n copy for blog navigation, blog listing text, article labels, category display names, and article CTAs; verify Spanish and English pages show localized labels.
- [x] 3.2 Add public navigation and footer links to the blog section while preserving existing tours and reservation calls to action; verify links resolve correctly from root, Spanish, English, and detail pages.
- [x] 3.3 Add language alternate behavior for blog listing and article pages using available translations; verify translated articles expose alternate URLs and single-language articles do not require a counterpart.

## 4. SEO and Structured Data

- [x] 4.1 Add blog listing metadata with localized title, description, canonical URL, and language alternates; verify generated HTML contains expected SEO tags.
- [x] 4.2 Add article metadata and JSON-LD structured data for published article pages; verify generated HTML includes article title, description, canonical URL, open graph image when available, and Article or BlogPosting JSON-LD.

## 5. Visual Integration and Verification

- [x] 5.1 Add article card/detail presentation that matches the existing warm Granada tourism style while giving the blog a journal/cuaderno personality; verify desktop and mobile layouts are usable.
- [x] 5.2 Ensure any new article imagery uses `/public/images/` paths and WebP or AVIF formats; verify image paths load in the built site.
- [x] 5.3 Run `npm run check`, `npm run build`, and `openspec validate add-editorial-blog --type change --strict`; verify all commands pass before marking the change implemented.
