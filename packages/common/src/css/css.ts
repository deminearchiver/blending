interface CSSNamespace {
  raw: CSSRawNamespace;
  // linearGradient: () => string;
  radialGradient: (options: RadialGradientOptions) => string;
}


interface CSSRawNamespace {
  function: (name: string, ...args: string[]) => string;
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

const css: CSSNamespace = {
  raw: {
    function: (name, ...args) => `${name}(${args.join(",")})`,
  },
  radialGradient: (
    { shape, size, position, stops },
  ) => {
    const parts: string[] = [
      ...(shape ? [shape] : []),
      ...(size ? [size] : []),
      ...(position ? [position] : []),
    ];
    
    return css.raw.function(
      "radial-gradient",
      parts.join(" "),
      ...stops.map(stop => stop.join(" ")),
    );
  }
};

export default css;
