## Context

The site is an Astro static tourism website with Tailwind utility classes and shared layout/components. Current mobile behavior is mostly responsive stacking, but several areas need a deliberate mobile pass: the global header hides navigation on small screens, page headings use large desktop-leaning sizes, hero/detail images use tall fixed heights, cards use generous padding, and key reservation actions can appear late in the mobile reading order.

## Goals / Non-Goals

**Goals:**

- Treat mobile as a first-class public experience for discovery and conversion.
- Keep the existing Granada tourism visual language while improving comfort, clarity, and tap targets.
- Apply consistent mobile rules across shared components before making page-specific adjustments.
- Preserve static generation and GitHub Pages compatibility.

**Non-Goals:**

- Do not introduce a booking engine, forms, checkout, accounts, payments, or WhatsApp flow.
- Do not add new dependencies unless a built-in Astro/Tailwind approach is insufficient.
- Do not redesign desktop layouts or replace the visual identity.
- Do not change content collection schemas or rewrite tour/blog content.

## Decisions

- Add a simple mobile navigation pattern in `BaseLayout.astro`.
  - Rationale: mobile users need access to tours, tailor-made trips, blog, contact, and language switching without scrolling to the footer.
  - Alternative considered: keep only the reserve CTA in the header. This keeps the header small but makes discovery paths too hidden.

- Prefer responsive utility changes and small shared CSS/component refinements over new abstractions.
  - Rationale: the site is small and mostly static; targeted Tailwind changes are easier to review and less risky.
  - Alternative considered: create a full mobile design system layer. That would add names and indirection before the site needs them.

- Use mobile-specific sizing for typography, spacing, images, and cards.
  - Rationale: current `text-5xl`, `h-[28rem]`, and large card padding can consume too much of the first viewport on phones.
  - Alternative considered: leave current sizes because they technically fit. That does not meet the requested polished mobile outcome.

- Make primary actions full-width or highly prominent on narrow screens when they appear in CTA groups or sidebars.
  - Rationale: mobile visitors should be able to reserve or inquire without hunting for small controls.
  - Alternative considered: preserve desktop inline button proportions everywhere. That can look elegant but reduces tap comfort.

- Improve mobile reading order rather than duplicating whole sections.
  - Rationale: duplicate content increases maintenance and SEO/accessibility risk.
  - Alternative considered: add a sticky bottom booking bar. This may help conversion, but it can obscure content and is not needed unless CTA visibility remains weak after the first pass.

## Risks / Trade-offs

- More visible mobile navigation can increase header height -> keep the mobile pattern compact and verify it does not dominate the first screen.
- Smaller mobile imagery may reduce visual drama -> preserve strong image ratios while avoiding excessive vertical friction.
- Full-width CTAs can feel less refined if overused -> apply mainly to primary mobile actions and CTA groups.
- Dialog behavior on mobile can vary by browser -> verify traveler review popups remain closable and readable on small viewports.

## Migration Plan

1. Adjust shared layout and global component utilities first: header/nav, shell spacing, button behavior, card density, and footer layout.
2. Polish localized home sections, cards, and traveler reviews mosaic.
3. Polish detail and standalone pages: tours, blog posts, blog listing, contact, and tailor-made pages.
4. Run checks/build and manually inspect representative generated pages at mobile widths.
