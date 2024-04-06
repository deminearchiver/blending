use tauri::{plugin::{self, TauriPlugin}, Runtime};

mod commands;

pub fn init<R: Runtime>() -> TauriPlugin<R> {
  return plugin::Builder::new("dwm")
    .invoke_handler(tauri::generate_handler![
      #[cfg(windows)]
      commands::set_window_caption_color,
    ])
    .build()
}
