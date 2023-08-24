// 타입 변수 응용하기

// 첫 번째 사례

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 두 번째 사례

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0 number 추론

let str = returnFirstValue([1, "hello", "my name is"]); // 1 number 추론

// 세 번째 사례

interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength(["12345"]);

let var3 = getLength({ length: 10 });

// let var4 = getLength(10);
// length 프로퍼티가 없으면 제한.
