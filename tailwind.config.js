/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-black': '#141414',
        "netflix-font-color": "#e5e5e5",
        "grey" : " rgba(109, 109, 110, 0.7)",
      },
    },
  },
  plugins: [],
}

