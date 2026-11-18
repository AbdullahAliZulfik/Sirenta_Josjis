/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sireta-dark': '#0F172A',
        'sireta-card': '#1E293B',
        'sireta-border': '#334155',
        'sireta-orange': '#F97316',
        'sireta-green': '#10B981',
      }
    },
  },
  plugins: [],
}