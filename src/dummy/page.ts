interface Page {
  pageId: number;
  pageName: string;
}

export const recentChangePageDummyData: Page[] = [
  { pageId: 1, pageName: '최근 변경 페이지 테스트' },
  { pageId: 2, pageName: '페이지 이름2' },
  { pageId: 3, pageName: '페이지 이름3' },
];

interface Post {
  postId: number;
  postName: string;
  content: string;
}

export const postDummyData: Post[] = [
  {
    postId: 1,
    postName: '테스트 게시글',
    content: '테스트 게시글 내용',
  },
  {
    postId: 2,
    postName: '테스트 게시글2',
    content: '테스트 게시글 내용2',
  },
  {
    postId: 3,
    postName: '테스트 게시글3',
    content: '테스트 게시글 내용3',
  },
];
