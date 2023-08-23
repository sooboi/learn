// 인터페이스의 확장

interface Animal {
  // 타입 별칭이어도 확장할 수 있다. Animal = { ... }
  name: string;
  age: number;
}

// name, age 프로퍼티 중복 타이핑이 심하다 = extends 를 이용해서 확장 ( Animal 에 있는 것을 전부 포함한다 )

interface Dog extends Animal {
  isBark: boolean;
  name: string;
  //   name: "hello"; // string의 서브 타입이기 때문에 가능 ( 바꿀시 원본 프로퍼티 타입의 서브타입으로만 정의가능 )
}

const dog: Dog = {
  name: "hello",
  age: 0,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장이 가능하다.

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};

// 타입스크립트의 인터페이스는 유연하게 타입을 확장하게 사용할 수 있는 문법을 제공하는 등
// 객체 타입을 다룰 때 유용하게 사용 가능 = 타입 별칭보다는 인터페이스를 선호
