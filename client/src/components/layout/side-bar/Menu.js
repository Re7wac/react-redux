import { Collapse } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";
import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
import RoomSharpIcon from "@material-ui/icons/RoomSharp";
import ContactMailSharpIcon from "@material-ui/icons/ContactMailSharp";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    whiteSpace: "nowrap",
    paddingTop: 70,
    backgroundColor: theme.palette.secondary.light,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  item: {
    paddingLeft: theme.spacing(3),
    height: "60px",
  },
  itemLabel: {
    display: "block",
  },
  noitemLabel: {
    display: "none",
  },
}));

const Menu = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  let location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      className={classes.root}
    >
      <ListItem button className={classes.item} component={Link} to='/HomePage'>
        <ListItemIcon>
          <AccountBalanceSharpIcon />
        </ListItemIcon>
        <ListItemText
          primary='Home'
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
      </ListItem>

      <ListItem
        button
        className={classes.item}
        component={Link}
        to='/aboutpage'
      >
        <ListItemIcon>
          <RoomSharpIcon />
        </ListItemIcon>
        <ListItemText
          primary='About us'
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
      </ListItem>
      <ListItem
        button
        className={classes.item}
        component={Link}
        to='/EventsPage'
        onClick={handleClick}
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText
          primary='Events'
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
        {props.sideBar.open === "open" ? (
          open ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : (
          ""
        )}
      </ListItem>
      <Collapse
        in={
          props.sideBar.open === "open" &&
          open &&
          location.pathname === "/EventsPage"
        }
        timeout='auto'
        unmountOnExit
      >
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        className={classes.item}
        component={Link}
        to='/ServicesPage'
      >
        <ListItemIcon>
          <ContactMailSharpIcon />
        </ListItemIcon>
        <ListItemText
          primary=' Services'
          className={
            props.sideBar.open === "open"
              ? classes.itemLabel
              : classes.noitemLabel
          }
        />
      </ListItem>
      <ListItem
        button
        className={classes.item}
        component={Link}
        to='/SupportPage'
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText
          primary='Support'
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
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Menu);
