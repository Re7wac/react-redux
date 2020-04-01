import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import "./menu.css";
import { connect } from "react-redux";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.secondary.light
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  item: {
    paddingLeft: theme.spacing(3)
  },
  itemLabel: {
    display: "block",
    transition: theme.transitions.create("display")
  },
  noitemLabel: {
    display: "none",
    transition: theme.transitions.create("display")
  }
}));

const Menu = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  console.log(props.sideBar);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button className={classes.item}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText
          primary="Sent mail"
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
      </ListItem>
      <ListItem button className={classes.item}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Drafts"
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
      </ListItem>
      <ListItem button className={classes.item}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText
          primary="Inbox"
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
      </ListItem>
    </List>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Menu);
// import React from "react";
// import Logo from "./Logo";
// import Theme from "./Theme";
// import { Link } from "react-router-dom";

// const Menu = props => {
//   const elements = [
//     { label: "News", url: "/newspage" },
//     { label: "Events", url: "/eventspage" },
//     { label: "Support", url: "/supportpage" },
//     { label: "Services", url: "/servicespage" }
//   ];
//   const items = [];
//   elements.forEach(data => {
//     const label = data.label;
//     const url = data.url;
//     items.push(
//       <li className="nav-item" key={label}>
//         <Link to={url} className="nav-link">
//           <svg
//             aria-hidden="true"
//             focusable="false"
//             data-prefix="fad"
//             data-icon="cat"
//             role="img"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512"
//             className="svg-inline--fa fa-cat fa-w-16 fa-9x"
//           >
//             <g className="fa-group">
//               <path
//                 fill="currentColor"
//                 d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
//                 className="fa-secondary"
//               ></path>
//               <path
//                 fill="currentColor"
//                 d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
//                 className="fa-primary"
//               ></path>
//             </g>
//           </svg>
//           <span className="link-text">{label}</span>
//         </Link>
//       </li>
//     );
//   });
//   return (
//     <ul className="navbar-nav">
//       <Logo />
//       {items}
//       <Theme />
//     </ul>
//   );
// };

// export default Menu;
