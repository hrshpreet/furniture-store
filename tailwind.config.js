/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white" : "#FFFFFF",
        "bloack" : "#000000",
        "bluish" : "#113976",
        "skinish" : "#F9EED2",
      }
    },
  },
  plugins: [],
}

