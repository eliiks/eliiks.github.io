/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./js/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        sans : ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

