/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#d4af37",
        "primary-hover": "#b5952f",
        "secondary": "#0f172a",
        "accent-red": "#ef4444",
        "background-light": "#ffffff",
        "background-dark": "#111111",
        "surface-dark": "#1a1a1a",
        "surface-darker": "#000000",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
        "lato": ["Lato", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "2px",
        "xl": "4px",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

