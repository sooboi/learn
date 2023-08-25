// 맵드 타입 기반의 유틸리티 타입들 2
// Pick<T, K>
// Omit<T, K>
// Record<V, K>

// Pick<T, K>
// -> 뽑다, 고르다
// -> 객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 옛날 글이라 tags 같은 기능이 없던 시절

type Pick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumbnailURL"
  // "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL"
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};

// Omit<T, K>
// -> 생략하다, 빼다
// -> 객체 타입으로 부터 특정 프로퍼티를 제거하는 타입

// 페이스북, 링크드인, 트위터 같은 SNS 에는 제목이 있는 게시글도 있고 없는 게시글도 있다.
// 없는 게시글을 만들어보자

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL" | "title">>
// Pick<Post, "content" | "tags" | "thumbnailURL">

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Record<V, K>
// -> 객체 타입을 새롭게 정의할 때 인덱스 시그니처럼 유연하지만 그것보다는 제한적인 객체타입 정의

// 화면 크기에 따라 썸네일을 여러 버전으로 보여주는

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// 중복 코드로 피곤해진다.

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

// 한줄로 위와 같은 코드가 작성된다.
