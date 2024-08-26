// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing global CSS
import App from "./App"; // Import your main App component
import reportWebVitals from "./reportWebVitals"; // For measuring performance

// Create a root and render the main component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
