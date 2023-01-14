/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['iranyekan'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
