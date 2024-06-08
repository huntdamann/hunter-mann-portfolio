/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "375px",

      "mobile-2": "414px",
      samsung: "412px",
      small: "320px",
    },
    extend: {

      animation: {

        fade: 'fadeDown 0.5s ease-in',
        fadetwo: 'fadeUp 0.5s ease-in',
        fadethree: 'fadeLeft 1s ease-in',
        open: 'menuOpen 0.5s ease-in'
      },
      keyframes: {

        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px) scale(0.9)'},
          '100%': {opacity: '1', transform: 'translateY(0px) scale(1)'}

        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(0px) scale(0.9)'},
          '100%': {opacity: '1', transform: 'translateY(-30pxpx) scale(1)'}

        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px) scale(0.9)'},
          '80%': {opacity: '1', transform: 'translateX(10px) scale(1)'},
          '100%': {opacity: '1', transform: 'translateY(0px) scale(1)'}

        },
        menuOpen: {
          '0%': { opacity: '0', transform: 'translateY(300px)'},
          '100%': {opacity: '1', transform: 'translateY(0px)'}
        }
        
      },



      fontFamily: {
        main: ["Roboto", "sans-serif"],
        engineer: ["Kanit", "sans-serif"]
      },
      colors: {
        "logo-red": "#D72323",
      },
      backgroundImage: {
        "star-icon":
          "url('https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000')",
      },
    },
  },
  plugins: [],
};
