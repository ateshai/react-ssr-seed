import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { renderRoutes } from "react-router-config";
import routes from "./routes";

class App extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const { location } = this.props;

    let title = "Server Side Rendered React";
    if(location && location.pathname === "/") {
      title = "Home page"
    }

    let metatags = [
      {
        charset: "UTF-8"
      },
      {
        name: "description",
        content: "Lorem ipsum dolor sit amet"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
      }
    ];

    return(
      <div className="app">
        <Helmet title={ title } meta={ metatags } />
        { renderRoutes(routes) }
      </div>
    )
  }
}

export default App;
