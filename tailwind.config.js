/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D315E",
        secondary: "#EFEDFF",
        accent: "#532b7b",
        light: "#2D312626ff",
        pink_light: "#e2cdf9",
      },
      backgroundImage: {
        "home-img": "url('assets/home.svg')",
        "background-img": "url('assets/background.svg')",
        "about-img": "url('assets/about-us.svg')",
        "slide-1": "url('assets/product-1-slide.svg')",
        "slide-2": "url('assets/product-2-slide.svg')"
      },
    },
  },
  plugins: [],
};
