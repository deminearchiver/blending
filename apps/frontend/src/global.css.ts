import { colorMix, css } from "@blending/common/css";
import { darkTheme } from "@blending/material/theme/global/dark";
import { fontFace, globalStyle } from "@vanilla-extract/css";

/*
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 1000

.roboto-flex-<uniquifier> {
  font-family: "Roboto Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "wdth" 100,
    "GRAD" 0,
    "XOPQ" 96,
    "XTRA" 468,
    "YOPQ" 79,
    "YTAS" 750,
    "YTDE" -203,
    "YTFI" 738,
    "YTLC" 514,
    "YTUC" 712;
}
*/

const robotoFlex: Record<string, number> = {
  "slnt": -9,
  "wdth": 100,
  "GRAD": 0,
  "XOPQ": 96,
  "XTRA": 468,
  "YOPQ": 79,
  "YTAS": 750,
  "YTDE": -203,
  "YTFI": 738,
  "YTLC": 514,
  "YTUC": 721,
}

globalStyle(
  "body",
  {
    fontFamily: css.fontFamily("Roboto Flex", "sans-serif"),
    fontOpticalSizing: "auto",
    fontWeight: 400,
    fontStyle: "normal",
    fontVariationSettings: Object.entries(robotoFlex)
      .map(([key, value]) => `"${key}" ${value}`)
      .join(","),

    "@supports": {
      "(font-variation-settings: 450)": {

      }
    }
  }
);

globalStyle(
  ":root",
  {
    colorScheme: "light dark",
    // fontFamily: "Roboto, sans-serif",
    // fontSize: 14,
    // fontWeight: 400,
  },
);
globalStyle(
  "*",
  {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
);
globalStyle(
  "*",
  {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    fontVariationSettings: "inherit",
  },
);

globalStyle(
  "body",
  {
    scrollbarColor: darkTheme.color.surface,
  }
);
globalStyle(
  "body::-webkit-scrollbar",
  {
    width: 16,
  }
);
globalStyle(
  "body::-webkit-scrollbar-track",
  {
    backgroundColor: darkTheme.color.surface,
  }
);
globalStyle(
  "body::-webkit-scrollbar-thumb",
  {
    backgroundColor: colorMix(
      "srgb",
      [darkTheme.color.onSurface, "12%"],
      "transparent",
    ),
    backgroundClip: "padding-box",
    border: "4px solid rgba(0,0,0,0)",
    borderRadius: 9999,
    transition: "background-color 15ms linear"
  }
);
globalStyle(
  "body::-webkit-scrollbar-thumb:hover",
  {
    backgroundColor: colorMix(
      "srgb",
      [darkTheme.color.onSurface, "38%"],
      "transparent",
    ),
  }
);

// styled-scrollbars {
//   /* Foreground, Background */
//   scrollbar-color: #999 #333;
// }
// .styled-scrollbars::-webkit-scrollbar {
//   width: 10px; /* Mostly for vertical scrollbars */
//   height: 10px; /* Mostly for horizontal scrollbars */
// }
// .styled-scrollbars::-webkit-scrollbar-thumb { /* Foreground */
//   background: #999;
// }
// .styled-scrollbars::-webkit-scrollbar-track { /* Background */
//   background: #333;
// }
