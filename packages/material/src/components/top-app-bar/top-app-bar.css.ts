import { createVar, style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";

export const scrollAnimation = createVar();

export const topAppBarStyle = style({
  width: "100%",
  minHeight: 64,
  maxHeight: 64,
  height: 64,
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  backgroundColor: `color-mix(in srgb, ${darkTheme.color.surfaceContainerHigh} calc(${scrollAnimation} * 100%), ${darkTheme.color.surface})`,
  position: "sticky",
  top: 0,
});
