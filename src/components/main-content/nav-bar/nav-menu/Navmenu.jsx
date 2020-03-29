import React from "react";
import Signin from "../sign-in/Signin";
import "./nav-menu.css";

import { makeStyles, withStyles } from "@material-ui/core/styles";
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
    background: " rebeccapurple",
    display: "flex",
    marginLeft: "10%"
  },
  selected: {}
});

const styles = {
  root: {
    color: "#eee"
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
      <Signin />
    </BottomNavigation>
  );
};

export default withStyles(styles)(Navmenu);
// import React from "react";
// import Signin from "../sign-in/Signin";
// import "./nav-menu.css";

// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import FolderIcon from "@material-ui/icons/Folder";
// import RestoreIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     background: "transparent !important",
//     display: "flex",
//     height: "100%"
//   },
//   "&$selected": {
//     color: "red"
//   }
// });

// export default function Navmenu() {
//   const history = useHistory();
//   const classes = useStyles();
//   const [value, setValue] = React.useState("recents");
//   const [state, setState] = React.useState({ navIndex: 0 });
//   const [active, setActive] = React.useState({ navIndex: 0 });

//   const handleClick = newValue => {
//     history.push(newValue);
//   };
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     setState({ navIndex: 2 });
//     setActive({ active: "today" });
//   };

//   return (
//     <div className="navmenu-container">
//       <BottomNavigation onChange={handleChange} className={classes.root}>
//         <BottomNavigationAction
//           label="Our Company"
//           value="Our Company"
//           icon={<RestoreIcon />}
//           component={Link}
//           to="/"
//           isActive={state.navIndex === 1}
//         />

//         <BottomNavigationAction
//           label="News"
//           value="News"
//           component={Link}
//           to="/newspage"
//           icon={<FavoriteIcon />}
//           active={state.navIndex === 2}
//         />
//         <BottomNavigationAction
//           label="About us"
//           value="About us"
//           icon={<LocationOnIcon />}
//           component={Link}
//           to="/aboutpage"
//           classActive={state.navIndex === 3}
//         />
//         <BottomNavigationAction
//           label="Contact us"
//           value="Contact us"
//           icon={<FolderIcon />}
//           isActive={state.navIndex === 4}
//           onClick={() => {
//             handleClick("/contactuspage");
//           }}
//         />
//       </BottomNavigation>
//       <Signin />
//     </div>
//   );
// }
