// 분산적인 조건부 타입

// 조건부 타입 복습
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 분산적인 조건부 타입 : 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 하는 문법

let c: StringNumberSwitch<number | string>;
// 한 번씩 유니온 타입의 모든 멤버 타입들이 분리되고 분리된 결과들을 각각 유니온으로 묶어준다 이해.
// StringNumberSwitch<number> => string
// StringNumberSwitch<string> => number
// 결과 : let c: string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number>  |
// StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 결과
// number | string

// 실용적인 예제
// 유니온에서 특정 타입만 제거하는 타입 만들기

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never  |
// boolean

// 결과
// number | never | boolean => number | boolean
// never 타입 : 공징합 ( 없어진다 )

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 최종결과
// string

// 분산적 조건부 타입으로 사용하지 않고 싶을 땐
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
// 위와 같이 괄호를 씌워 방지가능
