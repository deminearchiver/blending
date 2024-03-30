import { invoke } from "@tauri-apps/api/core";

export interface FtpStreamOptions {
  address: string;
}

export class FtpStream {
  protected constructor(private readonly address: string) {}

  static async connect(options: FtpStreamOptions): Promise<FtpStream> {
    return new FtpStream(options.address);
  }
}
