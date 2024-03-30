import { ParentComponent } from "solid-js";
import { iconButtonStyle } from "./icon-button.css";
import { Splash } from "../splash";

export const IconButton: ParentComponent = (props) => {
  let ref!: HTMLElement;
  return (
    <button
      ref={ref as HTMLButtonElement}
      onClick={() => console.log("CLICK")}
      class={iconButtonStyle}>
      <Splash
        for={ref} />
      {props.children}
    </button>
  );
}
