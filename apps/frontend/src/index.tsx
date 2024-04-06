/* @refresh reload */

import { render } from "solid-js/web";
import { App } from "./App";
import { Router, Route } from "@solidjs/router";

import "./global.css";

import "material-symbols/rounded.css";
import { Test } from "./components/onboarding";

render(
  () => <Test />,
  document.getElementById("root")!,
);
