/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./!(build|dist|.*)/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        beigeWhite : "#f4f4f5",
        snow: "#fffcf7",
        gainsboro: {
          "100": "#e2e4e9",
          "200": "#c7dee0",
        },
        darkslateblue: "#1a284e",
        lavender: {
          "100": "#ececfe",
          "200": "#d4d4e6",
        },
        blue: "#651fff",
        blueviolet: "#8c45ff",
        lightslategray: "#838696",
        black: "#000",
        dimgray: "#5c5f6e",
        gray: {
          "100": "#0e0f10",
          "200": "#0b0d0e",
        },
        lightcyan: "#e0f7fa",
        darkturquoise: {
          "100": "#00e5ff",
          "200": "#22d3ee",
        },
        darkslategray: {
          "100": "#3d4042",
          "200": "rgba(61, 64, 66, 0.09)",
        },
        mediumseagreen: "#34d399",
        floralwhite: "#fff7ed",
      },
      spacing: {},
      fontFamily: {
        "sofia-pro":  ['"Sofia Sans"', 'sans-serif'],
        "righteous-regular":['"Righteous"', 'sans-serif'],
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      mini: "15px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      xs: "12px",
      xl: "20px",
      "45xl": "64px",
      "32xl": "51px",
      "9xl": "28px",
      "3xl": "22px",
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      "37xl": "56px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};

