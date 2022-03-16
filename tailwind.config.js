module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pr: "#1252E9",
        sr: "#bbbbbb",
        tr: "#f4f4f4",
        hr: "#e2edff",
        nr:"#0D5FC9"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}