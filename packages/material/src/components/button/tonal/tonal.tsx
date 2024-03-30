import { ParentComponent } from "solid-js";
import { Button, ButtonProps } from "../button";
import { tonalButtonStyle } from "./tonal.css";



export const TonalButton: ParentComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      attributes={{
        class: tonalButtonStyle,
      }} />
  )
}
