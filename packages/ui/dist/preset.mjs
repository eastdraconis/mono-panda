// ../../node_modules/.pnpm/@pandacss+dev@0.41.0_typescript@5.4.5/node_modules/@pandacss/dev/dist/index.mjs
function definePreset(preset) {
  return preset;
}

// src/preset.ts
var myPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            "50": { value: "#E4E5E8" }
          }
        }
      }
    }
  }
});
var preset_default = myPreset;
export {
  preset_default as default,
  myPreset
};
