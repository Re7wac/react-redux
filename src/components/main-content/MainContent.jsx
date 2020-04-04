import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ContactusPage from "../../pages/ContactusPage";
import EventsPage from "../../pages/EventsPage";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
import ServicesPage from "../../pages/ServicesPage";
import SupportPage from "../../pages/SupportPage";

const MainContent = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default MainContent;
