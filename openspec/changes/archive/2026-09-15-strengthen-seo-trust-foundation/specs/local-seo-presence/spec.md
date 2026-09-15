## ADDED Requirements

### Requirement: Operational search ownership readiness
The system SHALL support production Search Console setup and sitemap discovery without publishing placeholder verification values or requiring code changes for each approved token update.

#### Scenario: Approved verification token is configured
- **WHEN** the production site is built with an approved Search Console verification token
- **THEN** public indexable pages expose that token in crawler-readable metadata
- **AND** canonical URLs, hreflang URLs, sitemap URLs, robots instructions, Open Graph URLs, and structured-data URLs continue to use `https://elyaratours.com`

#### Scenario: Verification token is absent
- **WHEN** no approved Search Console verification token is configured
- **THEN** public pages omit verification metadata rather than publishing a placeholder
- **AND** the sitemap and robots instructions remain valid for the production domain

### Requirement: Approved external profile publication
The system SHALL publish external local-trust profiles only after the exact profile URL is approved for public use and displayed to visitors.

#### Scenario: Approved Google Business Profile URL is configured
- **WHEN** an approved Google Business Profile URL is configured for publication
- **THEN** public contact, authority, or footer surfaces display a visible link to that profile
- **AND** business structured data may include the same profile URL only because it is visible on public pages
- **AND** the page copy does not claim review counts, rating values, rankings, awards, or verification details beyond the approved visible profile link

#### Scenario: Approved Google Business Profile URL is absent
- **WHEN** no approved Google Business Profile URL is configured
- **THEN** public pages and structured data do not include a Google Business Profile URL or claim profile verification status
- **AND** the website continues to expose approved contact channels, service area, languages, Instagram profile, and reservation flow

### Requirement: Trust signal intake constraints
The system SHALL allow future trust signals to be added only when they are approved, visible, and representable truthfully.

#### Scenario: Approved credential or review source becomes available
- **WHEN** an official credential, association membership, award, review source, physical address, or business-hours fact is approved for public use
- **THEN** the fact may be added only to visitor-facing content where it is visible and contextually accurate
- **AND** matching structured data may include the fact only when the visible content supports it

#### Scenario: Trust signal remains unapproved
- **WHEN** a trust signal is not approved, not verifiable, or not visible to visitors
- **THEN** the site does not publish it in page copy, metadata, footer links, sitemap entries, or hidden machine-readable structured data
