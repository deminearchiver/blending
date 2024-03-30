import { Component } from "solid-js";

import "./icon.css";
import { iconStyle } from "./icon.css";
import { MaterialSymbol } from "../../symbols";


export type IconProps = {
  name: MaterialSymbol;
}

export const Icon: Component<IconProps> = (props) => {
  return (
    <span class={`${iconStyle} material-symbols-rounded`}>
      {props.name}
    </span>
  );
}
