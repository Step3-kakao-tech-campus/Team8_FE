const RecentChangeList = () => {
  const dummy = [
    { pageId: 1, pageName: 'page1' },
    { pageId: 2, pageName: 'page2' },
    { pageId: 3, pageName: 'page3' },
  ];

  return (
    <ul>
      {dummy.map((change) => (
        <li key={change.pageId}>{change.pageName}</li>
      ))}
    </ul>
  );
};

export default RecentChangeList;
