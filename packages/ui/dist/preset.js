"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/preset.ts
var preset_exports = {};
__export(preset_exports, {
  default: () => preset_default,
  myPreset: () => myPreset
});
module.exports = __toCommonJS(preset_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  myPreset
});
