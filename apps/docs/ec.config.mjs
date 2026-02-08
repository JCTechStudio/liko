import { defineEcConfig } from '@astrojs/starlight/expressive-code';
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

/** @type {import("@astrojs/starlight/expressive-code").StarlightExpressiveCodeOptions} */
export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  styleOverrides: {
    borderRadius: "0.375rem"
  }
});
