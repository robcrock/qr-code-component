const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        femBlue: {
          100: "#2c7dfa",
          200: "#3685ff",
        },
        femNavy: "#1f314f",
        femGrey: {
          100: "#D5E1EF",
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
