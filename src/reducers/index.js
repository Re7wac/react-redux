import themeReducer from "./theme-reducer";
import sideBarReducer from "./sidebar-reducer";
import sliderDisktopReducer from "./sliderDisktop-reducer";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  theme: themeReducer,
  sideBar: sideBarReducer,
  sliderDisktop: sliderDisktopReducer,
  auth: authReducer,
  errors: errorReducer,
});

export default rootReducer;
