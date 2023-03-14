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
        body: ["'Poppins', sans-serif"]
      },
      colors: {
        'primary': {
          500: "#00C2E8"
        },
        'brand-green': {
          500: '#5CBF6B'
        },
        'brand-orange': {
          500: '#FA803D'
        },
        'brand-black': {
          500: '#1E2327'
        },
        'brand-gray': {
          500: '#F6F6F9'
        }
      },
      borderWidth: {
        0.5: 0.5,
        1.5: 1.5,
      },
    },
  },
  plugins: [],
}
