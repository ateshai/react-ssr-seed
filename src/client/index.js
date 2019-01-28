import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../common/reducers";
import App from "../common/app";

const store = createStore(reducers);

ReactDOM.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <Route match="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
)
