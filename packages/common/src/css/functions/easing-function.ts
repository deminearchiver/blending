type CubicBezierArgs = 
  | [
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
  ]
  | [x1: number, y1: number, x2: number, y2: number];

export const cubicBezier = (...args: CubicBezierArgs) => {
  if(typeof args === "string") return args;
  return `cubic-bezier(${args.join(",")})`
}
export const steps = () => {

}
