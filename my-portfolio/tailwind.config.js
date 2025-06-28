/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        "xs": "425px",
        "sm": "640px",
        "md": "767px",
      },
      colors: {
        primary: "#4731D3",
        secondary: "#CBF281",
        textLight: "#ffffff",
        textDark: "#000000",
        bgLight: "#FAFAFA",
        bgDark: "#252128",
        customgray: '#777777',
      },
    },
  },
  plugins: [],
};
