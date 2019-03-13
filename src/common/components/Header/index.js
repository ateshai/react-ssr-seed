import React from "react";
import MainNavigation from "../Navigation/mainNavigation";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <MainNavigation>
        <Link className="navigation__link" to="/">Main Page</Link>
        <Link className="navigation__link" to="/subpage">Sub Page</Link>
      </MainNavigation>
    </div>
  )
};

export default Header;