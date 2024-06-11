/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "link": "#2D315E",
        "light": "#2D312626ff"
      },
      backgroundImage: {
        'home-img': "url('assets/home.svg')",
        'about-img': "url('assets/about-us.svg')"
      }
    },
  },
  plugins: [],
};
