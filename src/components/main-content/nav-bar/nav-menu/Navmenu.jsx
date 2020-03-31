import React from "react";
import "./nav-menu.css";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import theme from "../../../../material-theme/theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 80,
    background: theme.palette.primary.light,
    display: "flex",
    marginLeft: "10%"
  },
  selected: {}
});

const styles = {
  root: {
    color: ""
  },
  selected: {
    "&$selected": {
      color: "#64b5f6 "
    }
  }
};
const Navmenu = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const actionClasses = props.classes;

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      showLabels={true}
    >
      <BottomNavigationAction
        label="Company"
        value="Company"
        icon={<RestoreIcon />}
        component={Link}
        to="/ourcompanypage"
        classes={actionClasses}
      />
      <BottomNavigationAction
        label="News"
        value="News"
        icon={<FavoriteIcon />}
        component={Link}
        color="secondary"
        to="/newspage"
        classes={actionClasses}
      />
      <BottomNavigationAction
        label="About us"
        value="About us"
        icon={<LocationOnIcon />}
        component={Link}
        to="/aboutpage"
        classes={actionClasses}
      />
      <BottomNavigationAction
        label="Contact us"
        value="Contact us"
        icon={<FolderIcon />}
        component={Link}
        to="/contactuspage"
        classes={actionClasses}
      />
    </BottomNavigation>
  );
};

export default withStyles(styles)(Navmenu);
