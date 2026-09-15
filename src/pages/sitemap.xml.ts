import { getPublishedBlogPosts, getBlogPostPath } from '@/lib/blog';
import { getAuthorityPath } from '@/lib/authority';
import { getCommercialToursPath, getContactPath, getDayTripsPath, getLegalTrustPath, getLocaleConfig, getTailorMadePath, legalTrustPageKeys, locales, type Locale } from '@/lib/i18n';
import { productionSiteUrl } from '@/lib/seo';
import { getPublishedSeoLandings, getSeoLandingPath } from '@/lib/seo-landings';
import { getPublishedTourEntries, getTourPath } from '@/lib/tours';

const site = productionSiteUrl;
const siteContentLastmod = new Date('2026-09-14T00:00:00.000Z');

interface SitemapEntry {
  path: string;
  lastmod?: Date;
  changefreq?: 'weekly' | 'monthly';
  priority?: string;
  alternates?: { locale: Locale; path: string }[];
}

function url(path: string) {
  return new URL(path, site).toString();
}

function escapeXml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

function hreflang(locale: Locale) {
  return getLocaleConfig(locale).htmlLang;
}

function entry(item: SitemapEntry) {
  const lastmod = item.lastmod ? `
    <lastmod>${item.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
  const changefreq = item.changefreq ? `
    <changefreq>${item.changefreq}</changefreq>` : '';
  const priority = item.priority ? `
    <priority>${item.priority}</priority>` : '';
  const alternates = item.alternates && item.alternates.length > 1
    ? item.alternates.map((alternate) => `
    <xhtml:link rel="alternate" hreflang="${hreflang(alternate.locale)}" href="${escapeXml(url(alternate.path))}" />`).join('')
      + `
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(url(item.alternates.find((alternate) => alternate.locale === 'es')?.path ?? item.path))}" />`
    : '';

  return `  <url>
    <loc>${escapeXml(url(item.path))}</loc>${lastmod}${changefreq}${priority}${alternates}
  </url>`;
}

function groupByTranslationKey<T extends { data: { translationKey: string } }>(items: T[]) {
  const groups = new Map<string, T[]>();

  for (const item of items) {
    const group = groups.get(item.data.translationKey) ?? [];
    group.push(item);
    groups.set(item.data.translationKey, group);
  }

  return groups;
}

export async function GET() {
  const tours = await getPublishedTourEntries();
  const posts = await getPublishedBlogPosts();
  const seoLandings = await getPublishedSeoLandings();
  const homeAlternates = locales.map((locale) => ({ locale, path: `/${locale}/` }));
  const blogAlternates = locales.map((locale) => ({ locale, path: `/${locale}/blog/` }));
  const contactAlternates = locales.map((locale) => ({ locale, path: getContactPath(locale) }));
  const authorityAlternates = locales.map((locale) => ({ locale, path: getAuthorityPath(locale) }));
  const tailorMadeAlternates = locales.map((locale) => ({ locale, path: getTailorMadePath(locale) }));
  const commercialAlternates = locales.map((locale) => ({ locale, path: getCommercialToursPath(locale) }));
  const dayTripsAlternates = locales.map((locale) => ({ locale, path: getDayTripsPath(locale) }));
  const legalTrustAlternates = legalTrustPageKeys.map((key) => locales.map((locale) => ({ locale, path: getLegalTrustPath(locale, key) })));
  const tourGroups = groupByTranslationKey(tours);
  const postGroups = groupByTranslationKey(posts);
  const seoLandingGroups = groupByTranslationKey(seoLandings);
  const entries: SitemapEntry[] = [
    { path: '/', lastmod: siteContentLastmod, changefreq: 'monthly', priority: '0.8' },
    ...locales.map((locale) => ({ path: `/${locale}/`, lastmod: siteContentLastmod, alternates: homeAlternates, changefreq: 'weekly' as const, priority: '1.0' })),
    ...locales.map((locale) => ({ path: `/${locale}/blog/`, lastmod: siteContentLastmod, alternates: blogAlternates, changefreq: 'weekly' as const, priority: '0.7' })),
    ...locales.map((locale) => ({ path: getContactPath(locale), lastmod: siteContentLastmod, alternates: contactAlternates, changefreq: 'monthly' as const, priority: '0.6' })),
    ...locales.map((locale) => ({ path: getAuthorityPath(locale), lastmod: siteContentLastmod, alternates: authorityAlternates, changefreq: 'monthly' as const, priority: '0.7' })),
    ...locales.map((locale) => ({ path: getTailorMadePath(locale), lastmod: siteContentLastmod, alternates: tailorMadeAlternates, changefreq: 'monthly' as const, priority: '0.8' })),
    ...locales.map((locale) => ({ path: getCommercialToursPath(locale), lastmod: siteContentLastmod, alternates: commercialAlternates, changefreq: 'monthly' as const, priority: '0.7' })),
    ...locales.map((locale) => ({ path: getDayTripsPath(locale), lastmod: siteContentLastmod, alternates: dayTripsAlternates, changefreq: 'monthly' as const, priority: '0.8' })),
    ...legalTrustPageKeys.flatMap((key, index) => locales.map((locale) => ({
      path: getLegalTrustPath(locale, key),
      lastmod: siteContentLastmod,
      alternates: legalTrustAlternates[index],
      changefreq: 'monthly' as const,
      priority: '0.3',
    }))),
    ...tours.map((tour) => ({
      path: getTourPath(tour),
      lastmod: siteContentLastmod,
      changefreq: 'monthly' as const,
      priority: tour.data.category === 'day-trip' ? '0.8' : '0.9',
      alternates: tourGroups.get(tour.data.translationKey)?.map((item) => ({ locale: item.data.locale, path: getTourPath(item) })),
    })),
    ...posts.map((post) => ({
      path: getBlogPostPath(post),
      lastmod: post.data.updatedDate ?? siteContentLastmod,
      changefreq: 'monthly' as const,
      priority: '0.6',
      alternates: postGroups.get(post.data.translationKey)?.map((item) => ({ locale: item.data.locale, path: getBlogPostPath(item) })),
    })),
    ...seoLandings.map((landing) => ({
      path: getSeoLandingPath(landing),
      lastmod: siteContentLastmod,
      changefreq: 'monthly' as const,
      priority: '0.8',
      alternates: seoLandingGroups.get(landing.data.translationKey)?.map((item) => ({ locale: item.data.locale, path: getSeoLandingPath(item) })),
    })),
  ];
  const uniqueEntries = Array.from(new Map(entries.map((item) => [item.path, item])).values());
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${uniqueEntries.map(entry).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
