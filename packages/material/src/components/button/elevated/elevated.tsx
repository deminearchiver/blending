import { ParentComponent } from "solid-js";
import { Button, ButtonProps } from "../button";
import { elevatedButtonStyle } from "./elevated.css";



export const ElevatedButton: ParentComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      attributes={{
        class: elevatedButtonStyle,
      }} />
  )
}
