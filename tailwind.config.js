/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // netflixFont: 
    },
    extend: {
      colors: {
        'netflix-black': '#141414',
        "netflix-font-color": "#e5e5e5",
        "grey" : " rgba(109, 109, 110, 0.7)",
        "netflixRed" : "rgb(229, 9, 20)",
        "netflixinputBorderColor" : "light-dark(rgb(118, 118, 118), rgb(133, 133, 133));",
      },
    },
  },
  plugins: [],
}

