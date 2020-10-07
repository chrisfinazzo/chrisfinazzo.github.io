import React from "react";
import { render } from "react-snapshot";
import Main from "./main";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

render(
  <Main/>, 
  document.getElementById("root")
);

serviceWorker.register();
