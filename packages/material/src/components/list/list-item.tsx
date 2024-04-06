import { JSX, ParentComponent } from "solid-js";
import { listItemContentStyle, listItemStyle } from "./list-item.css";
import { Splash } from "../splash";
import { Focus } from "../focus";

export interface ListItemProps {
  leading?: JSX.Element;
  title: JSX.Element;
  subtitle?: JSX.Element;
  trailing?: JSX.Element;
}

export const ListItem: ParentComponent<ListItemProps> = (props) => {
  let ref!: HTMLElement;
  return (
    <li
      ref={ref as HTMLLIElement}
      class={listItemStyle}>

      <Focus for={ref} />
      <Splash for={ref} />

      {props.leading}
      <div style={listItemContentStyle}>
        {props.title}
        {props.subtitle}
      </div>
      {props.trailing}
    </li>
  );
}
