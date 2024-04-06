import { mergeTemplateStrings } from "@blending/utils";

interface CSSSyntaxFunction {
  (name: string): CSSFunction;
  (strings: TemplateStringsArray, ...values: unknown[]): CSSFunction;
}

export type CSSFunction = (...args: string[]) => string;

interface CSSSyntaxNamespace {
  function: CSSSyntaxFunction;
}

export const syntax: CSSSyntaxNamespace = {
  function: (...args) => {
    let name: string;
    if(typeof args[0] === "string") {
      name = args[0];
    } else {
      name = mergeTemplateStrings(args[0], args[1]);
    }
    return (...args: string[]) => `${name}(${args.join(", ")})`;
  }
}
