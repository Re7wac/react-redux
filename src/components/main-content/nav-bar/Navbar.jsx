import React, { Component } from "react";
import Search from "./search/Search";
import Signin from "./sign-in/Signin";
import Navmenu from "./nav-menu/Navmenu";
import "./nav-bar.css";

const Navbar = props => {
  return (
    <div className="nav-bar-container">
      <Search />
      <Navmenu />
      <Signin />
    </div>
  );
};

export default Navbar;
