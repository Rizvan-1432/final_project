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
        'my-gray': {
          100: '#EDEDED',
          200: '#A5A5A5'
        },
        'my-red': '#C53720',
        'my-green': '#3CC051',
        'my-white': '#FFFFFF'
      },
      fontFamily: {
        'Geometria': ['Geometria', 'sans-serif']
      },
      backgroundImage: {
        'header': "url('./src/assets/img/banner.png')",
        carPhone: "url('./assets/img/carphone.png')",
        services: "url('./assets/img/services.png')",
        company: "url('./assets/img/bgcompany.png')",
        footer: "url('./assets/img/bgfooter.png')",
      },
      backgroundColor: {
        'my-black-100': '#1D1D1B',
        'my-red': '#C53720',
      },
      spacing: {
        '22': '88px',
        '36': '144px',
        '42': '168px',
        '52': '200px',
        '56': '228px',
        '69': '264px',
        '70': '272px',
        '71': '282px',
        '75': '338px',
        '90': '356px',
        '91': '360px',
        '97': '400px',
        '98': '456px',
        '100': '500px',
        '104': '552px',
        '105': '554px',
        '108': '600px',
        '110': '622px',
        '120': '840px',
        '164': '1640px',
        '128': '1128px'
      }
    },
  },
  plugins: [],
}

