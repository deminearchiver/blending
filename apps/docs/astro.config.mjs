import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import solidJs from "@astrojs/solid-js";

import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://blending.pages.dev/",
  vite: {
    ssr: {
      external: [
        "node:buffer",
        "node:url",
        "node:path",
        "node:child_process",
        "node:fs",
      ],
    }
  },
  integrations: [
    starlight({
      plugins: [
        starlightBlog({
          authors: {
            deminearchiver: {
              name: "deminearchiver",
              picture: "https://github.com/deminearchiver.png?size=40",
              title: "Creator of Blending",
              url: "https://github.com/deminearchiver",
            }
          }
        }),
      ],
      title: "Blending",
      editLink: {
        baseUrl: "https://github.com/deminearchiver/blending/edit/main/apps/docs/"
      },
      logo: {
        src: "./public/favicon.svg"
      },
      social: {
        github: "https://github.com/deminearchiver/blending",
        discord: "https://discord.gg/"
      },
      sidebar: [{
        label: "Quick start",
        items: [{
          label: "What is Blending?",
          link: "/guides/"
        }, {
          label: "Installation",
          link: "/guides/installation"
        }]
      }, {
        label: "Guides",
        items: [
        // Each item here is one entry in the navigation menu.
        {
          label: "Example Guide",
          link: "/guides/example/"
        }]
      }, {
        label: "Reference",
        autogenerate: {
          directory: "reference"
        }
      }],
      customCss: [
        "./src/styles/custom.css",
        "./src/styles/theme.css",
        "./src/styles/landing.css",
      ]
    }),
    solidJs(),
  ]
});
