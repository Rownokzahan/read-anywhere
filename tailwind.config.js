/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#6047EC',
        'light-purple': '#6047ec1a',
        'gray': '#11111199',
        'gray-light': '#1111110D',
      }
    },
  },
  plugins: [],
}