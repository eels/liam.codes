import compress from 'astro-compress';
import serviceWorker from 'astrojs-service-worker';
import type { AstroUserConfig } from 'astro';

export default {
  integrations: [compress(), serviceWorker()],
} satisfies AstroUserConfig;
