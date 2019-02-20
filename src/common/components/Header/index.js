import React from "react";
import { Link } from 'react-router-dom';
// import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="main-navigation">
        <ul>
          <li>
            <Link to="/">Main Page</Link>
            <Link to="/subpage">Sub Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;