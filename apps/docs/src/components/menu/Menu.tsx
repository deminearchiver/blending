import { type JSX, type ParentComponent, type Ref } from "solid-js";

import styles from "./Menu.module.css";

interface MenuProps extends JSX.HTMLAttributes<HTMLElement> {
  class?: string;
  elevated?: boolean;
  ref?: Ref<HTMLElement>;
}

const Menu: ParentComponent<MenuProps> = (props) => {
  return (
    <ul
      {...props}
      ref={props.ref as Ref<HTMLUListElement>}
      class={
        `${styles["menu"]} ${props.class}`
      }
      classList={{
        [styles["menu-elevated"]]: props.elevated,
      }}>
      {props.children}
    </ul>
  );
}

export default Menu;
