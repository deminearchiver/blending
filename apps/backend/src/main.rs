// Prevents additional console window on Windows in release, DO NOT REMOVE!!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use windows_core::ComInterface;
use std::{fs::{self, File}, io::{copy, Read, Write}, path::{Path, PathBuf}};

use tauri::{image::Image, menu::{Menu, MenuBuilder, MenuItemKind}, path::BaseDirectory, tray::{ClickType, TrayIconEvent}, App, AppHandle, Manager, Resource, Runtime};
use webview2_com_sys::Microsoft::Web::WebView2::Win32::{ICoreWebView2Settings8, ICoreWebView2_19};


mod commands;

// fn build_menu<R: Runtime>(app: &AppHandle<R>) -> tauri::Result<Menu<R>> {
//   MenuBuilder::new(app)
//     .separator()
//     .text("window", "Hide &window")
//     .quit()
//     .build()
// }

fn get_resource<R: Runtime, P: AsRef<Path>>(app: &AppHandle<R>, path: P) -> tauri::Result<PathBuf> {
  app.path().resolve(PathBuf::from("resources").join(path), BaseDirectory::Resource)
}

static BLENDER_ICON: &[u8] = include_bytes!("../resources/blender/blender_icon_32x32.png");

// struct Progress<R> {
//   inner: R,
//   downloaded: usize,
//   total: usize,
// }
// impl<R: Read> Read for Progress<R> {
//   fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
//     self.inner.read(buf).map(|chunk| {
//       self.downloaded += chunk;
//       println!("{} / {}, {}%", self.downloaded, self.total, self.downloaded as f32 / self.total as f32 * 100.0);
//       chunk
//     })
//   }
// }

fn main() {
  // println!("Connecting...");
  // let mut stream = FtpStream::connect("mirrors.dotsrc.org:21").unwrap();
  // stream.login("anonymous", "").unwrap();
  // println!("Connected!");

  
  // println!("Going to Blender 4.1 directory...");
  // stream.cwd("/blender/blender-release/Blender4.1").unwrap();

  // println!("Downloading SHA256");
  // let mut cursor = stream.retr_as_stream("blender-4.1.0.sha256").unwrap();

  // println!("Downloaded SHA256! Reading...");
  // let mut buffer = String::new();
  // cursor.read_to_string(&mut buffer).unwrap();
  // stream.finalize_retr_stream(cursor).unwrap();
  // println!("SHA256:\n{}", buffer);
  // println!("Downloading Blender...");
  // const BLENDER_PATH: &str = "blender-4.1.0-windows-x64.zip";
  // let total = stream.size(BLENDER_PATH).unwrap_or_else(|_| 1);
  // stream.retr(
  //   BLENDER_PATH,
  //   move |reader| {
  //     let mut file = File::create("../blender.zip").unwrap();
  //     let mut progress = Progress {
  //       inner: reader,
  //       downloaded: 0,
  //       total,
  //     };
  //     copy(&mut progress, &mut file).unwrap();
          
  //     Ok(())
  //   }
  // ).unwrap();

  // println!("Downloaded Blender! Writing to file...");


  // stream.quit().unwrap();

  tauri::Builder::default()
    .plugin(tauri_plugin_shell::init())
    .plugin(tauri_plugin_window_state::Builder::default().build())
    .plugin(tauri_plugin_ftp::init())
    .setup(|app| {
      let app = app.handle(); 
      let tray = app.tray_by_id("main").unwrap();

      let icon_play = Image::from_path(get_resource(app, "icon_play.png")?)?;
      let icon_visibility = Image::from_path(get_resource(app, "icon_visibility.png")?)?;
      let icon_visibility_off = Image::from_path(get_resource(app, "icon_visibility_off.png")?)?;
      let icon_close = Image::from_path(get_resource(app, "icon_close.png")?)?;

      let menu = MenuBuilder::new(app)
        .icon("blender_4_0", "&Blender 4.0", Image::from_bytes(BLENDER_ICON).unwrap())
        .icon("blender_4_1", "&Blender 4.1", icon_play.clone())
        .separator()
        .icon("visibility", "Hide &window", icon_visibility_off.clone())
        .icon("quit", "&Exit", icon_close)
        .build().unwrap();
      tray
        .set_menu(Some(menu.clone()))
        .unwrap();
      app.on_tray_icon_event(move |app, event| {
        let window = app.get_webview_window("main").unwrap();
        let is_visible = window.is_visible().unwrap();
        match event.click_type {
          ClickType::Left => {
            if is_visible {
              window.hide().unwrap();
            } else {
              window.show().unwrap();
              window.set_focus().unwrap();
            }
          },
          _ => {},
        }
        if let Some(MenuItemKind::Icon(item)) = menu.get("visibility") {
          if is_visible {
            item.set_text("Hide &window").unwrap();
            item.set_icon(Some(icon_visibility_off.clone())).unwrap();
          } else {
            item.set_text("Show &window").unwrap();
            item.set_icon(Some(icon_visibility.clone())).unwrap();
          }
        }
      });
      

      let window = app.get_webview_window("main").unwrap();
      #[cfg(windows)]
      window.with_webview(|webview| {
        let controller = webview.controller();
        unsafe {
          let webview = controller
            .CoreWebView2().unwrap()
            .cast::<ICoreWebView2_19>().unwrap();
          let settings = webview
            .Settings().unwrap()
            .cast::<ICoreWebView2Settings8>().unwrap();

          settings.SetIsZoomControlEnabled(false).unwrap();
          settings.SetIsPinchZoomEnabled(false).unwrap();
          settings.SetAreDefaultContextMenusEnabled(false).unwrap();

          #[cfg(not(debug_assertions))]
          {
            settings.SetAreBrowserAcceleratorKeysEnabled(false).unwrap();
            settings.SetIsBuiltInErrorPageEnabled(false).unwrap();
          }
        }
      })?;


      Ok(())
    })
    .invoke_handler(
      tauri::generate_handler![
        commands::set_title_bar_color,
      ]
    )
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
