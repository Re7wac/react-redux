resources :
https://codesandbox.io/s/react-redux-application-hewdb

https://medium.com/@kitson.broadhurst/quickly-set-up-a-theme-in-material-ui-and-access-it-in-your-components-ba0565304887

In your code, theme type is changed. But the Page is not re-rendered with new theme.

I have changed code in index.js and App.js like following. Try this approach. It works.

index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
<App/>,
document.getElementById("app")
);
App.js

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";

class App extends React.Component {
constructor(props){
super(props);
this.state = {
themeType : 'dark',
}
}

changeTheme(){
if (this.state.themeType == 'dark'){
this.setState({themeType:'light'});
} else {
this.setState({themeType:'dark'});
}
}
render() {
let theme = createMuiTheme({
palette: {
primary: {
light: lightGreen[300],
main: lightGreen[500],
dark: lightGreen[700]
},
secondary: {
light: blueGrey[300],
main: blueGrey[500],
dark: blueGrey[700]
},
type: this.state.themeType
}
});
return (
<MuiThemeProvider theme={theme}>
<CssBaseline />
<Typography>Hi there!</Typography>
<Button
variant="contained"
color="secondary"
onClick={()=>{this.changeTheme()}} >
Change
</Button>
</MuiThemeProvider>
);
}
}
export default App;
