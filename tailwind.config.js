/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
      },
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      heading: ["Inter", "sans-serif"],
      italic: ["Open Sans", "Inter", "sans-serif"],
    },
  },
  plugins: [],
};
