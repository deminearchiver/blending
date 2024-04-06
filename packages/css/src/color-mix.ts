import { syntax } from "./syntax";

const COLOR_MIX = syntax.function`color-mix`;

type RectangularColorSpace =
  | "srgb"
  | "srgb-linear"
  | "display-p3"
  | "a98-rgb"
  | "prophoto-rgb"
  | "rec2020"
  | "lab"
  | "oklab"
  | "xyz"
  | "xyz-d50"
  | "xyz-d65";
type PolarColorSpace =
  | "hsl"
  | "hwb"
  | "lch"
  | "oklch";

type ColorSpace = RectangularColorSpace | PolarColorSpace;

type HueInterpolationMethod =
  | "shorter"
  | "longer"
  | "decreasing"
  | "increasing";

type ColorInterpolationMethod = ColorSpace | [ColorSpace, HueInterpolationMethod];

type ColorMixColor = string | [string, `${number}%`];



const parseColor = (color: ColorMixColor) => {
  return typeof color === "string" ? color : color.join(" ");
}

export function colorMix(
  method: ColorInterpolationMethod,
  color1: ColorMixColor,
  color2: ColorMixColor,
) {
  let parts: string[] = typeof method === "string" ? [method] : method;


  return COLOR_MIX(
    `in ${parts.join(" ")}`,
    parseColor(color1),
    parseColor(color2),
  );
}
