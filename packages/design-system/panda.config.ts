import { defineConfig } from "@pandacss/dev";
import { myPreset } from "./src/preset";

export default defineConfig({
  presets: ["@pandacss/dev/presets", myPreset],

  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  exclude: [],
  outExtension: "mjs",

  outdir: "../styled-system",

  importMap: {
    css: "styled-system/css",
    recipes: "styled-system/recipes",
    patterns: "styled-system/patterns",
    jsx: "/styled-system/jsx",
  },
  jsxFramework: "react",
});
