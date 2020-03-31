import { createMuiTheme } from "@material-ui/core/styles";
import {
  indigo,
  deepOrange,
  blueGrey,
  red,
  grey,
  green
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    common: green,
    background: grey,
    primary: indigo,
    secondary: deepOrange,
    error: red
  },
  text: blueGrey[900]
});
export default theme;
