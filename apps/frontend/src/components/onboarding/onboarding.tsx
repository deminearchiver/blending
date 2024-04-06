import { Button } from "@blending/material/components/button";
import { TopAppBar } from "@blending/material/components/top-app-bar";
import { Component } from "solid-js";
import { containerStyle, contentStyle, footerButtonStyle, onboardingFooterStyle } from "./onboarding.css";

import { open } from "@tauri-apps/plugin-dialog";


export const Onboarding: Component = (props) => {
  return (
    <div class={containerStyle}>
      {/* <TopAppBar /> */}
      <main class={contentStyle}>
        <Button.Filled onClick={() => open({
          directory: true,
        })}>
          Open
        </Button.Filled>
      </main>
      {/* <footer class={onboardingFooterStyle}>
        <Button.Text disabled class={footerButtonStyle}>Back</Button.Text>
        <Button.Outlined disabled class={footerButtonStyle}>Back</Button.Outlined>
        <Button.Tonal disabled class={footerButtonStyle}>Next</Button.Tonal>
        <Button.Filled disabled class={footerButtonStyle}>Next</Button.Filled>
        <Button.Elevated disabled class={footerButtonStyle}>Next</Button.Elevated>
      </footer>
      <footer class={onboardingFooterStyle}>
        <Button.Text onClick={() => {}} class={footerButtonStyle}>Back</Button.Text>
        <Button.Outlined onClick={() => {}} class={footerButtonStyle}>Back</Button.Outlined>
        <Button.Tonal onClick={() => {}} class={footerButtonStyle}>Next</Button.Tonal>
        <Button.Filled onClick={() => {}} class={footerButtonStyle}>Next</Button.Filled>
        <Button.Elevated onClick={() => {}} class={footerButtonStyle}>Next</Button.Elevated>
      </footer> */}


      <footer class={onboardingFooterStyle}>
        <Button.Outlined onClick={() => {}} class={footerButtonStyle}>Back</Button.Outlined>
        <Button.Tonal onClick={() => {}} class={footerButtonStyle}>Next</Button.Tonal>
      </footer>
    </div>
  )
}
