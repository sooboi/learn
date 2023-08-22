// Unknown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unKnownVar: unknown;

  //   let num: number = unKnownVar;
  //   let str: string = unKnownVar;
  //   let bool: boolean = unKnownVar;
}

// Never 타입 ( 공집합 )

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

// void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

// any 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar = undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  //   neverVar = anyVar;
}

