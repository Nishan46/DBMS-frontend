/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        adelia: ["Kanit", "sans-serif"],
        abhaya:['Abhaya Libre', 'serif'],
      },
    },
  },
  plugins: [],
}