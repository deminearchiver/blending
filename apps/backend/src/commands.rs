use csscolorparser::Color;
use raw_window_handle::{HasWindowHandle, RawWindowHandle, Win32WindowHandle};
use tauri::{command, Runtime, Window};
use windows_sys::Win32::{Foundation::COLORREF, Graphics::Dwm};

#[command]
pub async fn set_title_bar_color<R: Runtime>(
  window: Window<R>,
  color: Color,
) {
  let handle = window.window_handle().unwrap().as_raw();
  match handle {
    RawWindowHandle::Win32(Win32WindowHandle {hwnd, .. }) => {
      let rgba = color.to_rgba8();
      let value: COLORREF = u32::from(rgba[0])
        | (u32::from(rgba[1]) << 8)
        | (u32::from(rgba[2]) << 16);
      unsafe {
        Dwm::DwmSetWindowAttribute(
          hwnd.get(), 
          Dwm::DWMWA_CAPTION_COLOR as _,
          &value as *const _ as _,
          std::mem::size_of::<COLORREF>() as _,
        );
      }
    },
    _ => {},
  }
}
