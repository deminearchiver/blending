import { keyframes, style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";

const duration = "600ms";

const growAnimation = keyframes({
  from: {
    outlineWidth: 0,
  },
  to: {
    outlineWidth: 8,
  }
});
const shrinkAnimation = keyframes({
  from: {
    outlineWidth: 8,
  },
});

export const focusStyle = style({
  animationName: `${growAnimation}, ${shrinkAnimation}`,
  animationDelay: `0s, calc(${duration} * 0.25)`,
  animationDuration: `calc(${duration} * 0.25), calc(${duration} * 0.75)`,
  animationTimingFunction: darkTheme.motion.easing.emphasized,
  position: "absolute",
  display: "none",
  pointerEvents: "none",
  boxSizing: "border-box", 
  borderRadius: "inherit",
  inset: -2,
  color: darkTheme.color.secondary,
  outline: `3px solid currentColor`,
});

export const focusVisibleStyle = style({
  display: "flex",
});
