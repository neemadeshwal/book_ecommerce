/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        peach:"#f44344",
        // peach:"#e5a186",
        darkPeach:"#e38a66",

      }
    },
    fontFamily:{
      poppins:["Poppins","sans-serif"],
      roboto:["Roboto","sans-serif"]
    }
  },
  plugins: [],
}

