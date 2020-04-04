import React from "react";
import { Link } from "react-router-dom";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    boxShadow:
      "-6px 2px 4px -1px rgba(0,0,0,0.2), -6px 4px 5px 0px rgba(0,0,0,0.14), -6px 1px 10px 0px rgba(0,0,0,0.12)",
    position: "relative",
    zIndex: 2,
    borderRadius: 0
  }
}));
const Logo = props => {
  const classes = useStyles("");
  return (
    <Paper className={classes.root}>
      <Link to="#" className="nav-link">
        <i className="fas fa-angle-double-right fa-secondary"></i>
        <span className="link-text">RE7</span>
      </Link>
    </Paper>
  );
};

export default Logo;
