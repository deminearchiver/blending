import { fontFace, globalStyle } from "@vanilla-extract/css";

globalStyle(
  ":root",
  {
    colorScheme: "light dark",
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    fontWeight: 400,
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
  },
);
