## ADDED Requirements

### Requirement: Search Console verification metadata
The system SHALL publish Google Search Console verification metadata on public pages only when an approved verification token is configured.

#### Scenario: Verification token is configured
- **WHEN** a public localized page is generated with an approved Google Search Console verification token available
- **THEN** the page exposes a Google site verification meta tag using that exact token
- **AND** the token is not hard-coded into tour, article, or landing content entries

#### Scenario: Verification token is not configured
- **WHEN** a public localized page is generated without an approved Google Search Console verification token
- **THEN** the page remains valid and indexable
- **AND** the page does not expose a placeholder Google verification meta tag

### Requirement: Localized authority pages
The system SHALL provide localized public authority pages that explain Elyara's tourism identity, guide expertise, service area, languages, and approved contact channels using only approved facts.

#### Scenario: Spanish visitor opens the authority page
- **WHEN** a visitor navigates to the Spanish authority page
- **THEN** the system displays Spanish content about Elyara Tours Granada, the guide-led approach, Granada service area, Spanish and English visitor support, and approved WhatsApp or email contact options
- **AND** the page links to relevant Spanish tours, commercial discovery pages, blog content, and contact content when those pages exist

#### Scenario: English visitor opens the authority page
- **WHEN** a visitor navigates to the English authority page
- **THEN** the system displays English content about Elyara Tours Granada, the guide-led approach, Granada service area, Spanish and English visitor support, and approved WhatsApp or email contact options
- **AND** the page links to relevant English tours, commercial discovery pages, blog content, and contact content when those pages exist

#### Scenario: Search engine reads authority page metadata
- **WHEN** a crawler reads a localized authority page
- **THEN** the page exposes localized title, description, canonical URL, language alternates, breadcrumb structured data, and organization or local business entity relationships consistent with visible content
- **AND** the page does not claim official-guide credentials, licenses, addresses, awards, ratings, or review counts unless those facts are approved and visible

### Requirement: High-intent SEO landing coverage
The system SHALL provide useful localized landing pages for approved high-intent Granada tourism searches without publishing thin keyword pages.

#### Scenario: Visitor opens a private guide or tour landing page
- **WHEN** a visitor opens a localized landing page for private Granada guide or private Granada tour searches
- **THEN** the page explains relevant Elyara services, what visitors can request, languages, contact options, and links to matching tours or tailor-made inquiry content

#### Scenario: Visitor opens a monument or neighborhood landing page
- **WHEN** a visitor opens a localized landing page for Cathedral, Royal Chapel, Albaicin, Sacromonte, historic center, or other approved Granada route topics
- **THEN** the page provides visitor-facing context for that topic and links to matching published tours, blog articles, or inquiry paths when they exist

#### Scenario: Visitor opens a family or day-trip landing page
- **WHEN** a visitor opens a localized landing page for family tours with kids or day trips connected to Malaga or Cordoba travel intent
- **THEN** the page presents practical visitor content, relevant Elyara routes, and external WhatsApp or email inquiry actions

#### Scenario: Search engine reads landing page quality signals
- **WHEN** a crawler reads a localized SEO landing page
- **THEN** the page exposes unique localized title, description, canonical URL, language alternates when a matching translation exists, visible internal links, and truthful structured data based on the page content
- **AND** the page does not present duplicated placeholder copy as substantive content
