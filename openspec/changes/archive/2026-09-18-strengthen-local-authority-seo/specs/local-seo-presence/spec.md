## ADDED Requirements

### Requirement: Guide-led authority profile
The system SHALL publish approved guide identity, training, credential, experience, language, and Granada-focus facts as visible visitor-facing trust content without introducing unsupported business or ranking claims.

#### Scenario: Visitor reads the authority page guide profile
- **WHEN** a visitor opens the localized authority page
- **THEN** the page identifies Laura Hdez. León as the public guide behind Elyara
- **AND** it states that she is a guía oficial de turismo or equivalent localized wording
- **AND** it states her approved training background in International Relations in English and Higher Technician training in Guide, Information and Tourist Assistance
- **AND** it explains that she has worked for years as a guide in different Spanish cities and now guides in Granada, her city
- **AND** it explains that tours are available in Spanish and English with more languages planned in the future

#### Scenario: Visitor reads guide approach content
- **WHEN** a visitor reads guide-led trust content on the authority page
- **THEN** the content presents Laura's interest in history, art, culture, and traditions as the basis for helping visitors understand Granada
- **AND** the content remains visitor-facing and service-relevant rather than a generic keyword list

#### Scenario: Visitor reads short trust snippets
- **WHEN** guide-led trust snippets appear on Home, contact, landing, or tour discovery surfaces
- **THEN** each snippet remains concise and links or points visitors toward the fuller authority context when appropriate
- **AND** the snippets do not displace primary tour discovery or WhatsApp/email inquiry actions

### Requirement: Guide person structured data
The system SHALL expose truthful structured data for Laura Hdez. León as a guide person only when the represented facts are visible to visitors or approved shared business facts.

#### Scenario: Search engine reads the authority page guide data
- **WHEN** a crawler reads the localized authority page
- **THEN** the page exposes a `Person` structured data node for Laura Hdez. León
- **AND** the person node represents approved visible facts such as guide role, language support, training, cultural-tourism expertise, and relationship with Elyara
- **AND** the person node is connected to Elyara's public business entity without replacing the business identity

#### Scenario: Search engine reads pages without full guide profile
- **WHEN** a crawler reads a page that contains only a short guide-led trust snippet
- **THEN** any structured guide data on that page remains limited to facts visible on that page or approved site-wide facts
- **AND** the page does not emit hidden-only credentials, awards, ratings, review counts, physical address, business hours, or ranking claims

### Requirement: Approved credential publication constraints
The system SHALL publish Laura Hdez. León's official tourism guide credential consistently while avoiding more specific jurisdiction, license, award, or endorsement claims that are not approved for publication.

#### Scenario: Public content mentions the approved credential
- **WHEN** public copy or structured data references Laura's credential
- **THEN** it may identify her as `guía oficial de turismo` or equivalent localized wording
- **AND** it does not claim a specific jurisdiction, license number, award, association membership, review rating, or third-party endorsement unless that fact is separately approved and visible

#### Scenario: Public content discusses search performance
- **WHEN** authority or SEO-oriented content is published
- **THEN** it does not promise first-page placement, guaranteed rankings, or search engine preference
- **AND** it keeps trust claims grounded in visible approved facts about the guide, services, contact channels, and Granada focus
