import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
// import stats from './build/react-loadable.json';
import routes from "../common/routes";

// import App from "../common/app";
// import {renderRoutes} from "react-router-config";
// import routes from "../common/routes";

// console.log("routes", routes);


export default (req, store) => {
  let modules = [];
  
  const content = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={ store }>
        <StaticRouter location={req.path} context={{}} >
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  console.log("modules", modules);
  // let bundles = getBundles(stats, modules);

  // console.log("bundles", bundles);

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