import { style } from "@vanilla-extract/css";
import { darkTheme } from "../../theme/global/dark.css";

export const cardStyle = style({
  backgroundColor: darkTheme.color.surfaceContainerHighest,
  borderRadius: 12,
});
