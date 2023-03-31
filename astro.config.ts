import compress from 'astro-compress';
import type { AstroUserConfig } from 'astro';

export default {
  integrations: [compress()],
} satisfies AstroUserConfig;
