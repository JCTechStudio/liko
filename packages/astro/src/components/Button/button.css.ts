import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { fallbackVar, style, styleVariants } from "@vanilla-extract/css";
import { semanticColors } from "../../theme/semantic-colors/semantic-colors.contract.css.ts";
import { utils } from "../../theme/utils/utils.contract.css.ts";
import colors from "tailwindcss/colors";

const base = style({
  appearance: "none",
  position: "relative",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  borderWidth: "1px",
  borderColor: colors.transparent,
  cursor: "pointer",
  outline: 0,
  lineHeight: 1.2,
  isolation: "isolate",
  fontWeight: 500,
  selectors: {
    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
});

const shape = styleVariants({
  sharp: { borderRadius: 0 },
  rounded: { borderRadius: "0.375rem" },
  circular: { borderRadius: "calc(infinity * 1px)" },
});

const fill = styleVariants({
  solid: {
    borderColor: "transparent",
    background: semanticColors.palette.solid,
    color: semanticColors.palette.contrast,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        background: `color-mix(in srgb, ${semanticColors.palette.solid} 90%, transparent)`,
      },
    },
  },
  tonal: {
    borderColor: "transparent",
    background: semanticColors.palette.subtle,
    color: semanticColors.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        background: semanticColors.palette.muted,
      },
    },
  },
  surface: {
    vars: {
      [utils.shadow.color]: semanticColors.palette.muted,
    },
    boxShadow: `0 0 0 1px ${utils.shadow.color}`,
    background: semanticColors.palette.subtle,
    color: semanticColors.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        background: semanticColors.palette.muted,
      },
    },
  },
  outline: {
    vars: {
      [utils.outline.color.base]: semanticColors.palette.border,
      [utils.outline.color.legacy]: semanticColors.palette.muted,
    },
    borderColor: fallbackVar(utils.outline.color.base, utils.outline.color.legacy),
    background: "transparent",
    color: semanticColors.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        background: semanticColors.palette.subtle,
      },
    },
  },
  clear: {
    background: "transparent",
    color: semanticColors.palette.fg,
    selectors: {
      "&:not(:disabled):hover, &:not(:disabled)[aria-expanded='true']": {
        background: semanticColors.palette.subtle,
      },
    },
  },
  text: {
    background: "transparent",
    color: semanticColors.palette.fg,
  },
});

const size = styleVariants({
  xs: {
    height: "2rem",
    minWidth: "2rem",
    fontSize: "0.75rem",
    paddingLeft: "0.625rem",
    paddingRight: "0.625rem",
    gap: "0.25rem",
  },
  sm: {
    height: "2.25rem",
    minWidth: "2.25rem",
    fontSize: "0.875rem",
    paddingLeft: "0.875rem",
    paddingRight: "0.875rem",
    gap: "0.5rem",
  },
  md: {
    height: "2.5rem",
    minWidth: "2.5rem",
    fontSize: "0.875rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    gap: "0.5rem",
  },
  lg: {
    height: "2.75rem",
    minWidth: "2.75rem",
    fontSize: "1rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    gap: "0.75rem",
  },
  xl: {
    height: "3rem",
    minWidth: "3rem",
    fontSize: "1rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    gap: "0.625rem",
  },
});

const block = styleVariants({
  true: {
    display: "flex",
    width: "100%",
  },
});

export const button = recipe({
  base,
  variants: {
    shape,
    fill,
    size,
    block,
  },
  defaultVariants: {
    shape: "rounded",
    fill: "solid",
    size: "md",
    block: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
