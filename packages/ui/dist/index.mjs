// src/button.tsx
import { css } from "styled-system/css";
import { jsx } from "react/jsx-runtime";
function Button() {
  return /* @__PURE__ */ jsx("button", { type: "button", className: css({ color: "blue.500" }), children: "button" });
}
export {
  Button
};
