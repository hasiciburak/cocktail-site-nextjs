/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "bar-background": "url('/assets/img/welcome-page-bg.jpg')",
      },
      // Custom Font Families
      fontFamily: {
        "header-serif": ["'Playfair Display', serif"],
        abril: ["'Abril Fatface', cursive"],
      },
    },
  },
  plugins: [],
};
