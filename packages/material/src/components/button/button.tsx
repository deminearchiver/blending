import { JSX, Match, ParentComponent } from "solid-js";
import { Splash } from "../splash";

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
