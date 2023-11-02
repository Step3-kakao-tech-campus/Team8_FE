const PAGE_KEYS = {
  byTitle: ({ groupId, title }: { groupId: number; title: string }) => ['pageByTitle', { groupId, title }] as const,
  recentChangeList: ({ groupId }: { groupId: number }) => ['recentChangeList', { groupId }] as const,
  searchKeyword: ({ groupId, keyword }: { groupId: number; keyword: string }) =>
    ['searchKeyword', { groupId, keyword }] as const,
};

const MAIN_KEYS = {
  main: ['main'],
};

const AUTH_KEYS = {
  myInfo: ['myInfo'],
};

export { PAGE_KEYS, MAIN_KEYS, AUTH_KEYS };
