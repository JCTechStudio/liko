import { createGlobalTheme } from "@vanilla-extract/css";
import { utils } from "./utils.contract.css.ts";
import { semanticColors } from "../semantic-colors/semantic-colors.contract.css.ts";

createGlobalTheme(":root", utils, {
  shadow: {
    color: semanticColors.palette.muted,
  },

  outline: {
    color: {
      base: semanticColors.palette.muted,
      legacy: semanticColors.palette.border,
    },
  },
});
