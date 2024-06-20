import { css } from "styled-system/css";

export default function Button() {
  return (
    <button type="button" className={css({ color: "blue.500" })}>
      button
    </button>
  );
}
