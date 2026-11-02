/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        brand: {
          50: "#e8f8ff",
          100: "#d6f2ff",
          200: "#ade5ff",
          300: "#7cd2ff",
          400: "#45b4ff",
          500: "#2096ff",
          600: "#0b77e6",
          700: "#085db4",
          800: "#0a4c8d",
          900: "#0d3f72"
        },
        lux: {
          ink: "#06070d",
          night: "#0b0d17",
          gold: "#ddbf5d",
          champagne: "#f3e3a6",
          emerald: "#50b444"
        }
      },
      boxShadow: {
        glow: "0 10px 40px -12px rgba(59, 130, 246, 0.35)"
      }
    }
  },
  plugins: []
};
