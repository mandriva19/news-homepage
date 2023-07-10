module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      //change md to 725px
      md: "725px",
      lg: "1024px",
      // change xl to 1276
      xl: "1276px",
      "2xl": "1536px",
    },
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
