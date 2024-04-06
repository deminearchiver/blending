import { syntax } from "./syntax";

const LINEAR_GRADIENT = syntax.function`linear-gradient`;

type LinearStop = [color: string, position: string, position: string];

type Side = "top" | "right" | "bottom" | "left";
type SideOrCorner =
  | Side
  | [horizontal: Side, vertical: Side];
type Angle = number;

type LinearGradientDirection = SideOrCorner | Angle;

export const linearGradient = (
  direction?: LinearGradientDirection,
  ...stops: LinearStop[]
) => {
  let position: string;
  if(typeof direction === "number") {
    position = `${direction}deg`;
  } else if(typeof direction === "string") {
    position = `to ${direction}`;
  } else if(Array.isArray(direction)) {
    position = `to ${direction.join(" ")}`;
  }


  return LINEAR_GRADIENT(
    position,
    ...stops.map(
      stop => stop.join(" "),
    ),
  );
}
