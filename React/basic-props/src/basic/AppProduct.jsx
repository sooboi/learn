import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";

export default function AppProduct() {
  const [showProducts, setShowProducts] = useState(false);

  const handleToggle = () => {
    setShowProducts((show) => !show);
  };

  return (
    <div className="AppProduct">
      {showProducts && <Products />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
