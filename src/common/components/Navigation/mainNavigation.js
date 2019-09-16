import React from "react";

/** MainNavigation component description */
const MainNavigation = (props) => {

  console.log("navigation children", props.children);
  const navItems = props.children.map( (child, i) => (
    <li className="navigation__item" key={i}>
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