## MODIFIED Requirements

### Requirement: Local business structured data
The system SHALL expose structured data that identifies Elyara Tours Granada as a Granada tourism business with its approved public name, website URL, contact email, served area, available languages, approved public social profiles, and approved non-review trust facts.

#### Scenario: Search engine reads localized public page business data
- **WHEN** a crawler reads a localized public page
- **THEN** the page exposes structured data identifying `Elyara Tours Granada` as the public business entity
- **AND** the structured data references the configured production website URL rather than a placeholder domain
- **AND** the structured data includes `elyaratours@gmail.com` as the contact email
- **AND** the structured data includes Granada as the served tourism area
- **AND** the structured data includes Spanish and English as supported visitor languages
- **AND** the structured data may expose `EUR` as a broad approved price range signal without inventing specific unavailable prices

#### Scenario: Approved social profile is available
- **WHEN** a crawler reads business structured data
- **THEN** the structured data references `https://instagram.com/elyaratours` as an approved public profile
- **AND** the structured data does not invent unapproved phone numbers, physical addresses, payment details, additional social profiles, ratings, review counts, awards, credentials, or business hours

#### Scenario: Search engine reads business imagery
- **WHEN** a crawler reads business structured data
- **THEN** logo and business image references use approved public image URLs
- **AND** those image references may include structured image details such as content URL and known dimensions

### Requirement: Website and page structured data
The system SHALL expose structured data for the public website and each public page entity, connecting both to the Elyara business identity.

#### Scenario: Search engine reads website entity data
- **WHEN** a crawler reads a localized public page
- **THEN** the page exposes structured data identifying the public website name as `Elyara Tours Granada`
- **AND** the website entity URL uses the configured production site URL
- **AND** the website entity is associated with the Elyara business entity

#### Scenario: Search engine reads public page entity data
- **WHEN** a crawler reads any indexable public page
- **THEN** the page exposes a `WebPage` structured data node with a stable page URL and entity identifier
- **AND** the page entity includes localized name, description, language, publisher, website relationship, and Elyara business relationship
- **AND** the page entity references the visible primary image or approved fallback share image when page-specific imagery is unavailable
- **AND** the page image reference may include structured image details such as content URL and known dimensions

### Requirement: Tourism entity relationships
The system SHALL use truthful tourism-oriented structured data relationships for tours, places, services, offers, and articles where the page content supports those entities.

#### Scenario: Search engine reads a tour detail entity
- **WHEN** a crawler reads a published tour detail page
- **THEN** the tour structured data identifies the tour as a visitor experience in Granada
- **AND** it connects the tour to Elyara as provider and to the page URL as the public entity URL
- **AND** it may include EUR offer metadata only when derived from visible price text, preserving descriptive price text when no numeric price is available
- **AND** it does not invent ratings, review counts, physical addresses, unavailable tickets, unsupported schedules, or unavailable booking/payment capabilities

#### Scenario: Search engine reads content about a Granada place
- **WHEN** a public page visibly discusses a specific Granada place, monument, or neighborhood as part of the service or editorial content
- **THEN** any place-oriented structured data remains consistent with that visible content
- **AND** it does not claim Elyara owns, operates, or is physically located at that place

#### Scenario: Search engine reads service or article imagery
- **WHEN** a crawler reads structured data for a public service, landing page, tour, or editorial article with an approved image
- **THEN** image references use production URLs and may include structured image details such as content URL and known dimensions
- **AND** image structured data remains aligned with the visible or approved fallback page image

### Requirement: Structured data consistency validation
The system SHALL keep SEO structured data consistent with visible content, approved business facts, and production URLs across all public pages.

#### Scenario: Static build generates structured data
- **WHEN** the site builds public pages for production
- **THEN** JSON-LD nodes use `https://elyaratours.com` URLs for public pages, images, and entity identifiers
- **AND** page-specific JSON-LD does not reference unpublished tours, unpublished articles, hidden FAQ entries, or unapproved business facts
- **AND** structured image, offer, article, website, webpage, service, and business nodes remain derived from page content or approved shared metadata

#### Scenario: Search engine reads multiple page entities
- **WHEN** a crawler reads any public page with multiple JSON-LD nodes
- **THEN** the business, website, page-specific, breadcrumb, list, article, FAQ, offer, image, and service entities remain connected with stable identifiers where applicable

#### Scenario: Search engine reads local metadata signals
- **WHEN** a crawler reads public page metadata
- **THEN** local geo metadata may identify Granada as the served place
- **AND** that metadata does not introduce a physical street address, unsupported ownership claim, review rating, or unapproved credential
