import React from "react";
import { connect } from "react-redux";

const NewsPage = props => {
  const navsideState = props.sideBar.open;
  const theme = props.theme;
  return (
    <div className="page-container">
      <h1>
        News asfdaslskdjsaklj lskdjaskld jaldjaslkjaskljaslkjaldkj{" "}
        {navsideState} {theme}
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(NewsPage);
