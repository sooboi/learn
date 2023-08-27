import React, { useReducer, useState } from "react";
import personReducer from "./basic/reducer/person-reducer";

export default function AppMentors() {
  //   const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꿀까요?`);
    const current = prompt(`어떤 이름으로 변경할까요?`);
    dispatch({ type: "UPDATE", prev, current });
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((it) => {
    //     if (it.name === prev) {
    //       return { ...it, name: current };
    //     }
    //     return it;
    //   }),
    // }));
  };

  const handleDelete = () => {
    const name = prompt(`누구를 지울까요?`);
    dispatch({ type: "DELETE", name });
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.filter((m) => m.name !== name),
    // }));
  };

  const handleAdd = () => {
    const name = prompt("이름은 무엇인가요?");
    const title = prompt("타이틀은 무엇인가요?");
    dispatch({ type: "ADD", name, title });
    // setPerson((person) => ({
    //   ...person,
    //   mentors: [...person.mentors, { name, title }],
    // }));
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
