import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "../common/app";

ReactDOM.hydrate(
  <BrowserRouter>
    <Route match="/" component={App} />
  </BrowserRouter>,
  document.querySelector("#root")
)
