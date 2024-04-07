import { style } from "@vanilla-extract/css";
import { splash } from "../splash/css";
import { darkTheme } from "../../theme/global/dark.css";

export const listItemStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "",
  width: "100%",
  minHeight: 56,
  padding: "8px 16px",
  gap: "16px",
  userSelect: "none",
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.onSurface,
    [splash.theme.pressedColor]: darkTheme.color.onSurface,
  },
});

export const listItemContentStyle = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});
export const listItemTitleStyle = style({
  color: darkTheme.color.onSurface,
  fontSize: 16,
  lineHeight: "24px",
  letterSpacing: 0.5,
});
export const listItemSubtitleStyle = style({
  color: darkTheme.color.onSurfaceVariant,
  fontSize: 14,
  lineHeight: "20px",
  letterSpacing: 0.25,
});
