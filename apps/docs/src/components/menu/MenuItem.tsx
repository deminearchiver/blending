import { Portal } from "solid-js/web";
import Menu from "./Menu";
import { type ParentComponent, children, onMount, type JSX, Show, createSignal, createEffect, type FlowComponent, createMemo } from "solid-js";

import styles from "./MenuItem.module.css";
import { createEventListener, createEventListenerMap } from "@solid-primitives/event-listener";
import { createElementBounds } from "@solid-primitives/bounds";
import { createScrollPosition } from "@solid-primitives/scroll";
import { createPresence } from "@solid-primitives/presence";

export interface MenuItemProps {
  leading?: JSX.Element;
  label: JSX.Element;
  trailing?: JSX.Element;
}
interface Point {
  x: number;
  y: number;
}
const MenuItem: ParentComponent<MenuItemProps> = (props) => {
  const resolved = children(() => props.children);
  const isSubMenu = createMemo(() => resolved.toArray().length > 0);
  
  const [ref, setRef] = createSignal<HTMLElement>();
  const [menuRef, setMenuRef] = createSignal<HTMLElement>();

  const bounds = createElementBounds(ref);
  const scroll = createScrollPosition();

  const [itemHovered, setItemHovered] = createSignal(false);
  const [menuHovered, setMenuHovered] = createSignal(false);
  const show = createMemo(() => itemHovered() || menuHovered());

  const { isVisible, isMounted } = createPresence(
    show,
    {
      transitionDuration: 100,
    }
  );

  return (
    <li
      // ref={ref as HTMLLIElement}
      ref={setRef}
      class={styles["menu-item"]}
      classList={{
        [styles["clickable"]]: !isSubMenu(),
        [styles["open"]]: isVisible(),
      }}
      onPointerEnter={() => setItemHovered(true)}
      onPointerLeave={() => setItemHovered(false)}>
      {props.leading}
      <div class={styles["label"]}>
        {props.label}
      </div>
      {props.trailing}
      <Show when={isMounted()}>
        <Portal mount={document.body}>
          <div
            class={styles["wrapper"]}
            classList={{
              [styles["visible"]]: isVisible(),
            }}
            style={{
              "top": `${bounds.top! + scroll.y - 8}px`,
              "left": `${bounds.right!}px`,
            }}
            onPointerEnter={() => setMenuHovered(true)}
            onPointerLeave={() => setMenuHovered(false)}>
            <Menu
              ref={menuRef}
              elevated>
              {props.children}
            </Menu>
          </div>
        </Portal>
      </Show>
    </li>
  )
}

export default MenuItem;
