// 함수 타입 표현식

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처 ( 콜 시그니처 )

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 프로퍼티 추가 정의가 가능하다 ( 함수도 객체이기 때문에 )
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// add2();
add2.name;
