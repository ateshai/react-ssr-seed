import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";

import App from "../common/app";
// import {renderRoutes} from "react-router-config";
// import routes from "../common/routes";

// console.log("routes", routes);

export default (req, store) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={ store }>
      <StaticRouter location={req.path} context={{}} >
        <App />
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">
          ${content}
        </div>

        <script>
          window.__PRELOADED_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="client_bundle.js"></script>
      </body>
    </html>
  `;

};