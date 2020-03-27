import React, { useEffect } from "react";

import Navbar from "./nav-bar/Navbar";
import "./main-content.css";
import { useSelector, connect } from "react-redux";
const MainContent = props => {
  const navsideState = props.sideBar.open;
  const theme = props.theme;
  useEffect(() => {
    console.log("test : ", navsideState);
  }, []);

  return (
    <div
      className="main-content"
      className={navsideState !== "open" ? "full-width" : "small-width"}
    >
      <h1>sdfsdf sdfsdfsdf sdfsdsdf sdfsdfsdf sdfsdf sd sdf {theme}</h1>
      <Navbar />
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.sideBar.theme
});

export default connect(mapStateToProps)(MainContent);
