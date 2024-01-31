/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.dark'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

