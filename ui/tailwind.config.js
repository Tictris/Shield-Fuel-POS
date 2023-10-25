/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1'  : '#d79922',
        'color2'  : '#eff3f6',
      },

      fontFamily: {
        Garmond: ['EB Gramond', 'san-serif']
      }
    },
  },
  plugins: [],
}