import { ButtonVariant, buttonFactory } from "./button";
import { ElevatedButton as Elevated } from "./elevated/elevated";
import { FilledButton as Filled } from "./filled/filled";
import { OutlinedButton as Outlined } from "./outlined/outlined";
import { TonalButton as Tonal } from "./tonal/tonal";

// export const Button = {
//   Elevated,
//   Filled,
//   Tonal,
//   Outlined,
// };

export const Button = {
  Elevated: buttonFactory("elevated"),
  Filled: buttonFactory("filled"),
  Tonal: buttonFactory("tonal"),
  Outlined: buttonFactory("outlined"),
  Text: buttonFactory("text"),
};
