// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "sue"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// "길이"와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 쓰는 용도
const users = [
  ["이수광", 1],
  ["김수강", 2],
  ["감수공", 3],
  ["허공칠", 4],
  [5, "최아무개"],
];

const users2: [string, number][] = [
  ["이수광", 1],
  ["김수강", 2],
  ["감수공", 3],
  ["허공칠", 4],
  //   [5, "최아무개"],
];
