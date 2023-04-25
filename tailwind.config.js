/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,js}",
    "./components/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        'header-blue': '#0C121B',
        'grey-blue': '#202638',
        'primary-pink': '#FFB39B',
        'light-blue': '#505C7F'
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

