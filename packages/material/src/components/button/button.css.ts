import { style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";
import { colorMix } from "@blender-launcher/common/css";

export const buttonStyle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  padding: "0 24px",
  border: "none",
  borderRadius: 20,
  background: "transparent",
  fontWeight: 500,
  cursor: "pointer",

  ":disabled": {
    color: colorMix(
      "srgb",
      [darkTheme.color.onSurface, 38],
      "transparent",
    ),
    backgroundColor: colorMix(
      "srgb",
      [darkTheme.color.onSurface, 12],
      "transparent",
    ),
  }
});
