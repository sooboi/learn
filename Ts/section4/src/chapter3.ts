// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
// 자바스크립트에서는 지원하지 않지만 타입스크립트에서는 지원함 !

// -> 하나의 함수 func
// -> 모든 매개변수의 타입 number
// -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값을 출력
// -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력

// 버전들
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // 에러
func(1); // Ver1 과 맞음
// func(1, 2); // 에러
func(1, 2, 3); // Ver2 과 맞음
