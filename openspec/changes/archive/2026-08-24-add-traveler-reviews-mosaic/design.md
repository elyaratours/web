## Context

The site is a static Astro tourism website with localized Spanish and English home pages, shared layout styles, and a data-driven tour catalog. The new section sits after the existing tours section and should preserve the current warm Granada visual language.

## Goals / Non-Goals

**Goals:**

- Add a compact emotional mosaic that works with a limited initial set of approved photos and real reviews.
- Keep the section static-generation friendly and easy to maintain as content grows.
- Support localized Spanish and English text, including adapted translations of reviews.
- Provide a click-to-expand popup for both text reviews and group photos.
- Use two mosaic columns on mobile and a richer irregular grid on wider screens.
- Preserve accessibility for keyboard and screen-reader users.

**Non-Goals:**

- No carousel behavior.
- No social counters, ratings aggregates, or statistics.
- No integration with Google Reviews, Tripadvisor, or external review APIs.
- No internal booking, payment, or reservation changes.

## Decisions

### Use a small local content model for mosaic items

Store review/photo items in a local typed data structure rather than creating a new external integration. Each item should include a stable id, type (`review` or `photo`), locale-aware display content, and accessibility text for image items.

Alternatives considered:

- Content collections: better if reviews become editorial content with many entries, but heavier for the initial small mosaic.
- External review API: unnecessary for launch and introduces privacy, dependency, and styling constraints.

### Create a dedicated reviews mosaic component

Use a dedicated component that receives the current locale and renders the section after the tours catalog. This keeps the home page composition clear and avoids mixing review/lightbox logic into tour rendering.

Alternatives considered:

- Inline markup in each localized page: simplest initially, but duplicates layout and popup behavior.
- Separate Spanish and English components: unnecessary because the structure is shared.

### Use an accessible lightbox-style popup

Use a lightweight client-side popup for expanded content. The popup should support closing via visible close control, backdrop interaction, and `Escape`; it should expose dialog semantics and avoid trapping users in an inaccessible state.

Alternatives considered:

- Native links to image files or anchor-expanded content: simpler but less polished and does not satisfy the requested popup interaction.
- Full modal library: unnecessary dependency for a small static interaction.

### Prefer an editorial mosaic over a uniform card grid

Use varied item proportions on desktop to feel like a travel memory wall. On mobile, keep exactly two columns so the section remains visual and compact, with review excerpts kept short enough to remain readable.

Alternatives considered:

- Uniform testimonial cards: clear but too generic for the desired emotional/photo-led tone.
- Carousel: saves space but hides content and feels less like a mosaic.

## Risks / Trade-offs

- Limited approved photos may make the mosaic feel sparse -> Start with a deliberately compact layout that looks complete with a small item count.
- Long reviews can overwhelm the grid -> Show short excerpts in the mosaic and reserve full text for the popup.
- Popup behavior can hurt accessibility if incomplete -> Include keyboard close behavior, semantic dialog markup, clear focusable controls, and readable alt text.
- Group photos with recognizable faces require consent -> Only use images that have explicit permission before launch.
- Adapted translations may diverge from originals -> Keep the intent faithful and avoid presenting invented or embellished reviews as direct quotes.

## Migration Plan

1. Add approved review/photo content and assets.
2. Add the localized mosaic section after the tours section.
3. Verify desktop, tablet, and mobile layouts, especially the two-column mobile mosaic.
4. Verify popup keyboard, pointer, and screen-reader behavior.
5. If there are not enough approved photos, launch with the compact mosaic rather than placeholders.
