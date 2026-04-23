import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EFE0',
          light: '#FAF6EC',
          dark: '#EDE4D0',
        },
        espresso: {
          DEFAULT: '#3D2817',
          dark: '#2A1810',
          light: '#5A3E2A',
        },
        sage: {
          DEFAULT: '#7A8F5A',
          dark: '#5E7245',
          light: '#9AAE7B',
        },
        rose: {
          DEFAULT: '#C67B6B',
          light: '#D89A8C',
          dark: '#A85F50',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
