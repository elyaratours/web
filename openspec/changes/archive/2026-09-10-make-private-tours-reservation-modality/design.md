## Context

The current app uses a shared Astro layout for primary navigation and footer links, localized copy in `src/lib/i18n.ts`, data-driven tour entries under `src/content/tours/`, shared tour cards, shared tour detail pages, and dedicated commercial pages for `tours-privados-granada` / `private-tours-granada`.

The private-tour pages currently reuse the published tour catalog, which makes private tours appear to be a parallel product section. The new behavior keeps one source of truth for each route and moves private booking intent into the route reservation flow.

## Goals / Non-Goals

**Goals:**

- Keep tour content data-driven and avoid duplicate tour pages.
- Remove private tours from primary navigation and other prominent catalog-like entry points.
- Add clear private-group reservation wording on eligible tour cards and tour detail pages.
- Keep high-intent SEO pages useful as contextual landing pages that send visitors to existing routes or inquiry paths.
- Preserve external WhatsApp and email reservation flows.

**Non-Goals:**

- No internal booking engine, checkout, payment, or account flow.
- No separate private-tour content collection.
- No duplicated private version of each tour.
- No broad redesign of the visual system.

## Decisions

### Decision: Model private booking as copy and CTA behavior, not a separate catalog

Private-group booking should be surfaced through existing tour cards and detail pages. This keeps the route itself as the product and makes privacy/group type a reservation intent.

Alternatives considered:

- Keep a separate private-tour landing that lists the same tours: rejected because it duplicates discovery and reinforces the wrong product model.
- Add cloned private tour entries: rejected because it creates duplicated content and higher maintenance cost.

### Decision: Avoid data model changes unless eligibility must vary per tour

The first implementation should assume normal local route tours can expose private-group reservation wording. If a route must opt out later, add one small optional field such as `privateBookingAvailable` to the tour content schema.

Alternatives considered:

- Add explicit private-booking metadata immediately: deferred because the current decision does not require per-tour variation.
- Infer from category only: acceptable as a first pass if day trips continue to use their existing inquiry flow.

### Decision: Keep private search pages only as SEO support, not primary navigation

The existing localized private-tour URLs may continue to exist for SEO and inbound links, but their content should be reframed as contextual guidance. They should not be linked as a primary navigation section or presented as an alternate catalog.

Alternatives considered:

- Delete the URLs entirely: risky because existing or future search/inbound traffic could break.
- Keep the pages unchanged: rejected because they continue the duplicated-section problem.

### Decision: Reservation messages should include both route title and private intent

WhatsApp and email actions from tour-specific private CTAs should identify the selected route and make clear that the visitor is asking for a private group reservation.

Alternatives considered:

- Use only generic reservation messages: rejected because the visitor's private intent would be lost.
- Add an internal form to capture private details: out of scope and contrary to the external-reservation constraint.

## Risks / Trade-offs

- SEO traffic for `private tours Granada` could become less prominent if navigation links are removed -> keep contextual landing URLs indexable and internally linked only where useful.
- Visitors may miss that tours can be private if the wording is too subtle -> place private-group wording near visible reservation actions on cards and detail pages.
- Day-trip private copy may overlap with local route private copy -> keep day-trip inquiry wording distinct and avoid changing the existing day-trip flow unless a task explicitly touches it.
- Removing footer/header links may reduce access to the old private landing -> ensure tour pages and relevant SEO/blog pages still offer inquiry paths.

## Migration Plan

1. Update localized copy and navigation so `Tours privados` / `Private tours` is no longer a primary section.
2. Update tour card/detail reservation UI and external message copy to carry private group intent.
3. Reframe private-tour commercial pages as SEO/context pages that point to existing routes and inquiry paths.
4. Update sitemap/internal linking behavior only if current output still treats the pages as a primary commercial catalog.
5. Run the standard project checks and build.

Rollback: restore the previous navigation link and commercial landing copy if the simplified discovery flow causes unacceptable loss of private-tour visibility.
