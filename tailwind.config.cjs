/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      monte: [`'Montserrat', sans-serif`],
      poppins: [`'Poppins', sans-serif`],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
