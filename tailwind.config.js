/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#F2F2F2',
        secondary: '#F2F2F2',
        blackTambo: '#000000',
        whiteTambo: '#FFFFFF',
      },
      fontSize: {
        small: '0.75rem',
        medium: '1.25rem',
        large: '1.5rem',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      }
    },
  },
  plugins: [],
}
