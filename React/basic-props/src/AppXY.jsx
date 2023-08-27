import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleXY = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    // 수평으로만 이동 가능
    setPosition((prev) => ({ ...prev, y: prev.y }));
  };

  return (
    <div className="container" onPointerMove={handleXY}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <pointer />
      </div>
    </div>
  );
}
