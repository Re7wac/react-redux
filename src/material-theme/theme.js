import { createMuiTheme } from "@material-ui/core/styles";
import { palette } from "@material-ui/system";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4791db",
      main: "#1976d2",
      dark: "#115293"
    },

    secondary: {
      light: "#e57373",
      main: "#dc004e",
      dark: "#9a0036"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f"
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00"
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2"
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c"
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#ccc",
      icons: "#FFFFFF"
    },
    divider: "#BDBDBD"
  }
});
export default theme;
