import type { BaseProps, ColorProps } from "../Base.types.ts";
import type { HTMLAttributes } from "astro/types";
import type { ButtonVariants } from "./button.css.ts";

type SpinnerPlacement = "start" | "end";

type ButtonsLoadingProps = {
  loading?: boolean;
  loadingText?: astroHTML.JSX.Element;
  loadingSpinner?: astroHTML.JSX.Element;
  spinnerPlacement?: SpinnerPlacement;
}

export type ButtonsBaseProps = BaseProps & ColorProps & ButtonVariants & ButtonsLoadingProps & HTMLAttributes<"button">;
