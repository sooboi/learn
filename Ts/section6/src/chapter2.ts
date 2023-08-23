// 접근 제어자
// access modifier
// => public | private | protected
//    공용      클래스     클래스와 파생 클래스에만

class Employee {
  //필드
  //   name: string;
  //   age: number;
  //   position: string;
  //   접근 제어자를 사용하면 필드와 this 작업을 하지 않아도 알아서 작동한다.

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

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
  // 메서드
  func() {
    // this.name;
  }
}

const employee = new Employee("이수광", 27, "개발자");
// employee.name = "홍길동";
// employee.age = 31;
employee.position = "디자이너";
console.log(employee);
