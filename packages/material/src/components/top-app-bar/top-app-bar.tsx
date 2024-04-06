import { Component } from "solid-js";
import { scrollAnimation, topAppBarStyle } from "./top-app-bar.css";
import { IconButton } from "../icon-button";
import { Icon } from "../icon";
import { createScrollPosition } from "@solid-primitives/scroll";
import { darkTheme } from "../../theme/global/dark.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
export const TopAppBar: Component = (props) => {

  const scroll = createScrollPosition();

  const collapsed = 64;
  const expanded = 152;

  const toCollapse = expanded - collapsed;

  const y = () => Math.min(scroll.y, 88);

  const opacity = () => Math.min(y() / 88 * 2 - 0.5, 1);
  
  return (
    <header class={topAppBarStyle} style={
      assignInlineVars({
        [scrollAnimation]: `${y() / 88}`,
      })
    }>
      <IconButton>
        <Icon name="arrow_back" />
      </IconButton>
      <span style={{ opacity: opacity() }}>{y()} to {opacity()}</span>
    </header>
  )
}
