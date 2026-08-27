## 1. Traveler Reviews Photo Update

- [x] 1.1 Verify the three provided client photo files exist under `public/images/` with exact filename casing.
- [x] 1.2 Locate the three existing `type: 'photo'` items in `src/lib/reviews.ts`.
- [x] 1.3 Replace `/images/groups/group_a.jpg` with `/images/foto-clientes-1.jpeg`.
- [x] 1.4 Replace `/images/groups/group_b.jpg` with `/images/Foto-clientes-2.jpeg`.
- [x] 1.5 Replace `/images/groups/group_c.jpg` with `/images/Foto-clientes-3.jpeg`.
- [x] 1.6 Review and update localized `alt` and `caption` text if needed to describe the new photos accurately.

## 2. Verification

- [x] 2.1 Run `openspec validate update-traveler-reviews-client-photos --type change --strict` and verify the change is valid.
- [x] 2.2 Run `npm run check` and verify Astro content/schema validation passes.
- [x] 2.3 Run `npm run build` and verify the localized home pages build successfully.
- [ ] 2.4 Manually review `/es/#reviews` and `/en/#reviews` in local preview to confirm the three photos load and photo popups still work.
