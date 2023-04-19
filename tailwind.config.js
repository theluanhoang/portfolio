const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
  {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        'mymd': '991px',
        'mylg': '1142px',
        'sm-[580]': '570px',
        'xs-[320px]': '320px'
      },
      colors: {
        'my-yellow': '#FFB400'
      }
    }
  },
  plugins: [],
}