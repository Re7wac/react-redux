import { createMuiTheme } from "@material-ui/core/styles";
import { palette } from "@material-ui/system";
import { purple, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});
export default theme;
