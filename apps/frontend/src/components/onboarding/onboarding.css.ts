import { darkTheme } from "@blending/material/theme/global/dark";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  height: ["100vh", "100dvh"],
  backgroundColor: darkTheme.color.surface,
});

export const contentStyle = style({
  flexGrow: 1,
  padding: "16px",
});

export const onboardingFooterStyle = style({
  position: "sticky",
  bottom: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "0 16px 16px 16px"
});

export const footerButtonStyle = style({
  flexGrow: 1
});
