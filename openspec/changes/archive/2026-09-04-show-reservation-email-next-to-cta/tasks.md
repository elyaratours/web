## 1. Reservation CTA Contact Visibility

- [x] 1.1 Update the localized home reservation CTA area to show `elyaratours@gmail.com` next to the reservation button; verify the email remains sourced from the shared contact email constant.
- [x] 1.2 Update the tour detail reservation CTA area to show `elyaratours@gmail.com` next to the reservation button; verify the email remains sourced from the shared contact email constant.

## 2. Email Link Behavior

- [x] 2.1 Remove forced new-tab/new-window behavior from tour detail reservation email links; verify concrete tour reservation links still use each tour's `mailto:elyaratours@gmail.com?subject=...` URL.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify there are no Astro, TypeScript, or content collection errors.
- [x] 3.2 Run `openspec validate show-reservation-email-next-to-cta --type change --strict` and verify the OpenSpec change is valid.
