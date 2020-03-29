import React from "react";
import { Link } from "react-router-dom";

const Logo = probs => {
  return (
    <li className="logo">
      <Link to="#" className="nav-link">
        <i className="fas fa-angle-double-right fa-secondary"></i>
        <span className="link-text">RE7</span>
      </Link>
    </li>
  );
};

export default Logo;
