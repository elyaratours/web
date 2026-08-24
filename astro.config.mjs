// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL ?? 'https://web-elyara.example';

export default defineConfig({
  output: 'static',
  site,
  base: '/',
});
