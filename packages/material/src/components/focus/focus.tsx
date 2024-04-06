import { Component, Ref, createSignal } from "solid-js";
import { focusStyle, focusVisibleStyle } from "./focus.css";
import { createEventListener, createEventListenerMap } from "@solid-primitives/event-listener";
import { MaybeAccessor, access } from "@solid-primitives/utils";

export interface FocusProps {
  for: MaybeAccessor<HTMLElement>;
}

export const Focus: Component<FocusProps> = (props) => {
  const [visible, setVisible] = createSignal(false);

  const element = access(props.for);

  createEventListenerMap(
    props.for,
    {
      focusin: (event) => {
        setVisible(element.matches(":focus-visible"));
      },
      focusout: (event) => {
        setVisible(false);
      },
      pointerdown: (event) => {
        setVisible(false);
      }
    }
  );

  return (
    <div
      class={focusStyle}
      classList={{
        [focusVisibleStyle]: visible(),
      }}>

    </div>
  )
}
