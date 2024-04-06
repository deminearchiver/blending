import { syntax } from "./syntax";

const LINEAR_GRADIENT = syntax.function`linear-gradient`;

type LinearStop = [color: string, position: string, position: string];

type Side = "top" | "right" | "bottom" | "left";
type SideOrCorner =
  | Side
  | [horizontal: Side, vertical: Side];
type Angle = number;

type LinearGradientDirection = SideOrCorner | Angle;

export function linearGradient(
  // direction?: LinearGradientDirection,
  direction?: string,
  ...stops: LinearStop[]
) {
  // let position: string;
  // if(typeof direction === "number") {
  //   position = `${direction}deg`;
  // } else if(typeof direction === "string") {
  //   position = `to ${direction}`;
  // } else {
  //   position = `to ${direction.join(" ")}`;
  // }


  return LINEAR_GRADIENT(
    ...direction != null ? [direction] : [],
    ...stops.map(
      stop => stop.join(" "),
    ),
  );
}
