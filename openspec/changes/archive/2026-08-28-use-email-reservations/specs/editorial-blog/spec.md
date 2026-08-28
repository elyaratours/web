## MODIFIED Requirements

### Requirement: Editorial-to-tour discovery
The system SHALL allow editorial articles to connect readers to relevant published tours and email-based reservation actions without introducing an internal booking or payment flow.

#### Scenario: Article references related tours
- **WHEN** a published article is associated with one or more published tours in the same language
- **THEN** the article detail page presents links or calls to action to those related tour pages

#### Scenario: Visitor follows a reservation call to action from editorial content
- **WHEN** a visitor activates a reservation-oriented action from editorial content that is not tied to one concrete tour
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link rather than an internal checkout or WhatsApp conversation
- **AND** the system does not prefill subject or body text

#### Scenario: Visitor reserves a specific related tour
- **WHEN** a visitor reaches a specific related tour and activates that tour's reservation action
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name rather than an internal checkout or WhatsApp conversation
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or body text
