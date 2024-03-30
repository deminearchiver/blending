import { ParentComponent } from "solid-js"
import { Button, ButtonProps } from "../button"
import { outlinedButtonStyle } from "./outlined.css"

export const OutlinedButton: ParentComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      attributes={{
        class: outlinedButtonStyle,
      }} />
  )
}
