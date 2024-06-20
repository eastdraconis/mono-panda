import { definePreset } from "@pandacss/dev";

export const myPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            "50": { value: "#E4E5E8" },
          },
        },
      },
    },
  },
});
export default myPreset;
