/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5A3DF5',
        secondary: '#7A89FF',
        ink: '#101828',
        muted: '#667085',
        surface: '#F7F7FB',
        'surface-dark': '#1a1b2e'
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }
    },
  },
  plugins: [],
}
