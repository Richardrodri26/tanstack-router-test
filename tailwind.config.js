/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--main_color)',
        "primary-opacity": 'var(--opacity_main_color)',
        "primary-scroll-hover": "var(--scroll_hover)",
        "primary-scroll": "var(--scroll)",
        "primary-a2": "var(--main_color_a2)",
        "primary-contrary": "var(--contrary_main_color)",
        "stroke-disable" : "var(--stroke_disabled)",
        "reverse-stroke": "var(--reverse_stroke_color)",
        "border-color": "var(--border_color)",
        "info-color": "var(--info_color)"
      },
      spacing: {
        "navBar-width": "260px",
      },
      fontFamily: {
        'monserrat': ['Montserrat', 'sans-serif'],
        'work-sans' : ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}