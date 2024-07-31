import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://atharvatypes.vercel.app"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "https://localhost:4321/",
  integrations: [tailwind(), icon()],
});
