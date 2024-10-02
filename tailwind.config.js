/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tint: {
          DEFAULT: 'rgba(255, 0, 0, 0.5)', // Example tint color (red with 50% opacity)
          light: 'rgba(255, 0, 0, 0.3)', // Lighter tint
          dark: 'rgba(255, 0, 0, 0.7)', // Darker tint
        },
      },
    },
  },
  plugins: [],
}
