/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 30px 50px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0px 80px 50px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}