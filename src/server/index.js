import "@babel/polyfill";
import express from "express";
import bodyParser from "body-parser";
import { matchRoutes } from "react-router-config";

import configureStore from "../common/store/configureStore";
import renderer from "./renderer";
import routes from "../common/routes";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {

  // const preloadedState = { counter: 6 };
  const store = configureStore();

  const promises = matchRoutes(routes, req.path).map( ({route, match}) => {
    // console.log(match.params)
    return route.loadData ? route.loadData(store, match.params) : null;
  }).map(() => {
    // Be sure every promise resolved even if it being catch status
    promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      };
    };
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
