import { defineNuxtConfig } from "nuxt/config";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: { "~common": resolve("./") },
  components: [{ path: "~common/components", prefix: "Ui" }],
});