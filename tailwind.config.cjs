/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#1C111F',
        inputbg: '#312432',
        gpurple: '#B52AAB',
      }
    },
  },
  plugins: [],
}
