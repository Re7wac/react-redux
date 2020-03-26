import React from "react";
import SideBar from "./components/side-bar/Side-bar";
import "./App.css";
import MainContent from "./components/main-content/MainContent";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { openSideBar, closeSideBar } from "./actions/sidebar-actions";

const App = probs => {
  const handleOver = e => {};
  const handleLeave = e => {};
  return (
    <Provider store={store}>
      <div className="app-container">
        <SideBar />
        <MainContent />
      </div>
    </Provider>
  );
};

export default App;
