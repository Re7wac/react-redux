import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "../views/AboutPage";
import EventsPage from "../views/EventsPage";
import HomePage from "../views/HomePage";
import ServicesPage from "../views/ServicesPage";
import SupportPage from "../views/SupportPage";
import Login from "../components/auth/Login";
const MainContent = props => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/aboutpage' component={AboutPage} />
        <Route exact path='/eventspage' component={EventsPage} />
        <Route exact path='/supportpage' component={SupportPage} />
        <Route exact path='/servicespage' component={ServicesPage} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  );
};

export default MainContent;
