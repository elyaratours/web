## ADDED Requirements

### Requirement: Bilingual commercial editorial clusters
The system SHALL publish Spanish and English editorial clusters that support high-intent Granada visitor searches equally across both languages.

#### Scenario: Spanish visitor researches priority buying-intent topics
- **WHEN** a Spanish visitor opens editorial content about private Alhambra tours, free tour versus private visit choice, Granada in two days, Albaicin and Sacromonte route choice, day trips from Malaga, or choosing a private guide in Granada
- **THEN** the article provides substantial Spanish visitor-facing guidance tailored to that topic
- **AND** it links to relevant Spanish tours, SEO landing pages, contact, tailor-made inquiry, related articles, or WhatsApp/email inquiry paths when those pages exist

#### Scenario: English visitor researches priority buying-intent topics
- **WHEN** an English visitor opens editorial content about private Alhambra tours, free tour versus private visit choice, Granada in two days, Albaicin and Sacromonte route choice, day trips from Malaga, or choosing a private guide in Granada
- **THEN** the article provides substantial English visitor-facing guidance tailored to that topic
- **AND** it links to relevant English tours, SEO landing pages, contact, tailor-made inquiry, related articles, or WhatsApp/email inquiry paths when those pages exist

### Requirement: Editorial cluster internal linking
The system SHALL make commercial editorial clusters discoverable through visible localized links between related articles, tours, SEO landings, and inquiry pages.

#### Scenario: Article supports a commercial landing topic
- **WHEN** a localized article explains a topic served by a localized SEO landing page
- **THEN** the article includes visible contextual links to that landing page and relevant tour detail pages
- **AND** those links do not replace existing reservation actions or related tour links

#### Scenario: Landing page has supporting editorial context
- **WHEN** a localized SEO landing page has related published editorial articles for the same search intent
- **THEN** the landing page may display links to those articles as supporting visitor context
- **AND** those links are localized to the visitor's current language whenever localized targets exist

#### Scenario: Blog listing presents priority clusters
- **WHEN** a visitor opens a localized blog listing after priority cluster articles are published
- **THEN** the listing presents the published cluster articles with localized titles, excerpts, imagery when available, category labels, publication dates, and links to detail pages
- **AND** unpublished drafts remain absent from public listings and generated pages

### Requirement: Editorial SEO quality safeguards for clusters
The system SHALL keep cluster articles useful, localized, and safe to index rather than publishing thin or duplicated commercial pages.

#### Scenario: New cluster article is published
- **WHEN** a new localized cluster article is marked as published
- **THEN** it includes a localized title, excerpt, SEO description, publication date, category, body content, canonical metadata, and visible internal links when relevant targets exist
- **AND** the body content answers the article's visitor question directly instead of serving only as a doorway to commercial pages

#### Scenario: Cluster article is incomplete or duplicative
- **WHEN** a localized cluster article lacks substantial visitor-facing content, duplicates another route or landing page as its main body, or is not approved for publication
- **THEN** the system does not expose it in public listings, sitemap entries, generated article pages, or structured data

#### Scenario: Search engine reads cluster article metadata
- **WHEN** a crawler reads a published cluster article
- **THEN** the page exposes article metadata, canonical URL, language alternates when a translation exists, breadcrumb structured data, article structured data, and social preview metadata based on visible page content
- **AND** metadata does not claim ratings, review counts, third-party endorsements, official credentials, or guaranteed ranking outcomes unless those facts are approved and visible
