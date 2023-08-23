// 인터페이스
// 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// 타입 별칭과 다르게 인터페이스는 유니온, 인터섹션 타입은 만들 수 없다.
type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "이수광",
  sayHi: function () {
    console.log("hi");
  },
};

// person.name = "홍길동"; // 읽기 전용 속성이므로 오류

person.sayHi();
person.sayHi(1, 2);
