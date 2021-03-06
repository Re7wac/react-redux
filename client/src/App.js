import React from "react";
import Routers from "./routers/Router";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/nav-bar/Navbar";
import SideBar from "./components/layout/side-bar/Side-bar";
import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import { connect } from "react-redux";
import {
  OrangeTheme,
  IndigoTheme,
  PinkTheme,
} from "./components/material-theme/theme";
import "./App.css";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}));
const App = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider
        theme={
          props.theme === "orange"
            ? OrangeTheme
            : props.theme === "pink"
            ? PinkTheme
            : IndigoTheme
        }
      >
        <Router>
          <Grid container direction='row'>
            <Grid item xs={12}>
              <Navbar />
            </Grid>
            <Grid
              item
              style={{
                width: props.sideBar.open === "open" ? "250px" : "80px",
              }}
            >
              <SideBar />
            </Grid>
            <Grid item xs>
              <Routers />
            </Grid>
          </Grid>
        </Router>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);
