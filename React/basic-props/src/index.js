import React from "react";
import ReactDOM from "react-dom/client";
import AppProfile from "./AppProfile";
import AppCounter from "./AppCounter";
import AppProduct from "./AppProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProduct />
  </React.StrictMode>
);
