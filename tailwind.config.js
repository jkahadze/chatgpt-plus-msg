/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        fill: '-webkit-fill-available'
      }
    },
  },
  plugins: [require('tailwindcss-safe-area')],
}
