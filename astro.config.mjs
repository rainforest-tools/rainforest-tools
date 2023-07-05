import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import glsl from 'vite-plugin-glsl'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), glsl()],
  vite: {
    plugins: [glsl()]
  }
});