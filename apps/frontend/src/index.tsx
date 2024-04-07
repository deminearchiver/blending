/* @refresh reload */

import { render } from "solid-js/web";
import { App } from "./App";
import { Router, Route } from "@solidjs/router";

import "./global.css";
import "@blending/material/theme/global/dark";

import "material-symbols/rounded.css";
import { Test } from "./components/onboarding";
render(
  () => <App />,
  document.getElementById("root")!,
);
