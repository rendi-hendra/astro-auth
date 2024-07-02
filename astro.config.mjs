import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { logger } from "./src/middleware";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), vue()],
  middleware: [logger],
});
