import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import EventsPage from "../../pages/EventsPage";
import HomePage from "../../pages/HomePage";

import ServicesPage from "../../pages/ServicesPage";
import SupportPage from "../../pages/SupportPage";
import Landing from "../login/layout/Landing";

import Register from "../login/auth/Register";

import Login from "../login/auth/Login";
import Dashboard from "../login/dashboard/Dashboard";
import PrivateRoute from "../login/private-route/PrivateRoute";
import { setCurrentUser, logoutUser } from "../../actions/authActions";

//        <Route exact path="/" component={HomePage} />

const MainContent = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route exact path="/aboutpage" component={AboutPage} />
        <Route exact path="/eventspage" component={EventsPage} />
        <Route exact path="/supportpage" component={SupportPage} />
        <Route exact path="/servicespage" component={ServicesPage} />

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>

        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
};

export default MainContent;
