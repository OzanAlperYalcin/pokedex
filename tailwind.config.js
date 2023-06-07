/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"]
      },
      animation: {
        showup: 'showup 0.5s linear',
      },
      keyframes: {
        showup: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'},
        }
      }
    },
  },
  plugins: [],
}

