import { getPublishedBlogPosts, getBlogPostPath } from '@/lib/blog';
import { getCommercialToursPath, getContactPath, getTailorMadePath, locales } from '@/lib/i18n';
import { productionSiteUrl } from '@/lib/seo';
import { getPublishedTours, getTourPath } from '@/lib/tours';

const site = productionSiteUrl;

interface SitemapEntry {
  path: string;
  lastmod?: Date;
}

function url(path: string) {
  return new URL(path, site).toString();
}

function entry(item: SitemapEntry) {
  const lastmod = item.lastmod ? `<lastmod>${item.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
  return `  <url><loc>${url(item.path)}</loc>${lastmod}</url>`;
}

export async function GET() {
  const tours = await getPublishedTours();
  const posts = await getPublishedBlogPosts();
  const entries: SitemapEntry[] = [
    { path: '/' },
    ...locales.map((locale) => ({ path: `/${locale}/` })),
    ...locales.map((locale) => ({ path: `/${locale}/blog/` })),
    ...locales.map((locale) => ({ path: getContactPath(locale) })),
    ...locales.map((locale) => ({ path: getTailorMadePath(locale) })),
    ...locales.map((locale) => ({ path: getCommercialToursPath(locale) })),
    ...tours.map((tour) => ({ path: getTourPath(tour) })),
    ...posts.map((post) => ({ path: getBlogPostPath(post), lastmod: post.data.updatedDate ?? post.data.publishedDate })),
  ];
  const uniqueEntries = Array.from(new Map(entries.map((item) => [item.path, item])).values());
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueEntries.map(entry).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
