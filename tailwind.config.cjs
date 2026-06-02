/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['"Baloo 2"', 'Nunito', 'system-ui', 'sans-serif']
      },
      colors: {
        // Living-the-grid inspired warm "sticker" palette
        ink: { DEFAULT: '#2B1E0F', soft: '#6B5735', muted: '#9A8A64' },
        cream: { DEFAULT: '#FFF7E0', deep: '#FFEFC2' },
        paper: '#FFFDF6',
        sun: { soft: '#FFF2B8', DEFAULT: '#FED74B', deep: '#F5B91C' },
        coral: { DEFAULT: '#FF8C79', deep: '#F9555C' },
        pink: { soft: '#FFD6E3', DEFAULT: '#FE9DBE' },
        teal: { soft: '#C8F3E6', DEFAULT: '#00CEA2' },
        sky: { soft: '#D6F2FB', DEFAULT: '#78DEF4' },
        violet: { soft: '#E3D7FB', DEFAULT: '#A481F7' },
        lime: { soft: '#E6F6CF', DEFAULT: '#9DDC5A' },
        // Remap existing "brand-*" usage onto the new coral ramp so legacy classes adopt the new look
        brand: {
          50: '#FFF1ED',
          100: '#FFE0D9',
          200: '#FFC8BD',
          300: '#FFA899',
          400: '#FF8C79',
          500: '#FB6F60',
          600: '#F9555C',
          700: '#E03E48',
          800: '#B5313a',
          900: '#8C262E'
        }
      },
      boxShadow: {
        // chunky offset "sticker" shadows in ink
        sticker: '3px 4px 0 0 #2B1E0F',
        'sticker-sm': '2px 3px 0 0 #2B1E0F',
        'sticker-lg': '6px 7px 0 0 #2B1E0F',
        soft: '0 10px 30px -12px rgba(43, 30, 15, 0.30)'
      },
      borderRadius: {
        blob: '2rem'
      }
    }
  },
  plugins: []
};
