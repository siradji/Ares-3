/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Gothic A1', sans-serif"]
      },
      colors: {
        'brand-green': {
          500: '#5CBF6B'
        },
        'brand-orange': {
          500: '#FA803D'
        },
        'brand-black': {
          500: '#1E2327'
        }
      }
    },
  },
  plugins: [],
}
