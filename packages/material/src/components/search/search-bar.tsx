import { Accessor, Component, createSignal } from "solid-js";
import { searchBarInputStyle, searchBarStyle } from "./search-bar.css";
import { Icon } from "../icon";
import { Splash } from "../splash";
import { Ref } from "@solid-primitives/refs";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { darkTheme } from "../../theme/global/dark.css";
import { splash } from "../splash/css";

export const SearchBar: Component = () => {
  let ref!: HTMLElement;
  let inputRef!: HTMLInputElement;

  const [text, setText] = createSignal("");

  return (
    <div
      ref={ref as HTMLDivElement}
      class={searchBarStyle}
      onClick={() => inputRef.focus()}>
      <Splash
        for={ref} />
      <Icon name="search" />
      <input
        ref={inputRef}
        class={searchBarInputStyle}
        type="text"
        placeholder="Search"
        value={text()}
        onChange={(event) => setText(event.target.value)} />
    </div>
  )
}
