import { Plugin, defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import path from "path";

const generateArbFile = (id: string, code: string) => {
  const parsed = JSON.parse(code);
  let locale = parsed["@@locale"];
  if(!locale) {
    locale = path.parse(id).name;
  }
  const stringified = JSON.stringify(parsed);
  return `export default {
  locale: "${locale}",
  translations: ${code},
}`;
}

const i18n = (): Plugin => {
  const arbFileRegex = /\.(arb)$/;

  return {
    name: "i18n",
    transform(code, id, options) {
      const [validId] = id.split("?");
      if(arbFileRegex.test(validId)) {
        return {
          code: generateArbFile(validId, code),
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [
    solid(),
    vanillaExtractPlugin({

    }),
    i18n(),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  
})
