import { svgPathProperties as SVGPathProperties } from "svg-path-properties";


export type LinearPoint = [pos: number, val: number];

export function processSVGData(data: string, pointsLength: number): LinearPoint[] {
  const path = new SVGPathProperties(data);
  const totalLength = path.getTotalLength();

  if (totalLength === 0) throw new TypeError("Path is zero length");

  let lastX = -Infinity;

  // const points = Array.from({ length: pointsLength }, (_, i) => {
  //   const pos = (i / (pointsLength - 1)) * totalLength;
  //   const point = parsedPath.getPointAtLength(pos);

  //   // Prevent paths going back on themselves
  //   lastX = Math.max(lastX, point.x);
  //   return [lastX, point.y];
  // });

  const points: LinearPoint[] = new Array(pointsLength);
  for(let i = 0; i < pointsLength; i++) {
    const pos = (i / (pointsLength - 1)) * totalLength;
    const point = path.getPointAtLength(pos);

    lastX = Math.max(lastX, point.x);
    points[i] = [lastX, point.y];
  }
  return points;
}
