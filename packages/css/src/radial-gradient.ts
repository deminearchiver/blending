import { syntax } from "./syntax";

const RADIAL_GRADIENT = syntax.function`radial-gradient`;

type RadialStop = string | [color: string, position?: string, position?: string];


type RadialShape = "circle" | "ellipse";
type RadialExtent =
  | "closest-corner"
  | "closest-side"
  | "farthest-corner"
  | "farthest-side";
type RadialSize = RadialExtent | string;

interface RadialGradientOptions {
  shape?: RadialShape;
  size?: RadialSize;
  position?: string;
}

export const radialGradient = (
  options?: RadialGradientOptions,
  ...stops: RadialStop[]
) => {
  const parts: string[] = [];
  if(options.shape != null) parts.push(options.shape);
  if(options.size != null) parts.push(options.size);
  if(options.position != null) parts.push(options.position);

  return RADIAL_GRADIENT(
    parts.join(" "),
    ...stops.map(
      stop => typeof stop === "string" ? stop : stop.join(" "),
    ),
  );
}
