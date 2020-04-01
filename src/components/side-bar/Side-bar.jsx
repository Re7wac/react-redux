import React from "react";
import { closeSideBar, openSideBar } from "../../actions/sidebar-actions";
import Menu from "./Menu";
import "./side-bar.css";
import { useDispatch, connect } from "react-redux";
import { makeStyles, Box } from "@material-ui/core";
import Logo from "./Logo";
import Theme from "./Theme";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "width 600ms ease",
    height: "100%",

    border: "1px solid black"
  }
}));
const Sidebar = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <Box
        bgcolor="secondary.light"
        className={(classes.root, "navbar")}
        onMouseOver={() => dispatch(openSideBar())}
        onMouseLeave={() => dispatch(closeSideBar())}
      >
        <Logo />
        <Menu />
        <Theme />
      </Box>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Sidebar);
