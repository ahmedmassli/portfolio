import React from "react";
import LeftSide from "./components/left_side/LeftSide";
import RightSide from "./components/right_side/RightSide";
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
