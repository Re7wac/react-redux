import themeReducer from "./theme-reducer";
import sideBarReducer from "./sidebar-reducer";
import sliderDisktopReducer from "./sliderDisktop-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  theme: themeReducer,
  sideBar: sideBarReducer,
  sliderDisktop: sliderDisktopReducer,
});

export default rootReducer;
