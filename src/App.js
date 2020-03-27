import React from "react";
import SideBar from "./components/side-bar/Side-bar";
import "./App.css";
import MainContent from "./components/main-content/MainContent";

const App = probs => {
  return (
    <div className="app-container">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default App;
