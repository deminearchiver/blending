import { colorMix } from "./color-mix";
import { font, fontFamily, fontVariationSettings } from "./font";
import { linearGradient } from "./linear-gradient";
import { radialGradient } from "./radial-gradient";


// interface CSSNamespace {
//   linearGradient: typeof linearGradient;
//   radialGradient: typeof radialGradient;
// }

const css = {
  linearGradient,
  radialGradient,
  colorMix,
  font,
  fontFamily,
  fontVariationSettings,
};

export default css;
