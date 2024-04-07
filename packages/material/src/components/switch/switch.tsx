import { Component, JSX, createSignal } from "solid-js";
import { switchDisabledStyle, switchHandleContainerStyle, switchHandleStyle, switchInputStyle, switchSelectedStyle, switchStyle, switchTrackStyle, switchUnselectedStyle } from "./switch.css";
import { Focus } from "../focus";
import { Splash } from "../splash";

interface SwitchProps {
  onInput?: JSX.InputEventHandler<HTMLInputElement, InputEvent>;
  selected?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export const Switch: Component<SwitchProps> = (props) => {
  let inputRef!: HTMLInputElement;

  const [selected, setSelected] = createSignal(props.selected ?? false);

  const state = () => selected() ? "selected" : "unselected";

  return (
    <div
      class={switchStyle}
      classList={{
        [switchSelectedStyle]: selected(),
        [switchUnselectedStyle]: !selected(),
        [switchDisabledStyle]: props.disabled,
      }}>
      <input
        ref={inputRef}
        class={switchInputStyle}
        disabled={props.disabled}
        required={props.required}
        checked={selected()}
        role="switch"
        onChange={event => {
          setSelected(event.target.checked);
        }}
        onInput={event => {
          setSelected(event.target.checked);
          props.onInput?.(event);
        }}
        type="checkbox"
        aria-hidden="true" />
      <div class={switchTrackStyle({
        state: state(),
      })}>
        <div
          class={
            switchHandleContainerStyle({
              state: state(),
            })
          }>
            <div
              style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                "border-radius": "4px",
              }}>
                <Focus
                  for={inputRef} />
            </div>
            <div
              style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                "border-radius": "inherit",
              }}>
                <Splash
                  for={inputRef} />
            </div>
            <div class={switchHandleStyle({
              state: state(),
            })}>

            </div>
          </div>
      </div>
    </div>
  );
}
