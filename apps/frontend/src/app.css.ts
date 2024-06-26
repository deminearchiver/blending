import { style } from "@vanilla-extract/css";
import { darkTheme } from "@blending/material/theme/global/dark";

export const appStyle = style({
  width: "100%",
  height: ["100vh", "100dvh"],
});

export const contentStyle = style({
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: darkTheme.color.surfaceContainer,
});
