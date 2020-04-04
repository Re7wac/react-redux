import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import theme from "../../../material-theme/theme";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    background: theme.palette.primary.main,

    display: "flex"
  },
  selected: {}
}));

const styles = {
  root: {
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.05)
    }
  },
  selected: {
    "&$selected": {
      color: theme.palette.secondary.main
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
