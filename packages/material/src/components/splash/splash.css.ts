import { ComplexStyleRule, fallbackVar, style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";
import { splash } from "./css";
import css from "@blender-launcher/common/css";

const sharedStyles: ComplexStyleRule = {
  borderRadius: "inherit",
  inset: 0,
  position: "absolute",
  overflow: "hidden",
};

const sharedPseudoStyles: ComplexStyleRule = {
  content: '',
  opacity: 0,
  position: "absolute",
};


export const splashStyle = style({
  ...sharedStyles,

  display: "flex",
  margin: "auto",
  pointerEvents: "none",

});


export const surfaceStyle = style({
  ...sharedStyles,
  "::before": {
    ...sharedPseudoStyles,
    backgroundColor: splash.theme.hoverColor,
    inset: 0,
    transition: "opacity 15ms linear, background-color 15ms linear"
  },
  "::after": {
    ...sharedPseudoStyles,
    // background: `
    //   radial-gradient(
    //     closest-side,
    //     ${splash.theme.pressedColor} max(calc(100% - 70px), 65%),
    //     transparent 100%
    //   )
    // `,
    background: css.radialGradient({
      size: "closest-side",
      stops: [
        [`${splash.theme.pressedColor}`, "max(calc(100% - 70px), 65%)"],
        ["transparent", "100%"]
      ]
    }),
    transformOrigin: "center center",
    transition: "opacity 375ms linear",
  },
});

export const surfaceHoveredStyle = style({
  "::before": {
    backgroundColor: splash.theme.hoverColor,
    opacity: fallbackVar(splash.theme.hoverOpacity, "0.08"),
  },
});
export const surfacePressedStyle = style({
  "::after": {
    opacity: fallbackVar(splash.theme.pressedOpacity, "0.1"),
    transitionDuration: "105ms",
  },
});
