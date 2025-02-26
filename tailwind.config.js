/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF3E0",
        primary: "#8B5E3B",
        secondary: "#E5C8A6",
        textMain: "#4A3F35",
        textSub: "#primary",
        button: "#D4A373",
        border: "#C8AD7F",
      },
      fontFamily: {
        custom: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
