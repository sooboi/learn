// 제네릭

function func(value: any) {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

// 세개 전부다 any 타입으로 추론된다. ( 반환값의 타입으로 추론되기 때문에 )

function func2(value: unknown) {
  return value;
}

let num2 = func(10);
// num.toUpperCase();

if (typeof num === "number") {
  num.toFixed();
}
// unknown 을 써도 불편하다.

// 제네릭 함수 ( 종합, 범용적인 함수 )

function func3<T>(value: T): T {
  return value;
}

let num3 = func3(10);
let bool3 = func3(false);
let str3 = func3("string");

// 전달된 값에 따라 타입이 추론이 되는 것을 볼 수 있다.
// 타입 변수와 함꼐 여러 타입의 값을 인수로 받아서 범용적으로 쓸 수 있는 걸 제네릭 함수라고 부른다.
// 타입의 변수에 할당되는 타입은 함수를 호출할 때 인수에 따라 결정된다.

// 제네릭 함수를 호출할 때 이 타입 변수에 할당되는 타입을 인수를 통해 추론하지 않고 프로그래머가 명시적으로 정의할 수도 있다.

let arr = func3<[number, number, number]>([1, 2, 3]);

// 튜플 타입으로 명시적으로 정의.
