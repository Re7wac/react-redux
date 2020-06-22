import { createMuiTheme } from "@material-ui/core/styles";
import {
  indigo,
  deepOrange,
  blueGrey,
  red,
  grey,
  green,
  pink
} from "@material-ui/core/colors";

export const IndigoTheme = createMuiTheme({
  palette: {
    common: green,
    background: grey,
    primary: indigo,
    secondary: deepOrange,
    error: red
  },
  text: blueGrey[900]
});

export const OrangeTheme = createMuiTheme({
  palette: {
    common: green,
    background: grey,
    primary: deepOrange,
    secondary: indigo,
    error: red
  },
  text: blueGrey[900]
});

export const PinkTheme = createMuiTheme({
  palette: {
    common: green,
    background: grey,
    primary: pink,
    secondary: indigo,
    error: red
  },
  text: blueGrey[900]
});
