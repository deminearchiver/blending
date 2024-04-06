import { ParentComponent } from "solid-js";
import { cardStyle } from "./card.css";

export const Card: ParentComponent = (props) => {
  return (
    <div class={cardStyle}>
      {props.children}
    </div>
  )
}
