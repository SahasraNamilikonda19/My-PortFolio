/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0e0e0e",
        card: "#161616",
        cream: "#e8e2d6",
        muted: "#7a7570",
        accent: "#f5a623",
        border: "#2a2a2a",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
}