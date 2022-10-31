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
        'gray': '#F8F8F8',
        'black': '#3F4345'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
