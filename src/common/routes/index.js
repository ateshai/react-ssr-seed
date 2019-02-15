// import React from "react";
import Home from "../pages/Home";
import SubPage from "../pages/SubPage";

export default [,
  {
    ...SubPage,
    path: "/subpage",
    exact: true
  },
  {
    ...Home,
    path: "/:initial?",
    exact: true
  }
];