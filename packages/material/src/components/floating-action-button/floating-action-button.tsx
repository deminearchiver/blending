import { ParentComponent } from "solid-js";
import { test } from "./floating-action-button.css";
import { Splash } from "../splash";
import { RecipeVariants } from "@vanilla-extract/recipes";

export interface FloatingActionButtonProps {
  lowered?: boolean;

}
type test = RecipeVariants<typeof test>;

interface FloatingActionButtonFactoryOptions {
  variant: "primary" | "secondary" | "tertiary" | "surface";
}

export const factory = (options: FloatingActionButtonFactoryOptions) => {
  const component: ParentComponent<FloatingActionButtonProps> = (props) => {
    let ref!: HTMLElement;

    return (
      <button
        ref={ref as HTMLButtonElement}
        class={
          test({
            variant: props.lowered ? `${options.variant}Lowered` : options.variant,
            size: "regular",
            elevation: props.lowered ? "lowered" : "normal",
          })
        }>
        <Splash for={ref} />
        {props.children}
      </button>
    );
  };
  return component;
}

// export const FloatingActionButton: ParentComponent<FloatingActionButtonProps> = (props) => {
//   let ref!: HTMLElement;

//   return (
//     <button
//       ref={ref as HTMLButtonElement}
//       class={
//         test({
//           size: "regular",
//           variant: "primary",
//         })
//       }>
//       <Splash for={ref} />
//       {props.children}
//     </button>
//   );
// }
