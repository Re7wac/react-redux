import React from "react";
import { connect } from "react-redux";

const AboutPage = props => {
  const navsideState = props.sideBar.open;
  const theme = props.theme;
  return (
    <div className="page-container">
      <h1>
        About us dfsfds dsfsdf dsf fds s sd sd sf {navsideState} {theme}
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(AboutPage);
