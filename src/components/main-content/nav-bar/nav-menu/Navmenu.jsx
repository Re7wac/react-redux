import React from "react";
import Signin from "../sign-in/Signin";
import "./nav-menu.css";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 80,
    background: "transparent !important",
    display: "flex"
  }
});

export default function Navmenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <Link to="/">
        <BottomNavigationAction
          label="Our Company"
          value="Our Company"
          icon={<RestoreIcon />}
        />
      </Link>
      <Link to="/aboutpage">
        <BottomNavigationAction
          label="News"
          value="News"
          icon={<FavoriteIcon />}
        />
      </Link>
      <Link to="/contactuspage">
        <BottomNavigationAction
          label="About us"
          value="About us"
          icon={<LocationOnIcon />}
        />
      </Link>
      <BottomNavigationAction
        label="Contact us"
        value="Contact us"
        icon={<FolderIcon />}
      />
      <Signin />
    </BottomNavigation>
  );
}
{
  /* <div className="nav-menu-container">
  <ul className="nav-menu">
    <li className="nav-item">Our Company</li>
    <li className="nav-item">News</li>
    <li className="nav-item">Our vision</li>
    <li className="nav-item">About us</li>
    <li className="nav-item">Contact us</li>
  </ul>

  <Language />
</div> */
}
