/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EEDC82",
        "dark": "#36454f",
        "light": "#1e90ff",
        "dark-blue": "#000000",
        "lightBlue": "#84A7BA",
      },
      fontFamily: {
        
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        hevlectica: ["Hevlectica"],
        cursive: ["Allura", "cursive"],
        cursive2: ["Pacifico", "cursive"],
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
}