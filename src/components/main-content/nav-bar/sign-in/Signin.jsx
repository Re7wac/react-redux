import React from "react";
import IconButton from "@material-ui/core/IconButton";
import "./signin.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Signin = props => {
  return (
    <div className="signin-container">
      <IconButton color="secondary" aria-label="add an alarm">
        <AccountCircleIcon style={{ fontSize: 50 }} />
      </IconButton>
    </div>
  );
};

export default Signin;
