// 타입 추론

// let a: number = 10;
// 위처럼 number 타입이라 지정하지 않아도 타입스크립트가 지정된 초기값을 보고 변수의 타입을 추론해준다.
let a = 10;

// 위처럼 타입 추론을 이용하면 궂이 타입을 일일이 변수에 정의하지 않아도 되서 타이핑양이 줄고 생산성이 오름
// 다만 주의할 점은 타입스크립트가 모든 상황에 잘 추론해주지는 못한다.

// 타입스크립트가 어떤 상황에 자동으로 타입을 잘 추론하는지 ?
// 1. 일반적인 변수를 작성하는 상황
let b = 1;

let c = "hello";

let d = {
  id: 1,
  name: "이수광",
  profile: {
    nickname: "sueboi",
  },
  country: "ko",
};

let { id, name, profile } = d;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}
// 함수의 반환 값 타입도 잘 추론한다. ( 초기화가 아닌 return 문 다음으로 오는 반환값을 기준으로 추론한다 )
// 매개변수가 있을 때 기본 값이 설정되어 있다면 기본값을 기준으로 잘 추론한다.

// 2. 변수를 지정하고 초기값을 주지 않을 때 -> 암묵적인 any 타입 -> 넣는 값에 따라 타입이 진화한다. 추천하지 않는 방법.

let e;
e = 10;
e.toFixed();
// e.toUpperCase();

e = "hello";
e.toUpperCase();
// e.toFixed();

// 3. const 키워드로 변수를 정의했을 때

const num = 10;
// let 일때는 number로 추론 됬지만 const는 값을 갖는 넘버 리터럴 타입으로 추론된다.
// const는 상수이기 때문에

const str = "hello";

// 4. 여러가지 타입의 요소를 저장하는 배열을 선언할 때

let arr = [1, "string"];
// number 와 string 의 Union 타입을 갖는 배열 타입으로 추론된다.
// 1 이라는 타입도 되야하고 string 이라는 타입도 되야하기 때문. = 최적의 공통 타입으로 추론
