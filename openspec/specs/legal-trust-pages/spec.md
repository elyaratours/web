# legal-trust-pages Specification

## Purpose

Provides localized legal and trust pages so visitors and crawlers can understand Elyara's public identity, contact channels, data-handling basics, and site terms without relying on hidden metadata or unsupported claims.

## Requirements

### Requirement: Localized legal trust pages
The system SHALL provide localized public legal and trust pages for Spanish and English visitors, covering legal notice, privacy, and cookie information in visitor-facing language appropriate for a static tourism website.

#### Scenario: Spanish visitor opens legal pages
- **WHEN** a visitor opens a Spanish legal, privacy, or cookie page
- **THEN** the page displays Spanish content identifying Elyara Tours Granada, approved contact channels, the relevant visitor-facing legal or data topic, and a clear route back to the public site
- **AND** the page does not introduce unapproved physical address, business hours, review ratings, awards, credentials, or third-party profile claims

#### Scenario: English visitor opens legal pages
- **WHEN** a visitor opens an English legal, privacy, or cookie page
- **THEN** the page displays English content identifying Elyara Tours Granada, approved contact channels, the relevant visitor-facing legal or data topic, and a clear route back to the public site
- **AND** the page does not introduce unapproved physical address, business hours, review ratings, awards, credentials, or third-party profile claims

### Requirement: Legal page SEO metadata
The system SHALL expose production-safe SEO metadata for localized legal and trust pages while avoiding commercial keyword stuffing.

#### Scenario: Crawler reads a legal page
- **WHEN** a crawler reads a localized legal, privacy, or cookie page
- **THEN** the page exposes a localized title, description, canonical URL, language alternate metadata where a translation exists, and Open Graph metadata using the production domain
- **AND** the metadata describes the page's legal or trust purpose rather than claiming rankings, reviews, awards, official credentials, or business facts not visible on the page

#### Scenario: Crawler reads legal page structured data
- **WHEN** a crawler reads structured data on a localized legal, privacy, or cookie page
- **THEN** the page is connected to the Elyara business and website entities using approved public facts
- **AND** the structured data does not add review, rating, physical-address, opening-hours, payment, or credential claims not shown to visitors

### Requirement: Legal page discovery
The system SHALL make localized legal and trust pages discoverable without distracting from the tourism conversion path.

#### Scenario: Visitor views the site footer
- **WHEN** a visitor views the public site footer on a localized page
- **THEN** the footer links to the corresponding localized legal, privacy, and cookie pages
- **AND** the footer preserves the existing tourism discovery links, contact links, and reservation flow

#### Scenario: Search engine requests the sitemap
- **WHEN** a crawler requests the sitemap
- **THEN** the sitemap includes indexable localized legal, privacy, and cookie page URLs with production URLs
- **AND** translated legal page pairs include localized alternate links and an `x-default` link to the Spanish equivalent
