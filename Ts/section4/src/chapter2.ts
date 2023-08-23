// 내용 어려움 -> 복습 중요성 ( 너무 목매달지 말고 해야할거 하고 다시 계속해서 학습하기 )

// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

a = b;
// b = a;
// 호환되지 않는다.
// number 리터럴 <- number ( 반환값 기준 다운 캐스팅 )
// 반환값 타입 끼리는 업캐스팅 상황에서는 호환되고 다운 캐스팅 상황에서는 호환되지 않는다.

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 2-2. 매개변수의 개수가 다를 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
// number <- number 리터럴 업 캐스팅 ( 반환 값 타입을 기준으로 호환성을 판단할 때와는 다르게 매개변수 타입 기준으로 판단시 반대로 안된다. )
d = c;
// number 리터럴 <- number 다운 캐스팅 호환된다.

// 객체 type 예제

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

dogFunc = animalFunc;

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;

// 매개변수의 개수가 다를 땐 할당하려고 하는 쪽의 타입의 매개변수의 갯수가 더 작을 때만 호환이 된다.
