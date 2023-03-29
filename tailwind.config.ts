import type { Config } from 'tailwindcss';

export default {
  content: ['./public/**/*.svg', './src/**/*.{astro,js,ts}'],
  plugins: [],
  theme: {},
} satisfies Config;
