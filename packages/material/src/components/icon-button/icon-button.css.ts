import { style } from "@vanilla-extract/css";
import { splash } from "../splash/css";
import { darkTheme } from "../../theme/global/dark.css";

export const iconButtonStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "none",
  backgroundColor: "transparent",
  width: 40,
  height: 40,
  borderRadius: 20,
  padding: 8,
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.onSurfaceVariant,
    [splash.theme.pressedColor]: darkTheme.color.onSurfaceVariant,
  },
  "::before": {
    content: "",
    position: "absolute",
    margin: "",
    top: 0,
    bottom: 0,
    width: "max(48px, 100%)",
    height: "max(48px, 100%)",
  },
});
