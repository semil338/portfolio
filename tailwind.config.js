/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "sans-serif"],
        cinzelD: ["Cinzel Decorative", "sans-serif"],
        montA: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          600: "#F9F9F9",
          800: "#D0DFFF",
        },
        purple: {
          DEFAULT: "#734b6d",
          200: "#C7B3CE",
          700: "#42275a",
        },
      },
    },
  },
  plugins: [],
};
