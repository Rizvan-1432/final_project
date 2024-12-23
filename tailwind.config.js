const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-black': {
          100: '#1D1D1D',
          200: '#0E0E0E'
        },
        'my-gray': '#A5A5A5',
        'my-red': '#C53720',
        'my-green': '#3CC051'
      },
      fontFamily: {
        Geometria: 'Geometria'
      },
      backgroundImage: {
        header: "url('./assets/img/banner.png')",
      }
    },
  },
  plugins: [],
}

