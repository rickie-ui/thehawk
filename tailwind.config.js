/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/one.jpg')",
        'construction-pattern': "url('/images/construction.jpg')",
        'about-pattern': "url('/images/three.jpg')",
      },
    },
  },
  plugins: [],
};
