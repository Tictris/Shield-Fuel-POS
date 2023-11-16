/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1'        : '#d79922',
        'dark-color1'   : '#c78c1f',
        'color2'        : '#eff3f6',
        'light-gray'    : '#b3b3b3',
        'darkColor2'    : '#beceda'
      },

      fontFamily: {
        Garmond: ['EB Gramond', 'san-serif']
      },

      spacing: {
      }
    },
  },
  plugins: [],
}