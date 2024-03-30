// export type Themed<T, ThemeTokens extends Tokens> = T & {
//   theme: ThemeVars<ThemeTokens>;
// }

export type Themed<T, U> = T & { theme: U };

// type NullableTokens = {
//   [key: string]: string | NullableTokens | null;
// };
// type Tokens = {
//   [key: string]: string | Tokens;
// };
// type ThemeVars<ThemeContract extends NullableTokens> = MapLeafNodes<ThemeContract, CSSVarFunction>;
// type Primitive = string | boolean | number | null | undefined;
// type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;
// type MapLeafNodes<Obj, LeafType> = {
//     [Prop in keyof Obj]: Obj[Prop] extends Primitive ? LeafType : Obj[Prop] extends Record<string | number, any> ? MapLeafNodes<Obj[Prop], LeafType> : never;
// };
