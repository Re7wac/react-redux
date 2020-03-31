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
import theme from "../../../../material-theme/theme";

console.log(theme.palette.primary);

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 80,
    background: theme.palette.secondary["dark"],
    display: "flex"
  },
  item: {
    height: "100%"
  }
});

const styles = {
  root: {
    color: theme.palette.secondary["dark"]
  },
  selected: {
    color: theme.palette.secondary["dark"],
    "&$selected": {
      color: theme.palette.secondary["dark"]
    }
  }
};
const Navmenu = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navmenu-container">
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
            className={classes.item}
          />
        </Link>
        <Link to="/aboutpage">
          <BottomNavigationAction
            label="News"
            value="News"
            icon={<FavoriteIcon />}
            className={classes.item}
          />
        </Link>
        <Link to="/contactuspage">
          <BottomNavigationAction
            label="About us"
            value="About us"
            icon={<LocationOnIcon />}
            className={classes.item}
          />
        </Link>
        <Link to="/contactuspage">
          <BottomNavigationAction
            label="Contact us"
            value="Contact us"
            icon={<FolderIcon />}
            className={classes.item}
          />
        </Link>
      </BottomNavigation>
      <Signin />
    </div>
  );
};
