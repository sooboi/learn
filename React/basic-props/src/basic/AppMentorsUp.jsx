import React, { useCallback, useReducer, useState, useMemo, memo } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleChange = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꿀까요?`);
    const current = prompt(`어떤 이름으로 변경할까요?`);
    dispatch({ type: "UPDATE", prev, current });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 지울까요?`);
    dispatch({ type: "DELETE", name });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt("이름은 무엇인가요?");
    const title = prompt("타이틀은 무엇인가요?");
    dispatch({ type: "ADD", name, title });
  }, []);

  return (
    <div>
      <h1>
        {person.name} 는 {person.title}
      </h1>
      <p>{person.name} 의 멘토는 : </p>
      <ul>
        {person.mentors.map((it, index) => (
          <li key={index}>
            {it.name} ({it.title})
          </li>
        ))}
      </ul>
      <Button onClick={handleChange} text="멘토 이름 바꾸기" />
      <Button onClick={handleDelete} text="멘토 삭제" />
      <Button onClick={handleAdd} text="멘토 추가" />
    </div>
  );
}

const initialPerson = {
  name: "멘티",
  title: "개발자",
  mentors: [
    {
      name: "멘토1",
      title: "시니어개발자",
    },
    {
      name: "멘토2",
      title: "시니어개발자",
    },
  ],
};

const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering . . . ");
  const result = useMemo(() => calculate(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculate() {
  for (let i = 0; i < 1000; i++) {
    console.log("👻");
  }
  return 10;
}
