// object & 객체 리터럴타입 & 선택적 property

let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이수광",
};

user.id;

// readonly property 읽기전용 속성으로 만들기

let config: {
  readonly apiKey: String;
} = {
  apiKey: "My API KEY",
};

// config.apiKey = "hacked";
