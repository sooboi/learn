import React, { useState } from "react";
import "./AppMentor.css";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Soo",
    title: "개발자",
    mentor: {
      name: "규성",
      title: "시니어 개발자",
    },
  });

  return (
    <div className="AppMentor">
      <h2>
        {person.name}는 {person.title}
      </h2>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt("멘토 이름 변경");
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name: name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt("멘토 타이틀 변경");
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title: title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
