## 1. Tour Content Update

- [x] 1.1 Locate the Spanish Alhambra tour entry and verify its `price` metadata communicates `Desde 120 EUR por grupo, entradas no incluidas`.
- [x] 1.2 Locate the English Alhambra tour entry and verify its `price` metadata communicates `From €120 per group, tickets not included`.
- [x] 1.3 Verify the existing ticket-exclusion caveat remains present in both localized price strings.

## 2. Verification

- [x] 2.1 Run `openspec validate update-alhambra-tour-price --type change --strict` and verify the change passes.
- [x] 2.2 Run `npm run check` and verify Astro content/schema validation passes.
