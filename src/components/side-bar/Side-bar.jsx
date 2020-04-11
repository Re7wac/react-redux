import React from "react";
import Menu from "./Menu";
import { connect } from "react-redux";
import { makeStyles, Box } from "@material-ui/core";
import Theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: "width 300ms ease",
    height: "100%",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
  },
}));
const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Box
      width={props.sideBar.open === "open" ? "16rem" : "5rem"}
      bgcolor="secondary.light"
      className={classes.root}
    >
      <Menu />
      <Theme />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Sidebar);
