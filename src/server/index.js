import "babel-polyfill";
import express from "express";
import bodyParser from "body-parser";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet";
import configureStore from "../common/store/configureStore";

import App from "../common/app";
import reducers from "../common/reducers";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};

  const preloadedState = { counter: 6 };
  const store = configureStore(preloadedState);

  const content = ReactDOMServer.renderToString(
    <Provider store={ store }>
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">
          ${content}
        </div>

        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="client_bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
