import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: 'https://shop.scaus.art',
	integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  experimental: {
    contentLayer: true
  }
});