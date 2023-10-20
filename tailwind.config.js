/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#047857",
        dimWhite: "#171717",
        dimBlue: "#ccd6f6",
        green: "#caefc1"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // backgroundImage: {
      //   hero: "url('/images/universe.png')"
      // }
    },
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },
    },
  plugins: [],
}

