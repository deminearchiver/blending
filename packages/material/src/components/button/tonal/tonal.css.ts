import { style } from "@vanilla-extract/css";
import { buttonStyle } from "../button.css";
import { splash } from "../../splash/css";
import { darkTheme } from "../../../theme/global/dark.css";

export const tonalButtonStyle = style([
  buttonStyle,
  {
    backgroundColor: darkTheme.color.secondaryContainer,
    color: darkTheme.color.onSecondaryContainer,
    vars: {
      [splash.theme.hoverColor]: darkTheme.color.onSecondaryContainer,
      [splash.theme.pressedColor]: darkTheme.color.onSecondaryContainer,
    },
  },
]);
