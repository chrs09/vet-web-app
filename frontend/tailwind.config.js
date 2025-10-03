/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ important for React
  ],
  theme: {
    extend: {
      colors: {
      primary: '#2F855A',   // green
      secondary: '#38B2AC', // teal
      accent: '#F6AD55',    // orange
      dark: '#2D3748',      // slate gray
      light: '#F7FAFC',     // background
    }
    },
  },
  plugins: [],
}
