import colors from "tailwindcss/colors";

export const paletteColors = Object.entries(colors).filter(
  ([, value]) => value && typeof value === "object"
);
