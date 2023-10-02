/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1475px",
    },
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
  darkMode: "class",
};
