/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        primaryDark: "#0B815A",
        primaryLight: "#3FC79A",
      },
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1367px",
      "2xl": "1600px",
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      heading: ["Inter", "sans-serif"],
      italic: ["Open Sans", "Inter", "sans-serif"],
    },
    fontSize: {
      sm: "13px",
      base: "15px",
      lg: "18px",
      xl: "20px",
    },
  },
  plugins: [],
};
