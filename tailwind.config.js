/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1"
      }
    }
  },
  plugins: []
}
module.exports = {
  theme: {
    extend: {
      animation: {
        'shine': 'shine 0.8s ease-in-out',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
};