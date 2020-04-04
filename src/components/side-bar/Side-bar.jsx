import React from "react";
import { closeSideBar, openSideBar } from "../../actions/sidebar-actions";
import Menu from "./Menu";
import { useDispatch, connect } from "react-redux";
import { makeStyles, Box } from "@material-ui/core";
import Theme from "./Theme";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "width 600ms ease",
    height: "100%",
    position: "fixed",
    width: "5rem",
    "&:hover": {
      width: "16rem"
    },
    zIndex: 1
  }
}));
const Sidebar = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box
      bgcolor="secondary.light"
      className={classes.root}
      onMouseOver={() => dispatch(openSideBar())}
      onMouseLeave={() => dispatch(closeSideBar())}
    >
      <Menu />
      <Theme />
    </Box>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Sidebar);
