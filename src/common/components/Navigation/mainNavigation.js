import React from "react";
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className="navigation navigation--main">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/">Main Page</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/subpage">Sub Page</Link>
        </li>
      </ul>
    </nav>
  )
};

export default MainNavigation;