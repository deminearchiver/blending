use std::{net::{SocketAddr, ToSocketAddrs}, os::windows::io::RawSocket};

use ftp::FtpStream;
use tauri::{command, AppHandle, Manager, Runtime, State};
use url::Url;

use crate::Connections;

#[command]
pub(crate) async fn connect<R: Runtime>(
  app: AppHandle<R>,
  state: State<'_, Connections>,
  address: SocketAddr, // mirrors.dotsrc.org:21
) -> Result<(), ()> {
  let mut connections = state.0.lock().unwrap();
  let stream = FtpStream::connect(address).unwrap();
  connections.insert(
    address,
    stream,
  );
  Ok(())
}
