import React from "react";
import "./pages.css";
import { connect } from "react-redux";
const HomePage = props => {
  const navsideState = props.sideBar.open;
  const theme = props.theme;
  return (
    <div className="page-container">
      <h1>
        Home Page {navsideState} {theme}
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(HomePage);
