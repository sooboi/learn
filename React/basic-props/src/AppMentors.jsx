import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
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
  });

  const handleClick = () => {
    const prev = prompt(`누구의 이름을 바꿀까요?`);
    const current = prompt(`어떤 이름으로 변경할까요?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((it) => {
        if (it.name === prev) {
          return { ...it, name: current };
        }
        return it;
      }),
    }));
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
      <button onClick={handleClick}>멘토 이름 바꾸기</button>
    </div>
  );
}
