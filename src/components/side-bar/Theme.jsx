import React from "react";
import { setTheme } from "../../actions/theme-ations";
import { useDispatch, connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0),
    borderRadius: 0,
    width: "100%",
    minHeight: "5rem",
    bottom: "0px",
    justifyContent: "baseline"
  }
}));

const Theme = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const themeLabel = props.theme;

  const theme =
    localStorage.getItem("theme") || localStorage.setItem("theme", themeLabel);

  const toggleTheme = () => {
    const current = localStorage.getItem("theme");
    const next =
      current === "orange"
        ? "indigo"
        : current === "indigo"
        ? "pink"
        : current === "pink"
        ? "orange"
        : "";
    dispatch(setTheme(next));
    localStorage.setItem("theme", next);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
      startIcon={
        props.theme === "orange" ? (
          <SaveIcon />
        ) : props.theme === "indigo" ? (
          <SaveIcon />
        ) : (
          <SaveIcon />
        )
      }
      onClick={toggleTheme}
    >
      {props.sideBar.open === "open" ? themeLabel : ""}
    </Button>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar.open,
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Theme);
