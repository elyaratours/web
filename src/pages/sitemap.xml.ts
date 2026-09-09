import { getPublishedBlogPosts, getBlogPostPath } from '@/lib/blog';
import { getAuthorityPath } from '@/lib/authority';
import { getCommercialToursPath, getContactPath, getDayTripsPath, getTailorMadePath, locales, type Locale } from '@/lib/i18n';
import { productionSiteUrl } from '@/lib/seo';
import { getPublishedSeoLandings, getSeoLandingPath } from '@/lib/seo-landings';
import { getPublishedTourEntries, getTourPath } from '@/lib/tours';

const site = productionSiteUrl;

interface SitemapEntry {
  path: string;
  lastmod?: Date;
  alternates?: { locale: Locale; path: string }[];
}

function url(path: string) {
  return new URL(path, site).toString();
}

function escapeXml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

function entry(item: SitemapEntry) {
  const lastmod = item.lastmod ? `
    <lastmod>${item.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
  const alternates = item.alternates && item.alternates.length > 1
    ? item.alternates.map((alternate) => `
    <xhtml:link rel="alternate" hreflang="${alternate.locale}" href="${escapeXml(url(alternate.path))}" />`).join('')
    : '';

  return `  <url>
    <loc>${escapeXml(url(item.path))}</loc>${lastmod}${alternates}
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
  const tourGroups = groupByTranslationKey(tours);
  const postGroups = groupByTranslationKey(posts);
  const seoLandingGroups = groupByTranslationKey(seoLandings);
  const entries: SitemapEntry[] = [
    { path: '/' },
    ...locales.map((locale) => ({ path: `/${locale}/`, alternates: homeAlternates })),
    ...locales.map((locale) => ({ path: `/${locale}/blog/`, alternates: blogAlternates })),
    ...locales.map((locale) => ({ path: getContactPath(locale), alternates: contactAlternates })),
    ...locales.map((locale) => ({ path: getAuthorityPath(locale), alternates: authorityAlternates })),
    ...locales.map((locale) => ({ path: getTailorMadePath(locale), alternates: tailorMadeAlternates })),
    ...locales.map((locale) => ({ path: getCommercialToursPath(locale), alternates: commercialAlternates })),
    ...locales.map((locale) => ({ path: getDayTripsPath(locale), alternates: dayTripsAlternates })),
    ...tours.map((tour) => ({
      path: getTourPath(tour),
      alternates: tourGroups.get(tour.data.translationKey)?.map((item) => ({ locale: item.data.locale, path: getTourPath(item) })),
    })),
    ...posts.map((post) => ({
      path: getBlogPostPath(post),
      lastmod: post.data.updatedDate ?? post.data.publishedDate,
      alternates: postGroups.get(post.data.translationKey)?.map((item) => ({ locale: item.data.locale, path: getBlogPostPath(item) })),
    })),
    ...seoLandings.map((landing) => ({
      path: getSeoLandingPath(landing),
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
