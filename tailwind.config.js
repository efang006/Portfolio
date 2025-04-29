/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files for Tailwind to scan
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#70e1f5',  // Custom hex color
          600: '#ffd194',  // Darker shade for hover
        },
        accent: '#FF6B6B',
        background: '#F5F7FA',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Add DM Sans as the primary sans-serif font
      },
    },
  },
  plugins: [],
};