import { style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";
import { splash } from "../splash/css";

export const searchBarStyle = style({
  position: "relative",
  minWidth: 360,
  maxWidth: 720,
  height: 56,
  borderRadius: 28,
  cursor: "pointer",

  backgroundColor: darkTheme.color.surfaceContainerHigh,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  padding: "0px 16px",

  gap: 16,
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.onSurface,
    [splash.theme.pressedColor]: darkTheme.color.onSurface,
  }
});

export const searchBarInputStyle = style({
  appearance: "none",
  border: "none",
  background: "transparent",
  outline: "none",
  flexGrow: 1,
  caretColor: darkTheme.color.onSurface,
  color: darkTheme.color.onSurface,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "24px",
  height: "100%",
  cursor: "pointer",
  ":focus": {
    cursor: "text",
  },
  "::placeholder": {
    color: darkTheme.color.onSurfaceVariant,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
  },
});
