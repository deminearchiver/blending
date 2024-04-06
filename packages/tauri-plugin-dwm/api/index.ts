import { invoke } from "@tauri-apps/api/core";
import { Window } from "@tauri-apps/api/window";
import { getCurrent } from "@tauri-apps/api/window";

Window.prototype.setCaptionColor = async function(color) {
  return invoke(
    "plugin:dwm|set_window_caption_color",
    {
      color,
    },
  );
}
