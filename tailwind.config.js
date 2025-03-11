/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["estedad", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#417F56",
          100: "#B7D9D6",
          200: "#9FCDC9",
          300: "#87C1BB",
          400: "#6FB4AD",
          500: "#57A7A0",
          600: "#3F9B92",
          700: "#278F85",
          800: "#396F4B",
          900: "#315F41",
          1000: "#294F36",
          1100: "#21402B",
          1200: "#183020",
          1300: "#102016",
        },
        neutral: {
          100: "#FAFAFA",
          200: "#F6F6F6",
          300: "#EFEFEF",
          400: "#E1E1E1",
          500: "#D9D9D9",
          600: "#CBCBCB",
          700: "#ADADAD",
          800: "#909090",
          900: "#717171",
          1000: "#505050",
          1100: "#353535",
          1200: "#212121",
          1300: "#121212",
        },
        error: {
          light: "#ED2E2E",
          extralight: "#FFF2F2",
        },
        success: {
          DEFAULT: "#00966D",
          light: "#00BA88",
          extralight: "#F3FDFA",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
