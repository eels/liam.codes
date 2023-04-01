import compress from 'astro-compress';
import critters from 'astro-critters';
import serviceWorker from 'astrojs-service-worker';
import type { AstroUserConfig } from 'astro';

export default {
  integrations: [serviceWorker(), critters(), compress()],
} satisfies AstroUserConfig;
