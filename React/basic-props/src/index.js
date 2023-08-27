import React from "react";
import ReactDOM from "react-dom/client";
import AppMentorsImmer from "./AppMentorsImmer";
import AppMentors from "./AppMentors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentors />
    <AppMentorsImmer />
  </React.StrictMode>
);
