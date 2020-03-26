import themeReducer from "./theme-reducer";
import sideBarReducer from "./sidebar-reducer";
import {
  combineReducers
} from "redux";

const rootReducer = combineReducers({
  theme: themeReducer,
  sideBar: sideBarReducer
});

export default rootReducer;