import { style } from "@vanilla-extract/css";
import { buttonStyle } from "../button.css";
import { splash } from "../../splash/css";
import { darkTheme } from "../../../theme/global/dark.css";

export const elevatedButtonStyle = style([
  buttonStyle,
  {
    backgroundColor: darkTheme.color.surfaceContainerLow,
    color: darkTheme.color.primary,
    boxShadow: `0px 1px 2px 0px ${darkTheme.color.shadow}`,
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.primary,
      [splash.theme.pressedColor]: darkTheme.color.primary,
    },
  },
]);
