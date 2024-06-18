/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      nunito: ["nunito", "sans-serif"],
      "nunito-light": ["nunito-light", "sans-serif"],
      "nunito-bold": ["nunito-bold", "sans-serif"],
      "nunito-italic": ["nunito-italic", "sans-serif"],
      "nunito-semibold": ["nunito-semibold", "sans-serif"],
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
