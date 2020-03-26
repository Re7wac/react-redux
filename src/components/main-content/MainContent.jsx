import React, { useEffect } from "react";

import Navbar from "./nav-bar/Navbar";
import "./main-content.css";
import { useSelector } from "react-redux";
const MainContent = props => {
  const navsideState = useSelector(state => state.sideBar.sideBar);
  useEffect(() => {
    console.log("test : ", navsideState);
  }, []);

  return (
    <div
      className="main-content"
      className={navsideState !== "open" ? "full-width" : "small-width"}
    >
      <h1>sdfsdf sdfsdfsdf sdfsdsdf sdfsdfsdf sdfsdf sd sdf {navsideState}</h1>
      <Navbar />
    </div>
  );
};

export default MainContent;
