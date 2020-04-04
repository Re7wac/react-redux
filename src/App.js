import React from "react";
import SideBar from "./components/side-bar/Side-bar";
import "./App.css";
import MainContent from "./components/main-content/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/nav-bar";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
const App = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid container spacing={12}>
            <Grid item xs>
              <Navbar />
            </Grid>
          </Grid>
          <Grid container spacing={12}>
            <Grid
              item
              style={{
                width: props.sideBar.open === "open" ? "250px" : "80px"
              }}
            >
              <SideBar />
            </Grid>
            <Grid item xs>
              <MainContent />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(App);
