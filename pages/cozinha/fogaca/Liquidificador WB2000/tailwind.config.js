/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#981F1F',
        },
        zinc: {
          primary: '#434343',
        },
        'gray-light': {
          primary: '#E5E5E6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        uni_sans: ['Uni Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
