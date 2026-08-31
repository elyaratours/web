## 1. Shared Mobile Foundation

- [x] 1.1 Add a compact mobile navigation pattern to `src/layouts/BaseLayout.astro` and verify mobile users can reach tours, tailor-made trips, blog, contact, the alternate language, and reservation actions without footer navigation
- [x] 1.2 Refine shared mobile spacing, card density, border radius, and button behavior in `src/styles/global.css` or existing component classes, and verify common sections remain visually consistent on narrow screens
- [x] 1.3 Verify the desktop header, footer, buttons, cards, and language links preserve their existing purpose and layout behavior after the shared mobile changes

## 2. Home And Discovery Pages

- [x] 2.1 Polish `src/pages/[locale]/index.astro` for mobile hero typography, first-screen spacing, image height, CTA sizing, experience cards, tour catalog, tailor-made section, and traveler reviews placement, and verify `/es/` and `/en/` remain localized
- [x] 2.2 Polish `src/components/TourCard.astro`, `src/components/BlogCard.astro`, `src/components/TailorMadeHomeSection.astro`, and `src/components/TravelerReviewsMosaic.astro` for mobile readability, tappable areas, image balance, and popup usability
- [x] 2.3 Polish `src/pages/[locale]/blog/index.astro` for mobile hero density and article listing readability, and verify published blog cards remain accessible from `/es/blog/` and `/en/blog/`

## 3. Detail And Standalone Pages

- [x] 3.1 Polish `src/pages/[locale]/tours/[slug].astro` for mobile title scale, metadata cards, hero image height, reservation CTA visibility, and content card padding, and verify a representative Spanish and English tour page remain usable
- [x] 3.2 Polish `src/pages/[locale]/blog/[slug].astro` for mobile title scale, article image height, article content padding, related-tour CTA visibility, and related tour cards, and verify a representative Spanish and English article page remain usable
- [x] 3.3 Polish `src/components/ContactPage.astro` and `src/pages/[locale]/[customSlug].astro` for mobile hero sizing, contact/tailor-made card density, CTA width, and list readability, and verify localized contact and tailor-made routes remain usable

## 4. Verification

- [x] 4.1 Run `npm run check` and verify Astro/TypeScript checks pass
- [x] 4.2 Run `npm run build` and verify the static site builds successfully with root-path assets and localized routes
- [x] 4.3 Inspect representative built pages at mobile widths including `/es/`, `/en/`, one tour detail, one blog detail, blog listing, contact, and tailor-made pages, and verify there is no horizontal scrolling, clipped text, obscured CTA, or unusable popup control
- [x] 4.4 Run `openspec validate "polish-mobile-experience" --type change --strict` and verify the change remains valid
