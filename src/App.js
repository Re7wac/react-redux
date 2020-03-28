import React from "react";
import SideBar from "./components/side-bar/Side-bar";
import "./App.css";
import MainContent from "./components/main-content/MainContent";
import { BrowserRouter as Router } from "react-router-dom";
const App = probs => {
  return (
    <div className="app-container">
      <Router>
        <SideBar />
        <MainContent />
      </Router>
    </div>
  );
};

export default App;
