/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: (() => {
        const colors = [
          "red",
          "yellow",
          "green",
          "blue",
          "indigo",
          "purple",
          "pink",
          "rose",
          "light-blue",
          "cyan",
          "teal",
          "lime",
          "light-green",
        ];
        const shades = ["300", "400", "500"];
        const combinations = [];

        for (const color of colors) {
          for (const shade of shades) {
            combinations.push(`text-${color}-${shade}`);
          }
        }

        return combinations;
      })(),
    },
  },
  theme: {
    extend: {},
  },
};
