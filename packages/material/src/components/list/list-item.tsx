import { Component, JSX, ParentComponent, children, createMemo } from "solid-js";
import { listItemContentStyle, listItemStyle, listItemSubtitleStyle, listItemTitleStyle } from "./list-item.css";
import { Splash } from "../splash";
import { Focus } from "../focus";

export interface ListItemProps {
  leading?: JSX.Element;
  title: JSX.Element;
  subtitle?: JSX.Element;
  trailing?: JSX.Element;
}

export const ListItem: Component<ListItemProps> = (props) => {
  let ref!: HTMLElement;

  return (
    <li
      ref={ref as HTMLLIElement}
      class={listItemStyle}
      tabIndex={0}>

      <Focus for={ref} />
      <Splash for={ref} />

      {props.leading}
      <div class={listItemContentStyle}>
        <div class={listItemTitleStyle}>{props.title}</div>
        <div class={listItemSubtitleStyle}>{props.subtitle}</div>
      </div>
      {props.trailing}
    </li>
  );
}
