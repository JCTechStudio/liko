import type { Palette } from "../theme/palette.css.ts";

export type BaseProps = {
  as?: astroHTML.JSX.Element;
};

export type ColorProps = {
  palette?: Palette;
};
