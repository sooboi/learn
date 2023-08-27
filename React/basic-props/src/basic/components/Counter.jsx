import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [num, setNum] = useState(0);

  const handleAdd = (e) => {
    setNum((prev) => prev + 1);
    onClick();
    // const totalCount = count + 1;
    // setCount(totalCount);
  };

  return (
    <div className="counter">
      <span className="number">
        {num} <span className="total">/ {total}</span>
      </span>
      <button onClick={handleAdd} className="button">
        Add +
      </button>
    </div>
  );
}
