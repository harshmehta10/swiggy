/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-extraBold": ["Gilroy-ExtraBold"],
        "gilroy-light": ["Gilroy-Light"],
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { tranform: "tranlsateX(0%)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
