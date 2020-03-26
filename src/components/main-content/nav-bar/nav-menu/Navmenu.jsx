import React from "react";
import Language from "../switch-language/Language";
import "./nav-menu.css";
const Navmenu = props => {
  return (
    <div className="nav-menu-container">
      <ul className="nav-menu">
        <li className="nav-item">Our Company</li>
        <li className="nav-item">News</li>
        <li className="nav-item">Our vision</li>
        <li className="nav-item">About us</li>
        <li className="nav-item">Contact us</li>
      </ul>

      <Language />
    </div>
  );
};

export default Navmenu;
