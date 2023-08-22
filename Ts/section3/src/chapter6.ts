// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person; // as "  " 타입으로 간주하라 ( 타입 단언 )
person.name = "이수광";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 형태의 단언식
// A as B
// A가 B의 슈퍼타입 이거나
// A가 B의 서브타입 이어야함.

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
// 규칙이 지켜지지 않아 오류가 발생함.

let num4 = 10 as unknown as String;
// 중간에 unknown 을 끼고 다중 단언을 사용하면 해결되지만 추천하지 않는 방법 ( 타입스크립트를 쓰는 의의가 없다 )

// const 단언

let num5 = 10;
let num6 = 10 as const;
// const로 선언한 것과 같은 효과

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// 객체에 const 를 단언하면 모든 프로퍼티가 read only 속성이 생겨 프로퍼티의 값을 변형할 수 .

// cat.name = "";
// 읽기 전용 속성으로 할당 불가.

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이수광",
};

// const len: number = post.author?.length;
// 옵셔널 체이닝 : author 프로퍼티의 값이 null 이거나 undefined 일 경우 오류가 발생하기에 ? 를 붙여서 author 란 프로퍼티가 없을시 값 전체를 undefined.
// 오류가 뜨는 이유. 타입은 number 인데 값이 undefined 가 될 수 있기 때문에

const len: number = post.author!.length;
// Non Null 단언 = author 라는 프로퍼티는 실존한다 ! ( null 이거나 undefined 가 아닐 것이라고 주장 )
