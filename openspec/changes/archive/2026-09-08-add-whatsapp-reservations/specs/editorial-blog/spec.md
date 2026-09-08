## MODIFIED Requirements

### Requirement: Editorial-to-tour discovery
The system SHALL allow editorial articles to connect readers to relevant published tours, commercial discovery pages, and external WhatsApp and email reservation actions without introducing an internal booking or payment flow.

#### Scenario: Article references related tours
- **WHEN** a published article is associated with one or more published tours in the same language
- **THEN** the article detail page presents links or calls to action to those related tour pages
- **AND** those links are visible page content rather than metadata-only relationships

#### Scenario: Article supports a commercial search intent
- **WHEN** a published article relates to a topic served by a localized commercial tour landing page
- **THEN** the article detail page provides a contextual link to that commercial landing page for the same locale

#### Scenario: Visitor follows a reservation call to action from editorial content
- **WHEN** a visitor activates a reservation-oriented action from editorial content that is not tied to one concrete tour
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled inquiry text rather than an internal checkout or booking conversation
- **AND** the selected email action opens a clean `mailto:elyaratours@gmail.com` link rather than an internal checkout or booking conversation
- **AND** the email action does not prefill subject or body text

#### Scenario: Visitor reserves a specific related tour
- **WHEN** a visitor reaches a specific related tour and activates that tour's reservation action
- **THEN** the system offers external WhatsApp and email reservation actions for the selected tour rather than an internal checkout or booking conversation
- **AND** the WhatsApp action identifies the selected tour name in localized prefilled text
- **AND** the email action opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name
