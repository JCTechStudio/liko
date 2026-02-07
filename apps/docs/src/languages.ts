import type { GetStaticPaths } from "astro";
import { locales } from "../config/locales";

/** An array of all languages currently configured. */
export const allLanguages = Object.keys(locales);

/** The pages to generate for `/[lang]/` dynamic routes. */
export const getStaticPaths: GetStaticPaths = () => {
  return allLanguages.map((lang) => ({ params: { lang } }));
};
