// keyOf 연산자

interface Person {
  name: string;
  age: number;
}

// type Person = typeof person;
// key: keyof typeof person

function getPropertyKey(person: Person, key: keyof Person) {
  // keyof Person : Person 객체 타입으로 부터 모든 프로퍼티의 키를 유니온 타입으로 추출한다.
  // 무조건 타입에만 사용할 수 있는 연산자이다.
  return person[key];
}

const person: Person = {
  name: "이수광",
  age: 26,
};

getPropertyKey(person, "name"); // 이수광
