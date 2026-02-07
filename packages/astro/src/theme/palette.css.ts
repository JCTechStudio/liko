import { assignVars, style } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";
import { theme } from "./contract.css";

type NestedColorKeys<T> = {
  [K in keyof T]: T[K] extends object ? K : never
}[keyof T];

type PaletteName = NestedColorKeys<typeof colors>;

type Contrast = "white" | "black";

type PaletteSemanticSpec = {
  contrast: Contrast; fg: number; subtle: number; muted: number; emphasized: number; solid: number; focusRing: number;
};

const semanticByPalette: Record<PaletteName, { light: PaletteSemanticSpec; dark: PaletteSemanticSpec }> = {
  red: {
    light: { contrast: "white", fg: 700, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, orange: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, amber: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, yellow: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, lime: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, green: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, emerald: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, teal: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, cyan: {
    light: { contrast: "black", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 400, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, sky: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, blue: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "black", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 400, focusRing: 500 },
  }, indigo: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, violet: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, purple: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, fuchsia: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, pink: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, rose: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 600, focusRing: 500 },
    dark: { contrast: "white", fg: 300, subtle: 900, muted: 800, emphasized: 700, solid: 600, focusRing: 500 },
  }, slate: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  }, gray: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  }, zinc: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  }, neutral: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  }, stone: {
    light: { contrast: "white", fg: 800, subtle: 100, muted: 200, emphasized: 300, solid: 900, focusRing: 400 },
    dark: { contrast: "black", fg: 200, subtle: 900, muted: 800, emphasized: 700, solid: 50, focusRing: 400 },
  },
};

function resolveContrast(c: Contrast) {
  return c === "white" ? colors.white : colors.black;
}

function makePaletteClass(name: PaletteName) {
  const scale = (colors as any)[name] as Record<number, string>;
  const spec = semanticByPalette[name];

  return style({
    vars: assignVars(theme.palette, {
      50: scale[50],
      100: scale[100],
      200: scale[200],
      300: scale[300],
      400: scale[400],
      500: scale[500],
      600: scale[600],
      700: scale[700],
      800: scale[800],
      900: scale[900],
      950: scale[950],

      contrast: resolveContrast(spec.light.contrast),
      fg: scale[spec.light.fg],
      subtle: scale[spec.light.subtle],
      muted: scale[spec.light.muted],
      emphasized: scale[spec.light.emphasized],
      solid: scale[spec.light.solid],
      focusRing: scale[spec.light.focusRing],
    }), selectors: {
      "[data-theme='dark'] &": {
        vars: assignVars(theme.palette, {
          50: scale[50],
          100: scale[100],
          200: scale[200],
          300: scale[300],
          400: scale[400],
          500: scale[500],
          600: scale[600],
          700: scale[700],
          800: scale[800],
          900: scale[900],
          950: scale[950],

          contrast: resolveContrast(spec.dark.contrast),
          fg: scale[spec.dark.fg],
          subtle: scale[spec.dark.subtle],
          muted: scale[spec.dark.muted],
          emphasized: scale[spec.dark.emphasized],
          solid: scale[spec.dark.solid],
          focusRing: scale[spec.dark.focusRing],
        }),
      },
    },
  });
}

export const paletteClass = {
  red: makePaletteClass("red"),
  orange: makePaletteClass("orange"),
  amber: makePaletteClass("amber"),
  yellow: makePaletteClass("yellow"),
  lime: makePaletteClass("lime"),
  green: makePaletteClass("green"),
  emerald: makePaletteClass("emerald"),
  teal: makePaletteClass("teal"),
  cyan: makePaletteClass("cyan"),
  sky: makePaletteClass("sky"),
  blue: makePaletteClass("blue"),
  indigo: makePaletteClass("indigo"),
  violet: makePaletteClass("violet"),
  purple: makePaletteClass("purple"),
  fuchsia: makePaletteClass("fuchsia"),
  pink: makePaletteClass("pink"),
  rose: makePaletteClass("rose"),
  slate: makePaletteClass("slate"),
  gray: makePaletteClass("gray"),
  zinc: makePaletteClass("zinc"),
  neutral: makePaletteClass("neutral"),
  stone: makePaletteClass("stone"),
} as const;

export type Palette = keyof typeof paletteClass;
