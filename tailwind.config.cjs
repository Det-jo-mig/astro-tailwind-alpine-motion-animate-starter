/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
        colors: {
            "blue": {
              50: "#DCEDFE",
              100: "#B9DBFE",
              200: "#73B8FC",
              300: "#2D94FB",
              400: "#0470DC",
              500: "#034E98",
              600: "#023D78",
              700: "#022E5A",
              800: "#011F3C",
              900: "#010F1E",
              950: "#00080F"
            },
            "red": {
                50: "#FEE6E8",
                100: "#FDC9CD",
                200: "#FB939B",
                300: "#F95D6A",
                400: "#F72638",
                500: "#E00819",
                600: "#B10615",
                700: "#85050F",
                800: "#59030A",
                900: "#2C0205",
                950: "#190103"
              },
              "pink": {
                50: "#FEF6F9",
                100: "#FCE9F1",
                200: "#F9D2E3",
                300: "#F6BCD5",
                400: "#F3A5C7",
                500: "#F090BA",
                600: "#E74B8F",
                700: "#CA1B67",
                800: "#871245",
                900: "#430922",
                950: "#240512"
              },
              "yellow": {
                50: "#FFFBE5",
                100: "#FFF7CC",
                200: "#FFEE99",
                300: "#FFE666",
                400: "#FFDD33",
                500: "#FFD301",
                600: "#CCAA00",
                700: "#998000",
                800: "#665500",
                900: "#332B00",
                950: "#191500"
              }
          },
          gridTemplateColumns: {
            '16': 'repeat(16, minmax(0, 1fr))',
          },
      spacing: {
        1000: "1000px",
        200: "500px",
        700: "740px",
        250: "350px",
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
