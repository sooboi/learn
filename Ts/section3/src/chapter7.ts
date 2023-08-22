// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 뜻한다.

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // 가드라고 표현
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    //   } else if (typeof value === "object") {
    // null 이 올수도 있음
  } else if (value instanceof Date) {
    // instanceof : 왼쪽 값이 오른쪽 객체이냐 ?
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
