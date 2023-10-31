const PAGE_KEYS = {
  byTitle: ({ groupId, title }: { groupId: string; title: string }) => ['pageByTitle', { groupId, title }] as const,
  recentChangeList: ({ groupId }: { groupId: string }) => ['recentChangeList', { groupId }] as const,
};

export default PAGE_KEYS;
