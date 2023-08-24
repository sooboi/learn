// 프로미스
// 프로미스는 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에 타입변수로 비동기 처리의 결과 값의 타입을 정의할 수 있지만
// 반대로 reject 실패했을 땐 타입은 정해줄 수 없다. 타입 변수 정의를 빼먹으면 기본적으로 비동기 처리 값이 unknown 타입으로 추론된다.

import { resolve } from "path";

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
// 서버로 부터 하나의 게시글의 데이터를 불러오는 함수를 만들어야하는 가정

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
