import { style } from "@vanilla-extract/css";
import { buttonStyle } from "../button.css";
import { darkTheme } from "../../../theme/global/dark.css";
import { splash } from "../../splash/css";

export const outlinedButtonStyle = style([
  buttonStyle,
  {
    color: darkTheme.color.primary,
    border: `1px solid ${darkTheme.color.outline}`,
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.primary,
      [splash.theme.pressedColor]: darkTheme.color.primary,
    },
  },
]);
