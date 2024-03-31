import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import solidJs from "@astrojs/solid-js";

import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://blender-launcher.pages.dev/",
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
              title: "Creator of Blender Launcher",
              url: "https://github.com/deminearchiver",
            }
          }
        }),
      ],
      title: "Blender Launcher",
      editLink: {
        baseUrl: "https://github.com/deminearchiver/blender-launcher/edit/main/apps/docs/"
      },
      logo: {
        src: "./public/favicon.svg"
      },
      social: {
        github: "https://github.com/deminearchiver/blender-launcher",
        discord: "https://discord.gg/"
      },
      sidebar: [{
        label: "Quick start",
        items: [{
          label: "What is Blender Launcher?",
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
