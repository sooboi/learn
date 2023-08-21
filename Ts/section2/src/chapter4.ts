// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// 같은 스코프 내 중복 불가

let user: User = {
  id: 1,
  name: "일수광",
  nickname: "sueboi",
  birth: "1997.03.11",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "이수광",
  nickname: "sueboi",
  birth: "1997.03.11",
  bio: "안녕하세요",
  location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: number]: number;
  Korea: number; // 이 객체에 반드시 Korea라는 number 프로퍼티 타입이 필요함 설정
  //   Korea: string; // 오류발생 : 추가적인 프로퍼티 밸류 타입이 반드시 인덱스 시그니처의 밸류 타입과 일치하거나 호환해야한다.
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
