import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema({
      extend: z.object({
        "home.title": z.string(),
        "home.hero.tagline": z.string(),
        "home.hero.get-started": z.string(),
        "home.hero.view-on-gitHub": z.string(),
      }),
    }),
  }),
};
