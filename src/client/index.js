import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';
import routes from "../common/routes";
import Loadable from 'react-loadable';

import configureStore from "../common/store/configureStore";


const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Provider store={ store }>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
  )
});