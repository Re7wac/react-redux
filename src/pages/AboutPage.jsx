import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const AboutPage = props => {
  const navsideState = props.sideBar.open;
  const theme = props.theme;
  return (
    <div className="page-container">
      <h1 color="secondary.main">
        {navsideState} {theme}
      </h1>
      <Box color="primary.dark">primary.main</Box>
      <Box color="secondary.main">secondary.main</Box>
      <Box color="error.main">error.main</Box>
      <Box color="warning.main">warning.main</Box>
      <Box color="info.main">info.main</Box>
      <Box color="success.main">success.main</Box>
      <Box color="text.primary">text.primary</Box>
      <Box color="text.secondary">text.secondary</Box>
      <Box color="text.disabled">text.disabled</Box>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(AboutPage);
