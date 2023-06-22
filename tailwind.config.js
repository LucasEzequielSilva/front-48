/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'parraph':'#999',
        'primary': '#fff',
        'secondary': '#081323'
      }
    },
  },
  plugins: [],
}