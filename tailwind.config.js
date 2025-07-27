import rtl from 'tailwindcss-rtl';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bauhaus: ['"Futura PT"', "Poppins", "sans-serif"],
      },
      colors: {
        bauRed:   "#d90000",
        bauBlue:  "#0055a4",
        bauYellow:"#ffb800",
        bauGray:  "#ededed",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-rtl'),          // already installed earlier
  ],
};
