const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        "blue-turkey": "#1abc9c",
        "red-default": "#981F1F",
        "black-default": "#1D1D1B",
        "black-black": "#000000",
        "zinc-400": "#434343",
      },
      backgroundColor: {
        "custom-gray": "#F1F1F1",
      },
      fontSize: {
        title: "16pt",
        "title-md": "35px",
        body: "12pt",
        "body-md": "18px",
      },
      borderWidth: {
        '40': '10rem',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "material-icons": ["Material Symbols Outlined"],
        semibold: "FontSemibold",
        bold: "FontBold",
      },
      maxWidth: {
        vtex: "74rem",
      },
      backgroundImage: {
        leftSign: "url('../images/icons/left_sign.png')",
        rightSign: "url('../images/icons/right_sign.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".dnone": {
          display: "none",
        },
      });
    }),
  ],
};