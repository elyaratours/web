## ADDED Requirements

### Requirement: Verified Google Business Profile publication
The system SHALL publish the verified Google Business Profile URL `https://maps.app.goo.gl/9bterUh4xSYH5jCf6` as an approved public local-trust profile only where the link is visible to visitors.

#### Scenario: Visitor sees verified Google profile link
- **WHEN** a visitor reads a public trust, contact, footer, or authority surface where external profiles are shown
- **THEN** the page displays a visible link to `https://maps.app.goo.gl/9bterUh4xSYH5jCf6`
- **AND** the page does not claim review counts, rating values, rankings, awards, or verification details beyond the approved visible profile link

#### Scenario: Crawler reads business profile structured data
- **WHEN** a crawler reads business structured data on a page where the verified Google profile is visibly linked
- **THEN** the business `sameAs` data may include `https://maps.app.goo.gl/9bterUh4xSYH5jCf6`
- **AND** the structured data does not include hidden-only Google profile claims, aggregate ratings, review counts, awards, business hours, physical address, or unsupported credentials

### Requirement: Approved real traveler reviews
The system SHALL publish only real traveler reviews that are approved for public use, visible to visitors, and represented without inventing ratings or unsupported platform facts.

#### Scenario: Approved review entries are available
- **WHEN** one or more approved real review entries are configured for publication
- **THEN** public review content displays the approved review text, approved display attribution, source as Google Business Profile, and original language or approved translation state
- **AND** each visible review remains traceable to an approved source entry rather than placeholder, generated, or anonymous fake content

#### Scenario: Review translation is used
- **WHEN** a review is displayed in a locale different from its original language
- **THEN** the page indicates or stores that the displayed text is an approved translation or localized rendering of the original review
- **AND** the translation does not add claims, ratings, route details, or endorsements absent from the approved source text

#### Scenario: Review data is incomplete or unapproved
- **WHEN** a review lacks approved text, approved attribution, source, publication approval, or translation permission when needed
- **THEN** the system does not display that review publicly
- **AND** the review is not emitted in metadata, structured data, sitemap entries, or hidden machine-readable content

### Requirement: Review structured data constraints after real reviews
The system SHALL keep review-related structured data conservative even after real reviews are approved.

#### Scenario: Crawler reads pages with visible real reviews
- **WHEN** a public page displays approved real review excerpts
- **THEN** structured data may omit review nodes entirely or represent only visible approved review text and attribution when it can be done truthfully
- **AND** it does not invent `AggregateRating`, rating values, review counts, review platforms, reviewer details, or business facts not visible on the page

#### Scenario: Approved rating summary is unavailable
- **WHEN** no approved public rating summary has been provided for publication
- **THEN** the site does not display or emit aggregate star ratings, rating values, or review counts

### Requirement: Ethical review request flow
The system SHALL support requesting honest voluntary post-tour feedback through approved external channels without incentives or scripted claims.

#### Scenario: Elyara requests feedback after a real tour
- **WHEN** Elyara sends a review request after a completed visit
- **THEN** the request asks for honest voluntary feedback and may point to the verified Google Business Profile
- **AND** the request does not offer incentives, pressure the visitor, ask for a specific rating, or ask the visitor to mention claims that were not part of their real experience
