import { merge } from "../utils";

interface CSSSyntaxNamespace {
  function: (name: TemplateStringsArray, ...values: any[]) => (...args: string[]) => string;
  quote: () => string,
}

interface CSSNamespace {
  syntax: CSSSyntaxNamespace;
  fontFamily: (...families: string[]) => string;
  linearGradient: (options: LinearGradientOptions) => string;
  radialGradient: (options: RadialGradientOptions) => string;
}




interface LinearGradientOptions {
  
}


type RadialGradientShape = "ellipse" | "circle";
type RadialGradientSize =
  | "closest-side"
  | "closest-corner"
  | "farthest-side"
  | "farthest-corner";
type RadialGradientPosition = `at ${string}`;

type RadialGradientStop = [stop: string, percentage: string];


interface RadialGradientOptions {
  shape?: RadialGradientShape;
  size?: RadialGradientSize;
  position?: RadialGradientPosition;
  stops: RadialGradientStop[];
}


export const css: CSSNamespace = {
  syntax: {
    function: (strings, ...values) => {
      const name = merge(strings, ...values);
      return (...args) => `${name}(${args.join(",")})`
    },
    quote: () => `"`,
  },
  fontFamily: (...families) => {
    return families
      .map(family => family.includes(" ") ? `${css.syntax.quote()}${family}${css.syntax.quote()}` : family)
      .join(",");
  },
  linearGradient: () => {
    return LINEAR_GRADIENT();
  },
  radialGradient: (
    { shape, size, position, stops },
  ) => {
    const parts: string[] = [
      ...(shape ? [shape] : []),
      ...(size ? [size] : []),
      ...(position ? [position] : []),
    ];
    
    return RADIAL_GRADIENT(
      parts.join(" "),
      ...stops.map(stop => stop.join(" ")),
    );
  },
};


const LINEAR_GRADIENT = css.syntax.function`linear-gradient`;
const RADIAL_GRADIENT = css.syntax.function`radial-gradient`;
