/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-extraBold": ["Gilroy-ExtraBold"],
        "gilroy-light": ["Gilroy-Light"],
      },
    },
  },
  plugins: [],
};
