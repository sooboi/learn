// 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implements ( 구현하다 ) 해석 : 캐릭터 클래스는 캐릭터 인터페이스를 구현한다.
// interface는 설계도 역할. class는 그 설계도를 구현하는 것.

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) // private 필드가 필요하다면 인터페이스에 정의하지 말고 이런식으로 따로 정의
  {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}

// 인터페이스를 이용해서 클래스의 설계도를 정의할 수 있다.
// 보통 클래스를 만들 떄 위처럼 인터페이스를 먼저 만들고 만드는 경우는 없다.
// 하지만 라이브러리 구현이나 복잡한 정교한 프로그래밍시 위 같은 과정이 존재할 수 있다.
