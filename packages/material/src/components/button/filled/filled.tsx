import { ParentComponent } from "solid-js";
import { Button, ButtonProps } from "../button";
import { filledButtonStyle } from "./filled.css";



export const FilledButton: ParentComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      attributes={{
        class: filledButtonStyle,
      }} />
  )
}
