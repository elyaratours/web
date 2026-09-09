# local-seo-presence Specification

## Purpose

Provides local SEO presence signals for Elyara Tours Granada so search engines can understand the business identity, service area, contact channels, page hierarchy, FAQs, public listings, and trustworthy visitor proof.

## Requirements

### Requirement: Local business structured data
The system SHALL expose structured data that identifies Elyara Tours Granada as a Granada tourism business with its approved public name, website URL, contact email, served area, available languages, and approved public social profiles.

#### Scenario: Search engine reads localized public page business data
- **WHEN** a crawler reads a localized public page
- **THEN** the page exposes structured data identifying `Elyara Tours Granada` as the public business entity
- **AND** the structured data references the configured production website URL rather than a placeholder domain
- **AND** the structured data includes `elyaratours@gmail.com` as the contact email
- **AND** the structured data includes Granada as the served tourism area
- **AND** the structured data includes Spanish and English as supported visitor languages

#### Scenario: Approved social profile is available
- **WHEN** a crawler reads business structured data
- **THEN** the structured data references `https://instagram.com/elyaratours` as an approved public profile
- **AND** the structured data does not invent unapproved phone numbers, physical addresses, payment details, or additional social profiles

### Requirement: Website structured data
The system SHALL expose structured data for the public website entity and connect it to the Elyara business identity.

#### Scenario: Search engine reads website entity data
- **WHEN** a crawler reads a localized public page
- **THEN** the page exposes structured data identifying the public website name as `Elyara Tours Granada`
- **AND** the website entity URL uses the configured production site URL
- **AND** the website entity is associated with the Elyara business entity

### Requirement: Breadcrumb structured data
The system SHALL expose breadcrumb structured data on public pages where the visitor's location in the site hierarchy is more specific than a localized home page.

#### Scenario: Search engine reads a tour detail breadcrumb
- **WHEN** a crawler reads a published localized tour detail page
- **THEN** the page exposes breadcrumb structured data from the localized home page to the tours area and then to the current tour page
- **AND** every breadcrumb URL uses the configured production site URL

#### Scenario: Search engine reads an editorial article breadcrumb
- **WHEN** a crawler reads a published localized blog article page
- **THEN** the page exposes breadcrumb structured data from the localized home page to the localized blog listing and then to the current article page
- **AND** every breadcrumb URL uses the configured production site URL

#### Scenario: Search engine reads a commercial page breadcrumb
- **WHEN** a crawler reads a localized contact, tailor-made, or commercial tour landing page
- **THEN** the page exposes breadcrumb structured data from the localized home page to the current page
- **AND** every breadcrumb URL uses the configured production site URL

### Requirement: FAQ structured data
The system SHALL expose FAQ structured data only for public pages that display matching visitor-facing FAQ content on the page.

#### Scenario: Search engine reads a tour FAQ
- **WHEN** a published tour detail page displays one or more localized FAQ entries
- **THEN** the page exposes matching FAQ structured data with the same visible questions and answers

#### Scenario: Search engine reads a commercial page FAQ
- **WHEN** a localized tailor-made, contact, or commercial tour landing page displays one or more localized FAQ entries
- **THEN** the page exposes matching FAQ structured data with the same visible questions and answers

#### Scenario: Page has no visible FAQ content
- **WHEN** a public page does not display FAQ entries
- **THEN** the page does not expose FAQ structured data for hidden or unavailable questions

### Requirement: Public listing structured data
The system SHALL expose list structured data for public pages that visibly list tours or editorial articles.

#### Scenario: Search engine reads the localized home tour catalog
- **WHEN** a crawler reads a localized home page with a visible tour catalog
- **THEN** the page exposes structured data describing the visible published tours as an ordered public list
- **AND** each listed item URL points to the corresponding localized tour detail page

#### Scenario: Search engine reads a localized blog listing
- **WHEN** a crawler reads a localized blog listing page with visible published articles
- **THEN** the page exposes structured data describing the visible published articles as an ordered public list
- **AND** each listed item URL points to the corresponding localized article detail page

### Requirement: Review structured data constraints
The system SHALL expose review structured data only for real approved visitor reviews that are displayed on the same page and can be attributed without inventing ratings or platform data.

#### Scenario: Search engine reads visible visitor proof
- **WHEN** the localized home page displays approved visitor review text
- **THEN** any review structured data uses only the visible approved review text and attribution available on that page
- **AND** the structured data does not invent star ratings, aggregate ratings, review counts, review platforms, or reviewer details not present in the approved content

#### Scenario: Approved review data is insufficient for schema
- **WHEN** approved review content cannot be represented truthfully as structured data
- **THEN** the system preserves the visible visitor proof without emitting misleading review structured data

#### Scenario: Search engine reads home while traveler reviews are hidden
- **WHEN** a crawler reads a localized home page where traveler reviews are not displayed
- **THEN** the page does not emit review structured data for the hidden traveler reviews

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
