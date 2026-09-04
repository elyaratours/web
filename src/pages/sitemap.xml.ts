import { getPublishedBlogPosts, getBlogPostPath } from '@/lib/blog';
import { getContactPath, getTailorMadePath, locales } from '@/lib/i18n';
import { getPublishedTours, getTourPath } from '@/lib/tours';

const site = 'https://elyaratours.com';

function url(path: string) {
  return new URL(path, site).toString();
}

function entry(path: string) {
  return `  <url><loc>${url(path)}</loc></url>`;
}

export async function GET() {
  const tours = await getPublishedTours();
  const posts = await getPublishedBlogPosts();
  const paths = [
    '/',
    ...locales.map((locale) => `/${locale}/`),
    ...locales.map((locale) => `/${locale}/blog/`),
    ...locales.map((locale) => getContactPath(locale)),
    ...locales.map((locale) => getTailorMadePath(locale)),
    ...tours.map((tour) => getTourPath(tour)),
    ...posts.map((post) => getBlogPostPath(post)),
  ];
  const uniquePaths = Array.from(new Set(paths));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePaths.map(entry).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
