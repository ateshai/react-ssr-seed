import React from "react";
import Header from "../../components/Header";
import "./subpage.scss";

const SubPage = () => {
  return (
    <div className="page sub">
      <Header />
      <h2>Sub Page</h2>
      <button className="subPageBtn">Stres Tuşu</button>
    </div>
  )
};

export default SubPage;