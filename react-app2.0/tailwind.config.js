/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      scale: {
        '101': '1.01',
      }
    },
  },
  plugins: [],
}

