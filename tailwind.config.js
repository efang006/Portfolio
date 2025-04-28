/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#70e1f5',  // Your custom hex color
          600: '#ffd194',  // Darker shade for hover
        },
        accent: '#FF6B6B',
        background: '#F5F7FA',
      }
    },
  },
  plugins: [],
};
