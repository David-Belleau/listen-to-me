/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'sans-serif']
      },
      colors: {
        'orange': '#FFa900',
        'white': '#F8F8F8',
        'black': '#3F4345'
      }
    },
  },
  plugins: [],
}
