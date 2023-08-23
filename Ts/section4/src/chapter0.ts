// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 '타입'의 매개변수를 받고, 어떤 '타입'의 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number): number => a + b;

// 함수의 매개변수

// function introduce(name = "이수광") {
// function introduce(name : number = "이수광") { // 오류 발생
//   console.log(`name : ${name}`);
// }

// introduce(1); // 오류 발생

// 선택적 매개변수는 맨 끝에 위치해야함.

function introduce(name = "이수광", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") console.log(`tall : ${tall + 10}`);
}

introduce("이수광", 178);
introduce("이수광");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
