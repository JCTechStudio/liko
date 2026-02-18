import { createGlobalThemeContract } from "@vanilla-extract/css";

export const utils = createGlobalThemeContract({
  shadow: {
    color: null,
  },

  outline: {
    color: {
      base: null,
      legacy: null,
    },
  },
}, (_value, path) => `${path.join("-")}`);
