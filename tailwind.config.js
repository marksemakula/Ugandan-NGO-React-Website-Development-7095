/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6700',
        secondary: '#6B7280',
        accent: '#F97316',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}