/* @refresh reload */

import { render } from "solid-js/web";
import { App } from "./App";
import { Router, Route } from "@solidjs/router";

import "./global.css";

render(
  () => (
    <Router>
      <Route  component={App} />
    </Router>
  ),
  document.getElementById("root")!,
);
