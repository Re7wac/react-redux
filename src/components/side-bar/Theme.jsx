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
    height: "5rem",
    position: "absolute",
    bottom: "0px",
    justifyContent: "baseline"
  }
}));

const Theme = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const themeMap = { light: "solar", solar: "dark", dark: "light" };
  const themeLabel = props.theme;

  const bodyClass = document.body.classList;
  const theme =
    localStorage.getItem("theme") ||
    localStorage.setItem("theme", themeMap.dark);

  const toggleTheme = () => {
    const current = localStorage.getItem("theme");
    const next = themeMap[current];
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
        props.theme === "dark" ? (
          <SaveIcon />
        ) : props.theme === "light" ? (
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
