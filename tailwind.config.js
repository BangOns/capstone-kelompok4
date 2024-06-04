/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
