/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
      colors: {
        bg: '#0f172a',
        surface: '#1e293b',
        primary: '#10b981',
        text: '#f8fafc',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
}