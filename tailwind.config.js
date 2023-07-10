/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/one.jpg')",
        'construction-pattern': "url('/images/construction.jpg')",
        'about-pattern': "url('/images/three.jpg')",
        'mobile-pattern': "url('/images/pilger.jpg')",
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./public/master.css --watch
// npx tailwindcss -o build.css --minify
