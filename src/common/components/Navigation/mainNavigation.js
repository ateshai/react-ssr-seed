import React from "react";
import { Link } from 'react-router-dom';

const MainNavigation = (props) => {

  console.log("navigation children", props.children);
  const navItems = props.children.map( child =>(
    <li className="navigation__item">
      { child }
    </li>
  ));
  return (
    <nav className="navigation navigation--main">
      <ul className="navigation__list">
        { navItems }
      </ul>
    </nav>
  )
};

export default MainNavigation;