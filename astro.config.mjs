// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL ?? 'https://elyaratours.com';

if (site.includes('web-elyara.example')) {
  throw new Error('PUBLIC_SITE_URL must use the production domain, not web-elyara.example.');
}

export default defineConfig({
  output: 'static',
  site,
  base: '/',
});
