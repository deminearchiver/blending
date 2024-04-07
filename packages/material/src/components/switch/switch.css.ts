import { style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";
import { recipe } from "@vanilla-extract/recipes";
import { splash } from "../splash/css";

export const switchStyle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  flexShrink: 0,
  width: 52,
  height: 32,
  borderRadius: 9999,
  cursor: "pointer",
});

export const switchUnselectedStyle = style({
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.onSurface,
    [splash.theme.pressedColor]: darkTheme.color.onSurface,
  },
});
export const switchSelectedStyle = style({
  vars: {
    [splash.theme.hoverColor]: darkTheme.color.primary,
    [splash.theme.pressedColor]: darkTheme.color.primary,
  },
});
export const switchDisabledStyle = style({});

export const switchInputStyle = style({
  appearance: "none",
  position: "absolute",
  width: "100%",
  height: 48,
  zIndex: 1,
  cursor: "inherit",
  outline: "none",
});

export const switchTrackStyle = recipe({
  base: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "::before": {
      content: "",
      display: "flex",
      position: "absolute",
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      backgroundColor: darkTheme.color.surfaceContainerHighest,
      transitionProperty: "opacity, background-color",
      transitionTimingFunction: "linear",
      transitionDuration: "67ms",
    },
  },
  variants: {
    state: {
      unselected: {
        "::before": {
          backgroundColor: darkTheme.color.surfaceContainerHighest,
          border: `2px solid ${darkTheme.color.outline}`,
        },
      },
      selected: {
        "::before": {
          backgroundColor: darkTheme.color.primary,
        },
      },
    }
  }
});



export const switchHandleContainerStyle = recipe({
  base: {
    position: "relative",
    display: "flex",
    placeItems: "center",
    placeContent: "center",
    transition: `margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    borderRadius: "inherit",
  },
  variants: {
    state: {
      unselected: {
        marginInlineEnd: 52 - 32,
      },
      selected: {
        marginInlineStart: 52 - 32,
      },
    },
  },
})

export const switchHandleStyle = recipe({
  base: {
    borderRadius: "inherit",
    transformOrigin: "center center",
    transitionProperty: "width, height",
    transitionDuration: "250ms",
    transitionTimingFunction: darkTheme.motion.easing.standard,
    zIndex: 0,

    "::before": {
      content: "",
      position: "absolute",
      display: "flex",
      inset: 0,
      borderRadius: "inherit",
      transition: "background-color 67ms linear 0s",
    },
    selectors: {
      [`${switchStyle}:active &`]: {
        width: 28,
        height: 28,
        transitionDuration: "100ms",
        transitionTimingFunction: "linear",
      },
    },
  },
  variants: {
    state: {
      unselected: {
        width: 16,
        height: 16,
        "::before": {
          backgroundColor: darkTheme.color.outline,
        },
        selectors: {
          [`${switchStyle}:hover &::before`]: {
            "backgroundColor": darkTheme.color.onSurfaceVariant,
          },
        },
      },
      selected: {
        width: 24,
        height: 24,
        "::before": {
          backgroundColor: darkTheme.color.onPrimary,
        },
        selectors: {
          [`${switchStyle}:hover &::before`]: {
            "backgroundColor": darkTheme.color.primaryContainer,
          },
        },
      },
    }
  }
});
