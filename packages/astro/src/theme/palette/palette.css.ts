import { assignVars, style } from "@vanilla-extract/css";
import { semanticColors } from "../semantic-colors/semantic-colors.contract.css.ts";
import { PALETTE_SEMANTICS } from "./palette.constants.ts";
import type { Palette, PaletteMap } from "./palette.types.ts";
import { utils } from "../utils/utils.contract.css.ts";

function makePalette(palette: Palette) {
  const {
    light: lightSemanticSpec,
    dark: darkSemanticSpec,
  } = PALETTE_SEMANTICS[palette];

  return style({
    vars: {
      ...assignVars(semanticColors.palette, lightSemanticSpec),
      [utils.shadow.color]: semanticColors.palette.muted,
      [utils.outline.color.base]: semanticColors.palette.muted,
      [utils.outline.color.legacy]: semanticColors.palette.border,
    },
    selectors: {
      "[data-theme='dark'] &": {
        vars: {
          ...assignVars(semanticColors.palette, darkSemanticSpec),
          [utils.shadow.color]: semanticColors.palette.muted,
          [utils.outline.color.base]: semanticColors.palette.muted,
          [utils.outline.color.legacy]: semanticColors.palette.border,
        },
      },
    },
  });
}

function makePalettes() {
  const paletteMap = {} as PaletteMap;

  for (const palette in PALETTE_SEMANTICS) {
    paletteMap[palette as Palette] = makePalette(palette as Palette);
  }

  return paletteMap;
}

export const palettes = makePalettes();
