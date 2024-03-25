const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // add the css variable and include fallback fonts from tailwind default theme
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        fem_blue: {
          100: "#2c7dfa",
          200: "#3685ff",
        },
        fem_navy: "#1f314f",
        fem_grey: {
          100: "#d5e1ef",
          200: "#7d889e",
        },
      },
      fontSize: {
        base: "0.9375rem",
        lg: "1.375rem",
      },
      borderRadius: {
        xs: "0.625rem",
        sm: "1.25rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
