import React, { useEffect } from "react";

import Navbar from "./nav-bar/Navbar";
import "./main-content.css";
import { useSelector, connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ContactusPage from "../../pages/ContactusPage";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
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
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutpage" component={AboutPage} />
        <Route exact path="/contactuspage" component={ContactusPage} />
        <Route exact path="/newspage" component={NewsPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(MainContent);
