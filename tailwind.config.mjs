/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        alhambra: {
          clay: '#9d4f2e',
          tile: '#1f6f68',
          night: '#14213d',
          sand: '#f5ead8',
          olive: '#6f7d46',
          wine: '#8a1538',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 24px 80px rgba(81, 43, 24, 0.18)',
      },
    },
  },
  plugins: [],
};
