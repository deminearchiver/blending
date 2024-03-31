import type { Component } from "solid-js"

import styles from "./MenuSeparator.module.css";

const MenuSeparator: Component = (props) => {
  return (
    <hr
      class={styles["menu-separator"]} />   
  )
}
export default MenuSeparator;
