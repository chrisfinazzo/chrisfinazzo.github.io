import React from "react";
import { render } from "react-snapshot";
import Main from "./main";
import "./index.scss";

render(
  <Main/>, 
  document.getElementById("root")
);
