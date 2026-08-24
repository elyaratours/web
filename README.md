# Web Elyara

Static tourism website for offering tours and walking routes in Granada. The app uses Astro, TypeScript, Tailwind CSS, Astro Content Collections, Lucide icons, and external reservation links.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Verification

```bash
npm run check
npm run build
npm run preview
```

## Content

Tours are Markdown entries under `src/content/tours/`, grouped by language. Add a tour by creating a new Markdown file with the required frontmatter defined in `src/content.config.ts`.

Spanish routes build under `/es/`; English routes build under `/en/`. Tour detail URLs use each entry's `routeSlug` field.

## Deployment

GitHub Actions builds with npm and deploys `dist/` to GitHub Pages from `.github/workflows/deploy.yml`.

Set the repository variable `PUBLIC_SITE_URL` to the production custom-domain URL before launch so canonical and Open Graph URLs use the real domain. No `public/CNAME` is included yet because the domain value has not been provided.
