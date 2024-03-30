import { style } from "@vanilla-extract/css";
import { splash } from "../splash/css";
import { darkTheme } from "../../theme/global/dark.css";
import { recipe } from "@vanilla-extract/recipes";

// export const floatingActionButtonStyle = style({
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: 56,
//   height: 56,
//   borderRadius: 16,
//   border: "none",
//   cursor: "pointer",
//   color: darkTheme.color.onPrimaryContainer,
//   backgroundColor: darkTheme.color.primaryContainer,
//   vars: {
//     [splash.theme.hoverColor]: darkTheme.color.onPrimaryContainer,
//     [splash.theme.pressedColor]: darkTheme.color.onPrimaryContainer,
//   }
// });

export const test = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
  },
  variants: {
    size: {
      small: {
        borderRadius: 12,
        width: 40,
        height: 40,
      },
      regular: {
        borderRadius: 16,
        width: 56,
        height: 56,
      },
      large: {
        borderRadius: 28,
        width: 96,
        height: 96,
      },
    },
    elevation: {
      normal: {
        boxShadow: `0px 1px 3px 0px ${darkTheme.color.shadow}`,
      },
      lowered: {
        boxShadow: `0px 1px 2px 0px ${darkTheme.color.shadow}`,

      },
    },
    variant: {
      primary: {
        color: darkTheme.color.onPrimaryContainer,
        backgroundColor: darkTheme.color.primaryContainer,
        vars: {
          [splash.theme.hoverColor]: darkTheme.color.onPrimaryContainer,
          [splash.theme.pressedColor]: darkTheme.color.onPrimaryContainer,
        },
      },
      primaryLowered: {

      },
      secondary: {
        color: darkTheme.color.onSecondaryContainer,
        backgroundColor: darkTheme.color.secondaryContainer,
        vars: {
          [splash.theme.hoverColor]: darkTheme.color.onSecondaryContainer,
          [splash.theme.pressedColor]: darkTheme.color.onSecondaryContainer,
        },
      },
      secondaryLowered: {},
      tertiary: {
        color: darkTheme.color.onTertiaryContainer,
        backgroundColor: darkTheme.color.tertiaryContainer,
        vars: {
          [splash.theme.hoverColor]: darkTheme.color.onTertiaryContainer,
          [splash.theme.pressedColor]: darkTheme.color.onTertiaryContainer,
        },
      },
      tertiaryLowered: {},
      surface: {
        color: darkTheme.color.primary,
        backgroundColor: darkTheme.color.surfaceContainerHigh,
        vars: {
          [splash.theme.hoverColor]: darkTheme.color.primary,
          [splash.theme.pressedColor]: darkTheme.color.primary,
        },
      },
      surfaceLowered: {
        color: darkTheme.color.primary,
        backgroundColor: darkTheme.color.surfaceContainerLow,
        vars: {
          [splash.theme.hoverColor]: darkTheme.color.primary,
          [splash.theme.pressedColor]: darkTheme.color.primary,
        },
      },
    },
  },
  defaultVariants: {
    size: "regular",
    elevation: "normal",
  },
})
