export default function personReducer(person, action) {
  switch (action.type) {
    case "UPDATE":
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((it) => {
          if (it.name === prev) {
            return { ...it, name: current };
          }
          return it;
        }),
      };
    case "ADD":
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    case "DELETE": {
      return {
        ...person,
        mentors: person.mentors.filter((it) => it.name !== action.name),
      };
    }
    default: {
      throw Error(`존재하지 않는 action type : ${action.type}`);
    }
  }
}
