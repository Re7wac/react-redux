import React from "react";
import Navbar from "./nav-bar/Navbar";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ContactusPage from "../../pages/ContactusPage";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
import EventsPage from "../../pages/EventsPage";
import SupportPage from "../../pages/SupportPage";
import ServicesPage from "../../pages/ServicesPage";

const MainContent = props => {
  const navsideState = props.sideBar.open;

  return (
    <div
      className={
        ("main-content", navsideState !== "open" ? "full-width" : "small-width")
      }
    >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutpage" component={AboutPage} />
        <Route exact path="/contactuspage" component={ContactusPage} />
        <Route exact path="/newspage" component={NewsPage} />
        <Route exact path="/eventspage" component={EventsPage} />
        <Route exact path="/supportpage" component={SupportPage} />
        <Route exact path="/servicespage" component={ServicesPage} />

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
