import { invoke } from "@tauri-apps/api/core";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { Color } from "@tauri-apps/api/window";

export async function setTitleBarColor(color: Color) {
  await invoke("plugin:customize|set_title_bar_color");
}
