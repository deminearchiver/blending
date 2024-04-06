use std::ops::Deref;

use tauri::{AppHandle, Manager, Runtime};

pub struct Blender<R: Runtime> {
  app: AppHandle<R>,
}

trait BlenderExt<R: Runtime> {
  fn blender(&self) -> &Blender<R>;
}

impl<R: Runtime, T: Manager<R>> BlenderExt<R> for T {
  fn blender(&self) -> &Blender<R> {
    self.state::<Blender<R>>().inner()
  }
}
