// import React from "react";
import Home from "../pages/Home";

export default [
  {
    ...Home,
    path: "/:initial?",
    exact: true
  }
];