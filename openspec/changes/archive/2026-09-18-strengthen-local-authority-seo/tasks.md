## 1. Guide Authority Content

- [x] 1.1 Add shared localized guide authority content for Laura Hdez. León, including approved name, credential, training, experience, languages, Granada focus, and cultural approach, and verify the content can be imported without duplicating strings across pages
- [x] 1.2 Strengthen the Spanish and English authority pages with a full guide profile section and verify `/es/sobre-elyara/` and `/en/about-elyara/` visibly include the approved guide facts without mentioning a jurisdiction or license number
- [x] 1.3 Add concise guide-led trust snippets to selected Home and contact surfaces and verify the snippets do not replace primary tour discovery or WhatsApp/email inquiry actions

## 2. Structured Data

- [x] 2.1 Add `Person` JSON-LD generation for Laura Hdez. León connected to Elyara's business identity and verify the authority pages emit only visible or approved guide facts
- [x] 2.2 Update business/page JSON-LD relationships where needed and verify Elyara Tours Granada remains the primary business and publisher identity
- [x] 2.3 Inspect representative generated JSON-LD for authority, Home, and contact pages and verify no hidden-only ratings, review counts, awards, physical address, business hours, jurisdiction claim, or license number appears

## 3. Editorial Authorship

- [x] 3.1 Update the editorial content model or shared defaults to support Laura Hdez. León as a visible article author and verify existing organization-authored articles still remain valid
- [x] 3.2 Apply Laura-specific authorship to approved published articles where appropriate and verify article pages display the same author used in article structured data
- [x] 3.3 Add or preserve visible paths from Laura-authored editorial content to the authority context where appropriate and verify related tour, landing, and reservation actions remain present

## 4. SEO And Content Consistency

- [x] 4.1 Review updated localized copy for natural visitor-facing language and verify it avoids ranking guarantees, keyword stuffing, invented endorsements, and unsupported booking/payment claims
- [x] 4.2 Verify the public name `Laura Hdez. León` is used consistently in visible content, article metadata, and structured data
- [x] 4.3 Verify public URLs, canonical paths, hreflang alternates, sitemap inclusion, and existing navigation/footer links remain unchanged

## 5. Validation

- [x] 5.1 Run `npm run check` and verify Astro/content diagnostics report 0 errors
- [x] 5.2 Run `npm run build` and verify all localized static pages generate successfully
- [x] 5.3 Inspect representative built pages for `/es/sobre-elyara/`, `/en/about-elyara/`, one Home page, one contact page, and one Laura-authored article, and verify visible guide content and JSON-LD match the specs
- [x] 5.4 Run `openspec validate "strengthen-local-authority-seo" --type change --strict` and verify the OpenSpec change is valid after implementation
