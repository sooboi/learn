import React from "react";

export default function AppCard() {
  return (
    <div>
      <Card>세상에 맙소사</Card>
      <Card>
        <p>Card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>내용</p>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
