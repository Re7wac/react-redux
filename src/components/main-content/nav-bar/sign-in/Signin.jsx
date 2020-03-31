import React from "react";
import IconButton from "@material-ui/core/IconButton";
import "./signin.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.contrastText,
    right: theme.spacing(2)
  }
}));
const Signin = props => {
  const classes = useStyles();
  return (
    <div className="signin-container">
      <IconButton className={classes.root} aria-label="add an alarm">
        <AccountCircleIcon style={{ fontSize: 30 }} />
      </IconButton>
    </div>
  );
};

export default Signin;
