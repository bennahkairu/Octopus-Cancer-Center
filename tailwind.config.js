/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        lg: "2rem",
      },
       screens: {
        '2xl': '1180px',
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}