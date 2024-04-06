import { Component, createSignal, onMount } from "solid-js";

import { appStyle, contentStyle } from "./app.css";
import { Icon } from "@blending/material/components/icon";
import { SearchBar } from "@blending/material/components/search";

import "material-symbols/rounded.css";
import { Splash } from "@blending/material/components/splash";

import { invoke } from "@tauri-apps/api/core";

import { IconButton } from "@blending/material/components/icon-button"

import { darkTheme } from "@blending/material/theme/global/dark";
import { getVarName } from "@vanilla-extract/private";
import { Button } from "@blending/material/components/button";
import { Menu, MenuItem } from "@tauri-apps/api/menu";
import { LogicalPosition } from "@tauri-apps/api/dpi";
import { createEventListener } from "@solid-primitives/event-listener";
import { NavigationRail } from "@blending/material/components/navigation-rail";
import { FloatingActionButton } from "@blending/material/components/floating-action-button";
import { getCurrent } from "@tauri-apps/api/window";
import { Card } from "@blending/material/components/card";

export const App: Component = (props) => {
  // createEventListener(
  //   document,
  //   "contextmenu",
  //   async (event) => {
  //     event.preventDefault();
  //     console.log("CONTEXT MENU");
  //     const menu = await Menu.new({
  //       items: [
  //         await MenuItem.new({
  //           id: "delete",
  //           text: "&Delete",
  //         }),
  //       ]
  //     });
  //     await menu.popup(new LogicalPosition(event.x, event.y));
  //   },
  // );

  onMount(async () => {
    const color = getComputedStyle(document.body)
      .getPropertyValue(getVarName(darkTheme.color.surfaceContainer));
    invoke("set_title_bar_color", { color: color });
    


  });

  return (
    <div class={appStyle}>
      <div class={contentStyle}>
        <NavigationRail
          leading={
            <FloatingActionButton.Primary>
              <Icon name="add" />
            </FloatingActionButton.Primary>
          }>
          <NavigationRail.Destination
            icon={<Icon name="home" />}
            label={<span>Home</span>} />
          <NavigationRail.Destination
            icon={<Icon name="settings" />}
            label={<span>Settings</span>} />
        </NavigationRail>
        <header>
          <SearchBar />
        </header>
        <main>
          <Button.Elevated onClick={() => {}}>Test</Button.Elevated>
          <Button.Filled onClick={() => {}}>Test</Button.Filled>
          <Button.Tonal onClick={() => {}}>Test</Button.Tonal>
          <Button.Outlined onClick={() => {}}>Test</Button.Outlined>
        </main>
      </div>
    </div>
  );
}
