import { syntax } from "./syntax";

type FontStyle =
  | "normal"
  | "italic"
  | `oblique${string}`;

type FontVariant = "normal" | "small-caps";

interface FontOptions {
  style?: FontStyle;
  variant?: FontVariant;
  weight?: string;
  width?: string;
  size: string;
  lineHeight?: string;
  families: string[];
}

export const font = (options: FontOptions) => {
  const family = fontFamily(...options.families);
  const parts = [

  ];
  if(options.style != null) parts.push(options.style);
  if(options.variant != null) parts.push(options.variant);
  if(options.weight != null) parts.push(options.weight);
  if(options.width != null) parts.push(options.width);
  parts.push(`${options.size}${options.lineHeight != null ? `/${options.lineHeight}` : ""}`);
  parts.push(family);
  return parts.join(" ");
}

export const fontFamily = (...families: string[]) => {
  return families
    .map(family => family.includes(" ") ? `"${family}"` : family)
    .join(",");
}

export const fontVariationSettings = (settings: Record<string, number>) => {
  return Object.entries(settings)
    .map(
      ([key, value]) => `"${key}" ${value}`
    )
    .join(",");
}
