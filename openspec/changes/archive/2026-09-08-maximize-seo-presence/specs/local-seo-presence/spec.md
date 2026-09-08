## ADDED Requirements

### Requirement: Connected tourism service structured data
The system SHALL expose structured data that connects Elyara's localized tourism services, public landing pages, tour lists, and business identity without inventing unsupported business facts.

#### Scenario: Search engine reads a commercial tourism landing page
- **WHEN** a crawler reads a localized commercial or SEO landing page for Granada tourism services
- **THEN** the page exposes structured data describing the visible tourism service offered on that page
- **AND** the service is connected to the Elyara business identity and the Granada service area
- **AND** the structured data uses only approved public contact channels and visible page content

#### Scenario: Search engine reads a tour listing relationship
- **WHEN** a crawler reads a public page that visibly lists tours for a localized search intent
- **THEN** the page exposes structured data that represents the visible list and points each item to its corresponding localized tour detail page

### Requirement: Tourism entity relationships
The system SHALL use truthful tourism-oriented structured data relationships for tours, places, services, and articles where the page content supports those entities.

#### Scenario: Search engine reads a tour detail entity
- **WHEN** a crawler reads a published tour detail page
- **THEN** the tour structured data identifies the tour as a visitor experience in Granada
- **AND** it connects the tour to Elyara as provider and to the page URL as the public entity URL
- **AND** it does not invent ratings, review counts, physical addresses, unavailable tickets, or unsupported schedules

#### Scenario: Search engine reads content about a Granada place
- **WHEN** a public page visibly discusses a specific Granada place, monument, or neighborhood as part of the service or editorial content
- **THEN** any place-oriented structured data remains consistent with that visible content
- **AND** it does not claim Elyara owns, operates, or is physically located at that place

### Requirement: Approved contact channel structured data
The system SHALL represent approved public contact and reservation channels in structured data without adding unapproved contact details.

#### Scenario: Search engine reads business contact data
- **WHEN** a crawler reads structured data for Elyara's business identity or services
- **THEN** the structured data includes `elyaratours@gmail.com` as the approved email contact channel
- **AND** it may represent WhatsApp contact using `+34 611 126 979` only as an approved direct inquiry channel
- **AND** it does not introduce a physical address, unsupported phone number, payment method, business hours, aggregate rating, or review count unless those facts are approved and visible

### Requirement: Structured data consistency validation
The system SHALL keep SEO structured data consistent with visible content and production URLs across all public pages.

#### Scenario: Static build generates structured data
- **WHEN** the site builds public pages for production
- **THEN** JSON-LD nodes use `https://elyaratours.com` URLs for public pages, images, and entity identifiers
- **AND** page-specific JSON-LD does not reference unpublished tours, unpublished articles, or hidden FAQ entries

#### Scenario: Search engine reads multiple page entities
- **WHEN** a crawler reads any public page with multiple JSON-LD nodes
- **THEN** the business, website, page-specific, breadcrumb, list, article, FAQ, and service entities remain connected with stable identifiers where applicable
