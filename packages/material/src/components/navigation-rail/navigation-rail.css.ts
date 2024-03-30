import { style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";
import { splash } from "../splash/css";

export const navigationRailStyle = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  minWidth: 80,
  height: "100%",
  userSelect: "none",
  backgroundColor: darkTheme.color.surfaceContainer,
  padding: "4px 0px",
  gap: 8,
});

export const navigationRailLeadingStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
});

export const navigationRailChildrenStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const navigationRailDestinationStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: 56,
  gap: 4,
  fontSize: 12,
  lineHeight: "16px",
  fontWeight: 500,
  color: darkTheme.color.onSurfaceVariant,
});
export const navigationIndicatorStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderRadius: 16,
  width: 56,
  height: 32,
  color: darkTheme.color.onSurfaceVariant,
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.onSurface,
    [splash.theme.pressedColor]: darkTheme.color.onSurface,
  }
});
