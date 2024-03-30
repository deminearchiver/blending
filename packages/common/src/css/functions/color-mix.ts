
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

// type HueInterpolationMethod = [ shorter | longer | increasing | decreasing ] hue  
type HueInterpolationMethod = `${"shorter" | "longer" | "increasing" | "decreasing"} hue`

type ColorInterpolationMethod = ColorSpace;

type Percentage = number | `${number}%`;


type ColorMixColor =
  | string
  | [string, Percentage];

const parsePercentage = (value: Percentage) => {
  if(typeof value === "number") return `${value}%`;
  else return value.endsWith("%") ? value : `${value}%`;
}

export const colorMix = (
  space: ColorInterpolationMethod,
  // hue?: HueInterpolationMethod,
  color1: ColorMixColor,
  color2: ColorMixColor
): string => {
  const getColor = (color: ColorMixColor) => {
    if(typeof color === "string") return color;
    else return `${color[0]} ${parsePercentage(color[1])}`
  }

  const parts: string[] = [
    `in ${space}`,
    getColor(color1),
    getColor(color2),
  ];
  return `color-mix(${parts.join(",")})`;
  // return `color-mix(in ${space})`;
}

