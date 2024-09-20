/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: "#00776F",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Añade el plugin aquí
  ],
};
