import React from "react";
import { closeSideBar, openSideBar } from "../../actions/sidebar-actions";
import Menu from "./Menu";
import "./side-bar.css";
import { useDispatch } from "react-redux";

const Sidebar = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav
        className="navbar"
        onMouseOver={() => dispatch(openSideBar())}
        onMouseLeave={() => dispatch(closeSideBar())}
      >
        <Menu />
      </nav>
    </div>
  );
};

export default Sidebar;
