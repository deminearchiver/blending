import { processSVGData } from "../css";

export class Offset {
  public constructor(
    public readonly dx: number,
    public readonly dy: number,
  ) {}
}

export abstract class Curve {
  public get flipped() {
    return new FlippedCurve(this);
  }

  public transform(t: number) {
    if (t === 0 || t === 1) return t;
    return this.transformInternal(t);
  }
  protected abstract transformInternal(t: number): number;

  public toCSS(): string {
    return "linear";
  }
}
const evaluateCubic = (a: number, b: number, m: number): number => {
  return 3 * a * (1 - m) * (1 - m) * m +
         3 * b * (1 - m) *           m * m +
                                     m * m * m;
}

const CUBIC_ERROR_BOUND = 0.001;

const cubic = (t: number, a: number, b: number, c: number, d: number) => {
  let start = 0;
  let end = 1;
  while (true) {
    const midpoint = (start + end) / 2;
    const estimate = evaluateCubic(a, c, midpoint);
    if (Math.abs(t - estimate) < CUBIC_ERROR_BOUND) {
      return evaluateCubic(b, d, midpoint);
    }
    if (estimate < t) {
      start = midpoint;
    } else {
      end = midpoint;
    }
  }
}

export class Cubic extends Curve {
  public constructor(
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
    public readonly d: number,
  ) { super(); }

  protected transformInternal(t: number): number {
    let start = 0;
    let end = 1;
    while (true) {
      const midpoint = (start + end) / 2;
      const estimate = evaluateCubic(this.a, this.c, midpoint);
      if (Math.abs(t - estimate) < CUBIC_ERROR_BOUND) {
        return evaluateCubic(this.b, this.d, midpoint);
      }
      if (estimate < t) {
        start = midpoint;
      } else {
        end = midpoint;
      }
    }
  }

  public override toCSS(): string {
    const parts = [this.a, this.b, this.c, this.d];
    return `cubic-bezier(${parts.join(",")})`;
  }
}

export class ThreePointCubic extends Curve {
  public constructor(
    public readonly a1: Offset,
    public readonly b1: Offset,
    public readonly midpoint: Offset,
    public readonly a2: Offset,
    public readonly b2: Offset,
  ) { super(); }

  protected override transformInternal(t: number): number {
    const firstCurve = t < this.midpoint.dx;
    const scaleX = firstCurve ? this.midpoint.dx : 1.0 - this.midpoint.dx;
    const scaleY = firstCurve ? this.midpoint.dy : 1.0 - this.midpoint.dy;
    const scaledT = (t - (firstCurve ? 0.0 : this.midpoint.dx)) / scaleX;
    if (firstCurve) {
      return new Cubic(
        this.a1.dx / scaleX,
        this.a1.dy / scaleY,
        this.b1.dx / scaleX,
        this.b1.dy / scaleY,
      ).transform(scaledT) * scaleY;
    } else {
      return new Cubic(
        (this.a2.dx - this.midpoint.dx) / scaleX,
        (this.a2.dy - this.midpoint.dy) / scaleY,
        (this.b2.dx - this.midpoint.dx) / scaleX,
        (this.b2.dy - this.midpoint.dy) / scaleY,
      ).transform(scaledT) * scaleY + this.midpoint.dy;
    }
  }

  public toLinearCSS(points: number): string {
    const result = new Array(points);
    for(let i = 0; i < points; i++) {
      const x = i * (1 / points);
      result[i] = this.transform(x);
    }
    return `linear(${result.join(",")})`;
  }
}

class FlippedCurve extends Curve {
  public constructor(
    public readonly curve: Curve,
  ) { super(); }

  protected override transformInternal(t: number) {
    return 1 - this.curve.transform(1 - t);
  }

}
