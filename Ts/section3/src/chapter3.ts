// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// number 타입이 number 리터럴 타입보다 큰 슈퍼타입이기 때문에 가능 ( 업 캐스팅 )

// 객체 타입간의 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가 ?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업 캐스팅
// dog = animal; // 에러 발생 ( 다운 캐스팅 )
// 🔽
// Animal 이 슈퍼타입이고 Dog가 서브타입인 것을 예상
// Dog 타입이 Animal 프로퍼티를 포함하고 추가 프로퍼티까지 더 많은데 슈퍼타입 아닌가 ? = 아니다 반대이다.
// 타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입시스템을 따른다.
// name과 color만 있으면 Animal 타입이 된다. 그래서 Dog 타입은 Animal 타입에 포함이 된다.
// 하지만 Animal 타입의 객체들은 모두 Dog 타입에 포함된다 보기 어렵다. ( breed 라는 추가적인 프로퍼티를 가져야 하기 때문 )
// Animal 타입에 해당되는 객체들에는 breed 라는 프로퍼티를 가지지 않은 객체들이 있을 수 있기 때문에.
// Dog 처럼 추가 프로퍼티가 있는 타입이 슈퍼타입이 되는 것이 아니다.
// 반대로 조건이 더 적은 타입들이 슈퍼타입이 된다.

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "코딩 잘하는 법",
  price: 33000,
  skill: "TypeScript",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사 : 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사.
// skill 같은 초과 프로퍼티 ( 실제 타입에는 정의해놓지 않은 ) 를 작성시 안돼도록 막는 검사.

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "코딩 잘하는 법",
  price: 33000,
  //   skill: "TypeScript",
};

// 초기화할시 객체 리터럴을 사용한 것은 아니기 때문에 초과 프로퍼티 검사가 발동하지 않아 허용된다.
let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "코딩 잘하는 법",
  price: 33000,
  //   skill: "TypeScript",
});

func(programmingBook);
