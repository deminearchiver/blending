import { globalStyle, style } from "@vanilla-extract/css";
import css from "@blending/css";

// globalStyle(
//   ".material-symbols-rounded",
//   {

//   },
// );

export const iconStyle = style({
  userSelect: "none",
  pointerEvents: "none",
  fontVariationSettings:
    css.fontVariationSettings({
      FILL: 0,
      wght: 400,
      GRAD: 0,
      opsz: 24,
    }),
});
