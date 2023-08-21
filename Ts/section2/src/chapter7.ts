// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

function func3(): null {
  return null;
}

let a: void;

// a = 1;
// a = "hello";
// a = {};
// a = null;
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입

function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error();
}

let b: never;
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
