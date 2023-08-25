// 조건부 타입

type A = number extends string ? string : number;
// 타입 A 는 넘버타입이 string타입을 확장하는 타입인가 ? : string 타입 : number 타입

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
// T = number => string
// T = string => number

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll("", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im Sue");
result.toUpperCase();

let result2 = removeSpaces(undefined);
