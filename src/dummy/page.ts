interface Page {
  pageId: number;
  pageName: string;
}

export const recentChangePageDummyData: Page[] = [
  { pageId: 1, pageName: '최근 변경 페이지 테스트' },
  { pageId: 2, pageName: '페이지 이름2' },
  { pageId: 3, pageName: '페이지 이름3' },
];

export default Page;
