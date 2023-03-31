import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
  content: ['./public/**/*.svg', './src/**/*.{astro,js,ts}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
