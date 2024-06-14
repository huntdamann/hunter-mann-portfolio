/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}", "./src/observer.js", "./src/main.js", ],
  theme: {
   
    extend: {
      screens: {
        mobile: "375px",
  
        "mobile-2": "414px",
        samsung: "412px",
        small: "320px",
      },

      animation: {

        fade: 'fadeDown 0.5s ease-in',
        fadetwo: 'fadeUp 0.5s ease-in',
        fadethree: 'fadeLeft 1s ease-in',
        fademenu: 'fadeMenu 0.5s ease-in',
        fadebutton: 'fadeMenuButton 0.5s ease-in',
        open: 'menuOpen 0.5s ease-in',
        skill: 'fadeIn 0.5s',
        picture: 'animatePicture 2s linear'
      },
      keyframes: {

        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px) scale(0.9)'},
          '100%': {opacity: '1', transform: 'translateY(0px) scale(1)'}

        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(0px) scale(0.9)'},
          '100%': {opacity: '1', transform: 'translateY(-30px) scale(1)'}

        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px) scale(0.9)'},
          '80%': {opacity: '1', transform: 'translateX(10px) scale(1)'},
          '100%': {opacity: '1', transform: 'translateY(0px) scale(1)'}

        },
        menuOpen: {
          '0%': { opacity: '0', transform: 'translateX(300px)'},
          '100%': {opacity: '1', transform: 'translateX(0px)'}
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-40px) '},
          '100%': {opacity: '1', transform: 'translateY(0px) '}
        },
        fadeMenu: {
          '0%': { opacity: '0', transform: 'translateX(-50px) '},
          '100%': {opacity: '1', transform: 'translateX(0px) '}
        },
        fadeMenuButton: {
          '0%': { opacity: '0', transform: 'translateX(50px) '},
          '100%': {opacity: '1', transform: 'translateX(0px) '}
        },
        animatePicture: {
          '0%': { opacity: '0', transform: 'scale(0)'},
          '100%': {opacity: '1', transform: 'scale(1)'}
        },
        
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
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwindcss-animate"),
    
  ],
};
