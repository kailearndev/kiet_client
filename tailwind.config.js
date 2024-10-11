module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: "afacad",
      },
    },
  },
  daisyui: {
    themes: ["dim", "retro"],
  },
  plugins: [require("tailwindcss-animated"), require("daisyui")],
};
