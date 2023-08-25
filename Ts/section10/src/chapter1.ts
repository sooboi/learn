// 유틸리티 타입
// 제네렉, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것

// 맵드 타입 기반의 유틸리티 타입들
// Partial<T>
// Required<T>
// ReadOnly<T>

// Partial<T>
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입

// 예제 ) 블로그 플랫폼 가정

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 모든 프로퍼티를 선택적인 프로퍼티로 바꾸기 (2)

type Partial<T> = {
  [key in keyof T]?: T[key];
};

// 임시 저장 게시된 글 변수로 표현 (1)

const draft: Partial<Post> = {
  title: "제목 나중에 짓기",
  content: "초안...",
};

// Required<T>
// -> 필수의, 필수적인
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

// 이번엔 썸네일이 반드시 포함된 게시글 필요

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "하하",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...", // 필수 프로퍼티가 됨.
};

// ReadOnly<T>
// -> 읽기전용 수정불가
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

type ReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

const readOnlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};

// readOnlyPost.content = "";
