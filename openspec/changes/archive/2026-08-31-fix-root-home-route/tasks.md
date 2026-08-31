## 1. Root Route Behavior

- [x] 1.1 Replace the standalone marketing content in `src/pages/index.astro` with a static-host-compatible redirect or minimal root response to `/es/`, and verify the source no longer contains `Rutas con historia, calma y mirada local.` or its rejected body copy
- [x] 1.2 Ensure the root response includes a usable fallback path to `/es/` for static hosting, and verify the generated root output does not expose the rejected root-only copy

## 2. Verification

- [x] 2.1 Run `npm run check` and verify the Astro/TypeScript checks pass
- [x] 2.2 Run `npm run build` and verify `/`, `/es/`, and `/en/` are generated successfully with links and assets resolving from the custom-domain root path
- [x] 2.3 Smoke-test the built root page behavior and verify a visitor opening `/` reaches `/es/` while Spanish and English localized navigation still works
