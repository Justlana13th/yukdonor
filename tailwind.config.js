module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "donor-black": "#0A1329",
        "donor-red": "#E02401",
        "donor-yellow": "#FFEBA1",
        "donor-dark-yellow": "#D6AC10",
        "donor-green": "#95DAC1",
        "donor-dark-green": "#00B272",
        "donor-pink": "#FD6F96",
        "donor-dark-pink": "#DD013D",
        "donor-strawberry": "#FF645A",
      },
    },
    fontFamily: {
      Rubik: ["Rubik, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
