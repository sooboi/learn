// 자바스크립트의 클래스

let studentA = {
  name: "이수광",
  grade: "B",
  age: 27,
  study() {
    console.log("만나서 반가움");
  },
  introduce() {
    console.log("잘지내자");
  },
};

let studentB = {
  name: "이수공",
  grade: "A+",
  age: 25,
  study() {
    console.log("천재가 되고싶다");
  },
  introduce() {
    console.log("공부하쉴?");
  },
};

// 동일한 모양의 객체를 여러개 만들어야 할 경우 ( 중복코드 발생 )
// 이런 경우 클래스를 만들어 공장처럼 찍어낸다.

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    // this : 클래스가 지금 만들고 있는 객체를 의미
  }
  // 메서드
  study() {
    console.log("나 공부 하는 중");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 => 인스턴스
// 스튜던트 인스턴스라고 부를 수 있음.
let studentC = new Student("감수강", "C", 22);
console.log(studentC);
studentC.study();
studentC.introduce();

// 클래스 상속

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  Programming() {
    console.log(`${this.favoriteSkill}로 개발함`);
  }
}

const studentDeveloper = new StudentDeveloper("이수광", "B", 26, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.Programming();
