const GROUP_KEYS = {
  groupSearch: ({ keyword }: { keyword: string }) => ['groupSearch', keyword] as const,
};

export default GROUP_KEYS;
