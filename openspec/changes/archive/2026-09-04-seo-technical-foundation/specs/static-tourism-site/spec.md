## MODIFIED Requirements

### Requirement: Static public website foundation
The system SHALL provide a statically generated public website suitable for hosting on GitHub Pages with a custom domain and root-path routing.

#### Scenario: Visitor opens the home page
- **WHEN** a visitor navigates to the site's root URL at `/`
- **THEN** the system resolves the visitor to the approved Spanish localized home page at `/es/`
- **AND** the root experience does not display separate root-only landing copy

#### Scenario: Site is deployed to custom-domain GitHub Pages
- **WHEN** the site is built for production deployment
- **THEN** generated links and assets resolve correctly from the custom domain root path
- **AND** production SEO metadata uses `https://elyaratours.com` rather than any placeholder domain

#### Scenario: Production build lacks a real site URL
- **WHEN** the site is built for production deployment without the approved production site URL
- **THEN** the build fails or otherwise prevents publishing SEO metadata that references `https://web-elyara.example`

### Requirement: Search engine metadata and structured data
The system SHALL provide SEO metadata for public pages, structured data for tour detail pages, and discoverability metadata for search engines.

#### Scenario: Search engine reads a public page
- **WHEN** a crawler reads a public home, catalog, contact, tailor-made, blog, or tour detail page
- **THEN** the page exposes appropriate title, description, canonical metadata, and language-aware metadata
- **AND** canonical, hreflang, Open Graph, image, and structured-data URLs use `https://elyaratours.com`

#### Scenario: Search engine reads localized alternates
- **WHEN** a crawler reads language alternate metadata on a localized public page
- **THEN** Spanish and English alternates point to the matching localized pages on `https://elyaratours.com`
- **AND** the `x-default` alternate points to the Spanish home page at `https://elyaratours.com/es/`

#### Scenario: Search engine reads the localized home page
- **WHEN** a crawler reads `/es/` or `/en/`
- **THEN** the page exposes an Open Graph image using the approved home hero image on `https://elyaratours.com`

#### Scenario: Search engine reads a tour detail page
- **WHEN** a crawler reads a published tour detail page
- **THEN** the page includes JSON-LD structured data describing the tour using the available tour metadata
- **AND** structured-data URLs use `https://elyaratours.com`

#### Scenario: Search engine requests the sitemap
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** the system serves a sitemap containing indexable public localized home, tour, blog, contact, and tailor-made URLs

#### Scenario: Search engine reads robots instructions
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the system allows public crawling
- **AND** the file declares `Sitemap: https://elyaratours.com/sitemap.xml`
