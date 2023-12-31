// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// = 0 이런식으로 지정해주지 않아도 알아서 0,1,2 지정되며 중간에 값을 지정해주면 알아서 다음값에 더해지며 정해진다.s

enum Language {
  korea = "ko",
  english = "en",
}
// enum 은 컴파일해도 사라지지 않고 JS 로 변경된다.

const user1 = {
  name: "김철수",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korea,
};
const user2 = {
  name: "안철수",
  role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
  name: "옥수수",
  role: Role.GUEST, // 2 <- 게스트
};

// 위처럼 숫자로 유저를 나누어 관리할 때 헷갈릴 수 있음 ( 0이 게스트였나, 2가 관리자였나 등 )

console.log(user1, user2, user3);
