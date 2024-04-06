use semver::Version;
use suppaftp::FtpStream;

pub trait Scraper {

}

pub struct StableScraper {

}

impl StableScraper {
  pub fn scrape() {
    let mut stream = FtpStream::connect("mirrors.dotsrc.org:21").unwrap();
    stream.login("anonymous", "").unwrap();
    stream.cwd("/blender/blender-release/Blender4.1").unwrap();
  }
}

