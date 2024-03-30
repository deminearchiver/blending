import { style } from "@vanilla-extract/css";
import { buttonStyle } from "../button.css";
import { splash } from "../../splash/css";
import { darkTheme } from "../../../theme/global/dark.css";

export const filledButtonStyle = style([
  buttonStyle,
  {
    backgroundColor: darkTheme.color.primary,
    color: darkTheme.color.onPrimary,
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.onPrimary,
      [splash.theme.pressedColor]: darkTheme.color.onPrimary,
    },
  },
]);
