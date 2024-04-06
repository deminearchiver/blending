import { JSX, Match, ParentComponent, createMemo } from "solid-js";
import { Splash } from "../splash";
import { mergeRefs } from "@solid-primitives/refs";
import { elevatedButtonStyle, filledButtonStyle, outlinedButtonStyle, testButtonStyle, textButtonStyle, tonalButtonStyle } from "./button.css";
import { Dynamic, style } from "solid-js/web";
import { Focus } from "../focus";

export interface ButtonProps {
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  href?: string;
  attributes?: Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "children">;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  const disabled = !props.href && !props.onClick;

  let ref!: HTMLElement;

  return (
    <button
      ref={ref as HTMLButtonElement}
      onClick={props.onClick}
      disabled={disabled}
      {...props.attributes}>
      <Splash
        for={ref}
        disabled={disabled} />
      {props.children}
    </button>
  );
}

export type ButtonTest = 
  & Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, 
    | "children"
  >
  & JSX.CustomAttributes<HTMLButtonElement>
  & {
    
  };

export type ButtonVariant =
  | "elevated"
  | "filled"
  | "tonal"
  | "outlined"
  | "text";

const STYLE_MAP: Record<ButtonVariant, string> = {
  elevated: elevatedButtonStyle,
  filled: filledButtonStyle,
  tonal: tonalButtonStyle,
  outlined: outlinedButtonStyle,
  text: textButtonStyle,
}

export const buttonFactory = (variant: ButtonVariant): ParentComponent<ButtonTest> => (props) => {
  let ref!: HTMLElement;

  return (
    <button
      {...props}
      ref={mergeRefs(props.ref, element => ref = element)}
      class={[STYLE_MAP[variant], props.class].join(" ")}>
      <Focus
        for={ref} />
      <Splash
        for={ref}
        disabled={props.disabled} />
      {props.children}
    </button>
  );
  
  // return (
  //   isAnchor(props) ?
  //   <a
  //     {...props}
  //     ref={mergeRefs(props.ref, element => ref = element)}
  //     class={[testButtonStyle, props.class].join(" ")}>
  //     <Splash
  //       for={ref}
  //       disabled={props.disabled} />
  //     {props.children}
  //   </a> :
  //   <button
      
  //     {...props}
  //     ref={mergeRefs(props.ref, element => ref = element)}
  //     class={[testButtonStyle, props.class].join(" ")}>
  //     <Splash
  //       for={ref}
  //       disabled={props.disabled} />
  //     {props.children}
  //   </button> 
  // )
}
