/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
        OpenSansBold: ["OpenSans-Bold", "sans-serif"],
        OpenSansExtraBold: ["OpenSans-ExtraBold", "sans-serif"],
        OpenSansLight: ["OpenSans-Light", "sans-serif"],
        OpenSansMedium: ["OpenSans-Medium", "sans-serif"],
        OpenSansSemiBold: ["OpenSans-SemiBold", "sans-serif"],
      },
      colors: {
        success: {
          100: "#F0FFF4",
          200: "#C6F6D5",
          300: "#9AE6B4",
          400: "#68D391",
          500: "#38A169",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        danger: {
          100: "#FFF5F5",
          200: "#FED7D7",
          300: "#FEB2B2",
          400: "#FC8181",
          500: "#F56565",
          600: "#E53E3E",
          700: "#C53030",
          800: "#9B2C2C",
          900: "#742A2A",
        },
        general: "#008543",
        primary: "#c1b8b8",
      },
    },
  },
  plugins: [],
};
