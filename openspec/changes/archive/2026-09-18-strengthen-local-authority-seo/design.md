## Context

The site already has localized authority, contact, Home, SEO landing, tour, and editorial pages, with centralized SEO helpers for JSON-LD graph generation. Existing local SEO specs require visible support for trust facts before structured data can expose them, and the current business entity must remain Elyara Tours Granada rather than being replaced by an individual profile.

## Goals / Non-Goals

**Goals:**

- Centralize approved guide facts so localized page copy, article authorship, and structured data can stay consistent.
- Strengthen the authority page first, then reuse concise guide-led trust references on Home/contact surfaces where they support conversion.
- Add `Person` structured data for Laura Hdez. León only from visible or approved facts and connect it to Elyara's business identity.
- Allow editorial article structured data to represent Laura as a `Person` author when the visible article author is Laura.

**Non-Goals:**

- Do not create new public URLs or a separate personal website/profile page.
- Do not add new dependencies, CMS features, or runtime integrations.
- Do not add ratings, review counts, awards, physical address, business hours, license numbers, or jurisdiction-specific credential wording.
- Do not replace WhatsApp/email reservation flow with internal booking or payment.

## Decisions

- Store guide facts in shared localized content rather than duplicating strings across pages.
  - Rationale: the same facts drive authority copy, short trust snippets, and structured data; duplication would make future corrections risky.
  - Alternative considered: hard-code copy directly in each page. Rejected because visible copy and JSON-LD could drift.

- Make the authority page the canonical visible source for the full guide profile.
  - Rationale: it already exists for business trust, is linked from navigation/footer, and can carry the complete story without crowding commercial pages.
  - Alternative considered: add the full guide biography to Home. Rejected because Home should stay focused on tour discovery and reservation actions.

- Add short trust snippets to Home and contact only where they reinforce confidence.
  - Rationale: repeated concise signals can improve visitor trust, but long biography blocks on every page would feel repetitive.
  - Alternative considered: add the same biography section to every commercial landing. Rejected because it would dilute intent-specific landing content.

- Represent Laura as `Person` structured data connected to the existing business graph.
  - Rationale: search engines can understand the guide's expertise while Elyara remains the public business and publisher.
  - Alternative considered: change the main business entity into a person-led organization. Rejected because the public site and GBP identity are Elyara Tours Granada.

- Use `guía oficial de turismo` wording without jurisdiction or license details.
  - Rationale: the credential is approved, but the user explicitly asked not to mention Andalucía; adding license specifics would require separate approval.
  - Alternative considered: avoid the credential entirely. Rejected because it is a real approved authority signal.

- Update editorial authorship carefully rather than forcing every article to Laura.
  - Rationale: existing content may use organization authorship; some articles can remain brand-authored if that is clearer.
  - Alternative considered: bulk-change all author fields without review. Rejected because visible authorship should match the editorial voice and approval state.

## Risks / Trade-offs

- Over-optimization could make pages feel less personal -> keep copy natural, guide-led, and visitor-focused.
- Structured data could overstate claims if it includes hidden facts -> only emit guide facts that are visible or approved shared facts.
- Mixed authorship can create inconsistency -> define a clear default and verify article JSON-LD matches visible author text.
- Accented public name may require consistency checks -> use `Laura Hdez. León` wherever the public guide name is displayed or emitted.

## Migration Plan

- Update content and SEO helpers in place, preserving all public URLs.
- Validate with `npm run check` and `npm run build`.
- Inspect representative generated pages for visible guide content, article author metadata, JSON-LD graph relationships, canonical URLs, and hreflang preservation.
- Rollback is content-only: revert guide copy, author metadata, and `Person` JSON-LD additions if any claim needs revision.
