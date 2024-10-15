import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      fontFamily: {
        custom: ["manrope", "sans-serif"],
      },
      colors: {
        softCyan: "hsl(174, 77%, 80%)",
        strongCyan: "hsl(174, 86%, 45%)",
        lightGrayishRed: "hsl(14, 92%, 95%)",
        lightRed: "hsl(15, 100%, 70%)",
        paleBlue: "hsl(226, 100%, 87%)",
        white: "hsl(0, 0%, 100%)",
        veryPaleBlue: "hsl(230, 100%, 99%)",
        lightGrayishBlue: "hsl(224, 65%, 95%)",
        lightGrayishBlueToggle: "hsl(223, 50%, 87%)",
        grayishBlue: "hsl(225, 20%, 60%)",
        darkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
      backgroundImage: {
        header: "url('../src/components/assets/bg-pattern.svg')",
        circles: "url('../src/components/assets/pattern-circles.svg')",
      },
      backgroundPosition: {
        mobile: "center top 45%",
      },
      fontSize: {
        custom: ".9375rem",
      },
      backgroundSize: {
        half: "100% 50%",
      },
    },
  },
  plugins: [fluid],
};
