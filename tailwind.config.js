module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(35, 77%, 62%)",
        primaryGrayishBlue: "hsl(233, 8%, 79%)",
        primaryDarkGrayishBlue: "hsl(236, 13%, 42%)",
        primaryVeryDarkBlue: "hsl(240, 100%, 5%)",
        primaryOffWhite: "hsl(36, 100%, 99%)",
        primaryRed: "hsl(5, 85%, 63%)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
