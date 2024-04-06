import { style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";
import { colorMix } from "@blending/common/css";
import { splash } from "../splash/css";

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

export const testButtonStyle = style({
  appearance: "none",
  position: "relative",
  display: "inline-flex",
  placeItems: "center",
  placeContent: "center",
  height: 40,
  padding: "0 24px",
  border: "none",
  borderRadius: 9999,
  color: "transparent",
  backgroundColor: "transparent",
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",

  fontSize: 14,
  lineHeight: "20px",
  fontWeight: 500,
  letterSpacing: 0.1,

  outline: "none",

  ":disabled": {
    cursor: "not-allowed",
  },
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.onPrimary,
    [splash.theme.pressedColor]: darkTheme.color.onPrimary,
  }
});

export const elevatedButtonStyle = style([
  testButtonStyle,
  {
    color: darkTheme.color.primary,
    backgroundColor: darkTheme.color.surfaceContainerLow,
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
    },
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.primary,
      [splash.theme.pressedColor]: darkTheme.color.primary,
    }
  },
]);
export const filledButtonStyle = style([
  testButtonStyle,
  {
    color: darkTheme.color.onPrimary,
    backgroundColor: darkTheme.color.primary,
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
    },
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.onPrimary,
      [splash.theme.pressedColor]: darkTheme.color.onPrimary,
    },
  },
]);
export const tonalButtonStyle = style([
  testButtonStyle,
  {
    color: darkTheme.color.onSecondaryContainer,
    backgroundColor: darkTheme.color.secondaryContainer,
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
    },
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.onSecondaryContainer,
      [splash.theme.pressedColor]: darkTheme.color.onSecondaryContainer,
    }
  },
]);
export const outlinedButtonStyle = style([
  testButtonStyle,
  {
    color: darkTheme.color.primary,
    border: `1px solid ${darkTheme.color.outline}`,
    ":disabled": {
      color: colorMix(
        "srgb",
        [darkTheme.color.onSurface, 38],
        "transparent",
      ),
      borderColor: colorMix(
        "srgb",
        [darkTheme.color.onSurface, 12],
        "transparent",
      ),
    },
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.primary,
      [splash.theme.pressedColor]: darkTheme.color.primary,
    }
  },
]);
export const textButtonStyle = style([
  testButtonStyle,
  {
    color: darkTheme.color.primary,
    ":disabled": {
      color: colorMix(
        "srgb",
        [darkTheme.color.onSurface, 38],
        "transparent",
      ),
    },
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.primary,
      [splash.theme.pressedColor]: darkTheme.color.primary,
    }
  },
]);
