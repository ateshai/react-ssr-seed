import React from "react";
import Home from "../pages/Home";
// import SubPage from "../pages/SubPage";
import Loadable from 'react-loadable';

const loading = () => {
  return (
    <div>Loading...</div>
  )
}

const SubPage = Loadable({
  loader: () => import("../pages/SubPage"/*webpackChunkName: "SubPage"*/),
  loading
});

export default [,
  {
    component: SubPage,
    path: "/subpage",
    exact: true
  },
  {
    ...Home,
    path: "/:initial?",
    exact: true
  }
];