## 1. Footer Copy

- [x] 1.1 Add localized footer contact heading copy for Spanish and English; verify both locales expose the label without TypeScript errors.

## 2. Footer Contact Links

- [x] 2.1 Add a footer contact area in the shared base layout that displays `elyaratours@gmail.com` and `@elyaratours`; verify it appears on localized public pages.
- [x] 2.2 Link the email to `mailto:elyaratours@gmail.com`; verify the generated footer contains the expected `mailto:` URL.
- [x] 2.3 Link Instagram to `https://instagram.com/elyaratours` as an external link; verify the generated footer contains the expected URL and external-link attributes.
- [x] 2.4 Preserve existing footer navigation and language links; verify blog, ES, and EN links remain present.
- [x] 2.5 Confirm no additional social networks, newsletter signup, internal forms, backend contact handling, account creation, checkout, or payment flow are introduced; verify no new related dependencies or endpoints are added.

## 3. Verification

- [x] 3.1 Run `npm run check` and verify it succeeds.
- [x] 3.2 Run `npm run build` and verify it succeeds.
- [x] 3.3 Run `openspec validate add-footer-contact --type change --strict` and verify the change is valid.
