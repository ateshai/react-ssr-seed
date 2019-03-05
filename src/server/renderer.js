import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { renderRoutes } from 'react-router-config';
import routes from "../common/routes";

// import App from "../common/app";
// import {renderRoutes} from "react-router-config";
// import routes from "../common/routes";

// console.log("routes", routes);

export default (req, store) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={ store }>
      <StaticRouter location={req.path} context={{}} >
        { renderRoutes(routes) }
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <link rel="stylesheet" href="bundle.css"> 
      </head>
      <body>
        <div id="root">${content}</div>

        <script>
          window.__PRELOADED_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="vendor.js"></script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

};