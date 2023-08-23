// 타입스크립트의 클래스

const employee = {
  name: "이수광",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officerNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officerNumber: number
  ) {
    super(name, age, position);
    this.officerNumber = officerNumber;
  }
}

const employee2 = new Employee("이수광", 27, "개발자");
console.log(employee2);

const employee3: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
