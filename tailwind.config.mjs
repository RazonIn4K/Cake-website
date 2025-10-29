/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#fffaf7',
        'warm-cream': '#fff7f3',
        'soft-pink': '#f9d9d9',
        'warm-brown': '#6b3e26',
        'gold-accent': '#d4a373',
        'gold-hover': '#c58b54',
        'text-primary': '#3a2c2c',
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}