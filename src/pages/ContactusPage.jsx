import React from "react";
import Navbar from "../components/main-content/nav-bar/Navbar";
import { connect } from "react-redux";

const ContactusPage = props => {
  const navsideState = props.sideBar.open;
  const theme = props.theme;
  return (
    <div className="page-container">
      <h1>
        Contct us {navsideState} {theme}
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(ContactusPage);
