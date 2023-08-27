import React, { useReducer, useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꿀까요?`);
    const current = prompt(`어떤 이름으로 변경할까요?`);

    updatePerson((person) => {
      const mentor = person.mentors.find((it) => it.name === prev);
      mentor.name = current;
    });
  };

  const handleDelete = () => {
    const name = prompt(`누구를 지울까요?`);

    updatePerson((person) => {
      const index = person.mentors.findIndex((it) => it.name === name);
      person.mentors.splice(index, 1);
    });
  };

  const handleAdd = () => {
    const name = prompt("이름은 무엇인가요?");
    const title = prompt("타이틀은 무엇인가요?");

    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

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
      <button onClick={handleChange}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
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
