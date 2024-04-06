const COMMANDS: &[&str] = &[
  "set_window_caption_color",
];

fn main() {
  tauri_plugin::Builder::new(COMMANDS)
    .build();
}
