import RecentChangeList from 'components/RecentChangeList';

const SearchResultPage = () => {
  return (
    <div>
      <section>
        <h1>SearchResult</h1>
      </section>
      <aside>
        <h2>최근 변경된 페이지</h2>
        <RecentChangeList />
      </aside>
    </div>
  );
};

export default SearchResultPage;
