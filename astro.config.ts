import tailwind from '@astrojs/tailwind';
import type { AstroUserConfig } from 'astro';

export default {
  integrations: [tailwind()],
} satisfies AstroUserConfig;
