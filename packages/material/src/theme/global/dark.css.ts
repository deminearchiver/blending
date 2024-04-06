import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import { Offset, ThreePointCubic } from "@blending/common/animation";


export const darkTheme = createGlobalTheme(
  ":root",
  {
    color: {
      primary: "#D0BCFF",
      onPrimary: "#381E72",
      primaryContainer: "#4F378B",
      onPrimaryContainer: "#EADDFF",

      secondary: "#CCC2DC",
      onSecondary: "#332D41",
      secondaryContainer: "#4A4458",
      onSecondaryContainer: "#E8DEF8",

      tertiary: "#EFB8C8",
      onTertiary: "#492532",
      tertiaryContainer: "#633B48",
      onTertiaryContainer: "#FFD8E4",

      error: "#F2B8B5",
      onError: "#601410",
      errorContainer: "#8C1D18",
      onErrorContainer: "#F9DEDC",

      surfaceDim: "#141218",
      surface: "#141218",
      surfaceBright: "#3B383E",
      onSurface: "#E6E0E9",

      surfaceVariant: "#49454F",
      onSurfaceVariant: "#CAC4D0",

      surfaceContainerHighest: "#36343B",
      surfaceContainerHigh: "#2B2930",
      surfaceContainer: "#211F26",
      surfaceContainerLow: "#1D1B20",
      surfaceContainerLowest: "#0F0D13",

      inverseSurface: "#E6E0E9",
      inverseOnSurface: "#322F35",

      surfaceTint: "#D0BCFF",

      outline: "#938F99",
      outlineVariant: "#49454F",

      scrim: "#000000",
      shadow: "#000000",
    },
    text: {
      labelLarge: {
        font: "500 14px/20px Roboto, sans-serif",
        family: "Roboto, sans-serif",
        size: "14px",
        weight: "500",
        lineHeight: "20px",
        letterSpacing: "0.1px"
      }
    },
    motion: {
      easing: {
        emphasized: new ThreePointCubic(
          new Offset(0.05, 0),
          new Offset(0.133333, 0.06),
          new Offset(0.166666, 0.4),
          new Offset(0.208333, 0.82),
          new Offset(0.25, 1),
        ).toLinearCSS(200),
        emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
        emphasizedAccelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
        standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",

      }
    }
  }
);

