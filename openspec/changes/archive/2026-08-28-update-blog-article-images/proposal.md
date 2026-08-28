## Why

Two localized editorial article pairs need more suitable imagery so their listing cards, detail pages, and social previews better match each story. The Albaicin sunset articles should use the sunset photo, while the Granada pomegranate articles should use the granado photo.

## What Changes

- Use the provided sunset photo as the public image for the Spanish article `El Albaicin al atardecer: una forma lenta de entrar en Granada` and the English article `The Albaicin at sunset: a slower way into Granada`.
- Use the provided granado photo as the public image for the Spanish article `Por que hay granadas por toda Granada` and the English article `Why are there pomegranates all over Granada?`.
- Keep localized alternative text for each article image.
- Preserve the existing article titles, slugs, body content, publication state, categories, related tours, and localized blog routes.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `editorial-blog`: Require the named Albaicin sunset and Granada pomegranate article pairs to use their selected public images with localized alternative text.

## Impact

- Affects four blog content entries under `src/content/blog/` and public image assets under `public/images/`.
- The existing blog card, article detail page, and SEO image behavior should pick up the new frontmatter image without component changes.
- No routing, API, dependency, reservation, or content schema changes are expected.
