// 제너릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용할 땐 타입 변수 ( K, V ) 에 할당할 타입을 꺽새와 함께 반드시 사용.

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처

interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key: -1234,
  key2: 12345,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭

type Map2<V> = {
  [Key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

// 언제 사용하는가 ? ( 제네릭 인터페이스의 활용 예시 )
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 유저 | 개발자 유저

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "이수광",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "김아중",
  profile: {
    type: "student",
    school: "고려대학교",
  },
};

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}
