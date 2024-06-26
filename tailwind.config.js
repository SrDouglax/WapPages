const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "zinc-400": "#434343",
        "black-default": "#1D1D1B",
      },
      fontSize: {
        title: "16pt", // Adicione tamanhos de fonte personalizados
        "title-md": "35px",
        body: "12pt",
        "body-md": "18px",
      },
    },
    fontFamily: {
      semibold: "FontSemibold",
      bold: "FontBold",
    },
    fontWeight: {},
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
