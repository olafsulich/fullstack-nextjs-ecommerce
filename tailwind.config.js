module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { cursor: ["hover", "focus"] },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
