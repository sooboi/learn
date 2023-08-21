// any
// 특정 변수의 타입을 확실히 모를 때 / any 타입은 최대한 사용을 지향

let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUpperCase();

if (typeof unknownVar === "number") {
  num = unknownVar;
}

