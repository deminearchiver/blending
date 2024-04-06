use std::{fs, path::PathBuf};

use reqwest::Url;
use resvg::{tiny_skia::Pixmap, usvg::{self, Fill, Node, Paint, Size, Transform}};

fn main() {
  // let paths = fs::read_dir("./resources").unwrap()
  //   .filter_map(|entry| {
  //     let path = entry.unwrap().path();
  //     match path.extension() {
  //       Some(extension) => {
  //         match extension.to_str() {
  //           Some("svg") => Some(path),
  //           _ => return None,
  //         }  
  //       },
  //       None => None,
  //     }
  //   });
  // for path in paths {
  //   let data = fs::read(path.clone()).unwrap();
  //   let tree = usvg::Tree::from_data(
  //     &data,
  //     &usvg::Options::default(),
  //     &usvg::fontdb::Database::new()
  //   ).unwrap();

  //   let nodes = tree.root().children();
  //   for node in nodes {
  //     match node {
  //       Node::Path(path) => {
  //         let path = path.as_ref();
  //         match path.fill() {
  //           Some(fill) => match fill.paint() {
  //             Paint::Color(mut color) => {
  //               color.red = 255;
  //             },
  //             _ => {},
  //           },
  //           _ => {},
  //         };
  //       },
  //       _ => {},
  //     };
  //     println!("cargo:warning={:?}", node);
  //   }

  //   let zoom = 4.0;
  //   let size = tree.size().to_int_size().scale_by(zoom).unwrap();


  //   let mut pixmap = Pixmap::new(size.width(), size.height()).unwrap();
  //   let transform = Transform::from_scale(zoom, zoom);
  //   resvg::render(&tree, transform, &mut pixmap.as_mut());

  //   fs::create_dir_all("./resources/rendered").unwrap();
  //   pixmap.save_png(PathBuf::from("./resources/rendered").join(path.with_extension("png").file_name().unwrap())).unwrap();
  // }
  
  // println!("cargo:rerun-if-changed=build.rs");
  tauri_build::build()
}
