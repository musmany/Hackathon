/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Specify the path to your HTML file
    './style.css',  // If you have CSS files that use Tailwind
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#000000', // Add your custom color here
      },
      boxShadow: {
        'bottom-only': '0 2px 4px rgba(0, 0, 0, 0.1)', // Adjust values as needed (no semicolon)
      },
    },
  },
  plugins: [],
}
