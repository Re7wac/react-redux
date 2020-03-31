import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import "./nav-bar.css";
import Navmenu from "./nav-menu/Navmenu";
import Search from "./search/Search";
import Signin from "../nav-bar/sign-in/Signin";

const useStyles = makeStyles(x => ({
  root: {
    flexGrow: 1,
    height: "100%",

    width: "100$"
  },

  menuButton: {
    marginRight: x.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Search />
          <Navmenu />
          <Signin />
        </Toolbar>
      </AppBar>
    </div>
  );
}
