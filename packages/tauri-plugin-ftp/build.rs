const COMMANDS: &[&str] = &["connect", "login", "retr"];

fn main() {
  tauri_plugin::Builder::new(COMMANDS)
    .build();
}
