import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../common/store/configureStore";
import App from "../common/app";

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

ReactDOM.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <Route match="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
)
