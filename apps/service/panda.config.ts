import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets", "design-system/preset"],
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/design-system/src/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "../../packages/styled-system",

  importMap: {
    css: "styled-system/css",
    recipes: "styled-system/recipes",
    patterns: "styled-system/patterns",
    jsx: "styled-system/jsx",
  },
});
