module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      work: "hsl(15, 100%, 70%)",
      play: "hsl(195, 74%, 62%)",
      study: "hsl(348, 100%, 68%)",
      exercise: "hsl(145, 58%, 55%)",
      social: "hsl(264, 64%, 52%)",
      selfcare: "hsl(43, 84%, 65%)",
      hover: "hsl(236, 41%, 34%)",
      neutral: {
        deepPurple: "hsl(246, 80%, 60%)",
        darkestBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        blue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
