// 인터페이스의 선언 합치기

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 타입 별칭시 동일한 타입 두개를 정의시 오류가 발생한다.
// 인터페이스는 타입 별칭과 다르게 오류가 발생하지 않는다 = 동일한 이름으로 두개를 선언해도 동일 이름의 인터페이스는 결국 다 합쳐지기 때문 ( 선언 합침 )

const person: Person = {
  name: "",
  age: 27,
};

// 보통 선언 합침은 간단한 프로그래밍에 사용하지 않고 타입스크리트 모듈 = 라이브러리의 타입 정의가 부실할 경우 사용 ( 모듈 보강 작업시 사용된다 )
// 모듈 보강

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
