/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        silkscreen: ["Silkscreen", "monospace"],
      },
    },
  },
  plugins: [],
};
