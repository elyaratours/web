## Context

The site is a static Astro tourism website with localized Spanish and English public pages, a shared base layout, existing footer contact links, and external reservation/contact patterns. The contact page should extend this public experience without introducing backend form handling or extra channels.

## Goals / Non-Goals

**Goals:**

- Add localized static contact pages at `/es/contacto/` and `/en/contact/`.
- Reuse existing layout, visual language, footer contact data, and SEO patterns.
- Make the page discoverable from shared navigation and footer links.
- Keep contact channels limited to email and Instagram.

**Non-Goals:**

- Do not add WhatsApp, phone, location/address, or additional social networks to the contact page.
- Do not add a form, newsletter signup, backend endpoint, storage, account, checkout, or payment flow.
- Do not introduce a new content collection for a single static contact page.

## Decisions

- Generate contact pages from a localized static route rather than separate duplicated files.
  - Rationale: the site already uses localized route generation, and a shared route keeps SEO alternates and copy consistent.
  - Alternative considered: separate `src/pages/es/contacto.astro` and `src/pages/en/contact.astro`. Rejected because it duplicates structure and is harder to keep aligned.

- Store contact-page labels, SEO copy, and purpose text in the existing localization layer.
  - Rationale: the page is static bilingual marketing/contact content, and no content collection is needed.
  - Alternative considered: create a contact content collection. Rejected as overkill for one fixed page.

- Use direct `mailto:` and Instagram links only.
  - Rationale: this matches the footer and the user's explicit channel scope.
  - Alternative considered: add WhatsApp as a conversion CTA. Rejected because the user chose to keep the page equal to the footer: email plus Instagram only.

- Add shared navigation discovery without overcrowding the page content.
  - Rationale: a contact page should be reachable globally, while the page itself remains simple and focused.
  - Alternative considered: only link from the footer. Rejected because the user liked adding navigation access and contact is a common header destination.

## Risks / Trade-offs

- Header navigation can become crowded -> Keep the label short and rely on existing responsive behavior.
- Public email can attract spam -> Accepted because the email is already intentionally public in the footer.
- A page without a form may feel less conventional -> Use clear action cards and explanatory copy so email and Instagram feel intentional.

## Migration Plan

- Add localized contact-page content and route helpers.
- Add localized contact page generation with SEO alternates.
- Add header/footer discovery links.
- Verify with check, build, generated page inspection, and OpenSpec validation.
- Rollback is removal of the page route, localized copy, discovery links, and delta spec/archive artifacts.
