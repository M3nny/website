import { theme } from "./src/lib/config/general";
// @ts-ignore Could not find a declaration file for module '@tailwindcss/typography'.
import typography from "@tailwindcss/typography";
// @ts-ignore Could not find a declaration file for module 'daisyui'.
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0,
            },
            'ul > li:has(input[type="checkbox"])': {
              listStyle: "none",
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30,
            },
          },
        },
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        latte: {
          primary: "#1e66f5",
          secondary: "#ea76cb",
          accent: "#179299",
          neutral: "#dce0e8",
          "base-100": "#eff1f5",
          info: "#209fb5",
          success: "#40a02b",
          warning: "#df8e1d",
          error: "#d20f39",
        },
        mocha: {
          primary: "#89b4fa",
          secondary: "#f5c2e7",
          accent: "#94e2d5",
          neutral: "#11111b",
          "base-100": "#1e1e2e",
          info: "#74c7ec",
          success: "#a6e3a1",
          warning: "#f9e2af",
          error: "#f38ba8",
        },
      },
    ],
  },
};
