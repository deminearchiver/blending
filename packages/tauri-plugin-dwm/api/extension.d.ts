export * from "@tauri-apps/api/window";

declare module "@tauri-apps/api/window" {
  declare class Window {
    setCaptionColor(color: string): Promise<void>;
  }
}
