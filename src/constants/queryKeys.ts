export const PAGE_KEYS = {
  byTitle: ({ groupId, title }: { groupId: number; title: string }) => ['pageByTitle', { groupId, title }] as const,
  recentChangeList: ({ groupId }: { groupId: number }) => ['recentChangeList', { groupId }] as const,
  searchKeyword: ({ groupId, keyword }: { groupId: number; keyword: string }) =>
    ['searchKeyword', { groupId, keyword }] as const,
};

export const MAIN_KEYS = {
  main: ['main'],
};

export const GROUP_KEYS = {
  groupSearch: ({ keyword }: { keyword: string }) => ['groupSearch', keyword] as const,
  members: ({ groupId }: { groupId: number }) => ['members', groupId] as const,
};

export const AUTH_KEYS = {
  myInfo: ['myInfo'],
};
