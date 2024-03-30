use std::{collections::HashMap, net::SocketAddr, sync::Mutex};

use ftp::FtpStream;
use tauri::{generate_handler, plugin::{Builder, TauriPlugin}, AppHandle, Manager, Runtime};
use url::Url;

mod commands;

#[derive(Default)]
struct Connections(Mutex<HashMap<SocketAddr, FtpStream>>);

pub struct Ftp<R: Runtime> {
  app: AppHandle<R>,
}

pub trait FtpExt<R: Runtime> {
  fn ftp(&self) -> &Ftp<R>;
}

impl<R: Runtime, T: Manager<R>> crate::FtpExt<R> for T {
  fn ftp(&self) -> &Ftp<R> {
    self.state::<Ftp<R>>().inner()
  }
}

pub fn init<R: Runtime>() -> TauriPlugin<R> {
  Builder::new("ftp")
    .setup(|app, api| {
      app.manage(Ftp {
        app: app.clone(),
      });
      app.manage(Connections::default());
      Ok(())
    })
    .invoke_handler(
      generate_handler![
        commands::connect,
      ]
    )
    .build()
}
