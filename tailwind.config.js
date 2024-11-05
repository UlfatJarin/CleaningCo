/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif',],
      // font-family: "Roboto", sans-serif;
    },
    extend: {
      colors: {
        'blackc': '#000000',
        'whitec': '#FFFFFF',
        'main': '#2B8761',
        'lightmain': '#00D97F',
        'secondary': '#515854',
        'black2nd': '#0C261A',
        
      },
    },
  },
  plugins: [],
}