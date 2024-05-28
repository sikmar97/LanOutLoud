/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.9)",
        dimBlue: "rgba(49, 15, 62, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
