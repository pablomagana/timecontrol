module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        131: "131px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&  *");
    },
  ],
};
