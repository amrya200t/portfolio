/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroNoise:
          "linear-gradient(to right bottom, rgba(179,3,174, 0.35), rgba(18,143,199, 0.35)), url(/src/assets/images/noise.svg),url('/src/assets/images/minimalist_workspace.jpg')",
        heroOriginal:
          "linear-gradient(to right bottom, rgba(15,23,42, 0.55), rgba(23,51,79, 0.55)), url('/src/assets/images/minimalist_workspace original.jpg')",
        headerBG:
          "linear-gradient(to right bottom, rgba(15,23,42, 0.95), rgba(15,23,42, 0.95)), url(https://grainy-gradients.vercel.app/noise.svg)",
      },
      colors: {
        gradientPink: "rgba(179,3,174, 0.35)",
        gradientBlue: "rgba(18,143,199, 0.35)",
        light: "rgb(226, 232, 240)",
        grey: "rgb(148, 163, 184)",
        dark: "#333",
        headerLight: "rgba(8,174,174, 0.85)",
        headerDark: "rgba(15,23,42, 0.95)",
        lightGold: "rgb(255, 209, 153)",
        gold: "rgb(251,157,38)",
        darkGold: "rgb(251, 107, 0)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
