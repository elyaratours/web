## ADDED Requirements

### Requirement: Local trust without review claims
The system SHALL strengthen local trust signals using approved public facts without displaying reviews, ratings, awards, credentials, or Google Business Profile claims that are not yet approved and visible.

#### Scenario: Visitor reads local trust content before reviews exist
- **WHEN** a visitor reads authority, contact, tailor-made, or commercial discovery content before real reviews are approved
- **THEN** the page may explain Elyara's Granada service area, languages, direct WhatsApp/email reservation flow, guide-led approach, private group availability, and cultural route focus
- **AND** the page does not display star ratings, review counts, testimonial quotes, awards, official credentials, or third-party endorsements that are not approved and visible

#### Scenario: Search engine reads local trust structured data before reviews exist
- **WHEN** a crawler reads structured data before real reviews are approved
- **THEN** the structured data remains limited to approved business facts, visible page content, contact channels, service area, languages, and page relationships
- **AND** it does not emit `Review`, `AggregateRating`, rating values, review counts, awards, physical address, business hours, or official credentials unless those facts are approved and visible

### Requirement: Google Business Profile readiness
The system SHALL be ready to connect the website with Elyara's Google Business Profile after verification while avoiding unverified profile claims before approval.

#### Scenario: Google Business Profile is not verified yet
- **WHEN** the Google Business Profile URL or verification state is not approved for publication
- **THEN** public pages do not claim that the Google profile is verified
- **AND** public pages do not link to an unapproved Google Business Profile URL
- **AND** the website still exposes consistent business name, production URL, email, WhatsApp inquiry number, Granada service area, and Spanish/English language support

#### Scenario: Google Business Profile becomes verified
- **WHEN** an approved Google Business Profile URL is available
- **THEN** the system may expose that URL as an approved public profile only on pages where the link is visible to visitors
- **AND** matching structured data may include that profile URL only when it does not conflict with visible page content or approved public facts

### Requirement: Review readiness without fake social proof
The system SHALL support collecting real post-tour reviews without publishing review signals until approved reviews exist.

#### Scenario: No real reviews are approved
- **WHEN** no real visitor reviews are approved for publication
- **THEN** public pages do not display a review section, star rating, aggregate rating, review count, or testimonial carousel as if reviews existed
- **AND** structured data does not include review or aggregate rating nodes

#### Scenario: Post-tour review request copy is prepared
- **WHEN** Elyara needs to request feedback after a real tour
- **THEN** the project may provide Spanish and English review request copy that asks for honest voluntary feedback through approved external channels
- **AND** the copy does not offer incentives, request fake reviews, or ask visitors to mention claims that were not part of their real experience

#### Scenario: Real reviews become approved later
- **WHEN** real visitor reviews are approved for publication in the future
- **THEN** the system may display only the approved review text and attribution visible on the page
- **AND** any matching structured data must remain consistent with the visible approved review content and must not invent ratings or review counts
