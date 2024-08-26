import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./App.css";
import MouseFollower from "./components/MouseFollower";

function App() {
  return (
    <div className="app-container">
      <MouseFollower />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
