// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합 - Union 타입

let a: string | number;
// a라는 변수는 string 타입과 number 타입의 합집합 타입 ( Union 타입 )

a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

// ---------

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

// 위의 세가지 유형은 허용됬지만 Dog와 Person에 공통으로 포함된 name만 있는 경우는 오류가 뜬다.
// union1 은 Dog 집합, 2는 Person 집합, 3는 교집합에 포함되지만 4는 Union 이란 합집합의 바깥에 존재하기 때문에 포함되지 않는다.

// 2. 교집합 타입 - Intersection 타입

let variable: number & string;
// number 타입과 string 타입의 교집합이란 ? 마우스 갖다대면 never ( 불가능:공집합 ) 타입이라고 뜬다.
// 교집합 타입은 & 연산자를 이용해 여러개의 타입간의 교집합 타입을 만들 수 있는 타입이다 = 기본 타입들을 가지고 만들면 왠만하면 never 타입이나온다.
// = 객체 타입에서 많이 사용.

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog & Person2;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

// 프로퍼티가 하나라도 빠지면 위 타입에 포함되지 않는다.
// 교집합에 해당되는 부분을 뜻하기 때문이다.
