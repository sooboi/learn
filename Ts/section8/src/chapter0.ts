// 인덱스드 엑세스 타입
// 객체, 배열, 튜플

// 객체의 특정 프로퍼티 타입을 추출하는 방법

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이수광",
    age: 26,
  },
};

// 1. 인덱스에 들어올 수 있는 건 type만 들어올 수 있다. ( 변수나 값 불가 ) = 타입만 명시 가능.
// 2. 존재하지 않는 프로퍼티 값을 작성하면 오류 발생.
// 3. 응용 팁 : Post["author"]["id"] 식으로 중첩해서 원하는 값만 불러올 수도 있다.

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

printAuthorInfo(post.author);

// 인덱스드 엑세스 타입은 배열 타입으로 부터 특정 요소의 타입을 뽑아내는 것도 가능 !

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// [ ] 인덱스 안에 들어가는 건 무조건 타입이다.

const postList: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이수광",
    age: 26,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 튜플과 함께 사용하는 법

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type Tup3 = Tup[number];
