import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bodyParser from "body-parser";
import { Helmet } from "react-helmet";
import reducers from "../common/reducers";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(bodyParser.json());
app.use(express.static("build/public"));

import App from "../common/app";

app.get("*", (req, res) => {

  const context = {};
  const store = createStore(reducers);

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

        <script src="client_bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
