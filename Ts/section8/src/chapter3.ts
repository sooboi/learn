// 맵드 타입
// 객체 타입을 조종하는 기능

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 타입 별칭으로만 이용가능.

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

type BooleanUser2 = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
  // ... 기능
  return {
    id: 1,
    name: "이수광",
    age: 26,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "이수광",
  age: 25,
});
