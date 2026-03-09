/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0A0A0F',
        'space-secondary': '#12121A',
        'space-tertiary': '#1A1A24',
        'accent-blue': '#00A8FF',
        'accent-silver': '#C0D0E0',
        'accent-cyan': '#00D4FF',
        'accent-green': '#00FF88',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
