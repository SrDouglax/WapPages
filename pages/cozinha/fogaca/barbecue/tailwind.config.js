/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "blue-turkey": "#1abc9c",
        red: {
          default: "#981F1F",
        },
        black: {
          default: "#1D1D1B",
          black: "#000000",
        },
      },
      backgroundColor: {
        "custom-gray": "#F1F1F1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "material-icons": ["Material Symbols Outlined"],
      },
      maxWidth: {
        vtex: "74rem",
      },
      backgroundImage: {
        leftSign: "url('./images/icons/left_sign.png')",
        rightSign: "url('./images/icons/right_sign.png')",
      },
    },
  },
  plugins: [],
};
