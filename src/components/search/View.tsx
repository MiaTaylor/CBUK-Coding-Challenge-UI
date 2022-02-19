// Search component

interface SearchViewProps {
  searchText: string;
  updateSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchRecords: (searchText: string) => void;
}

const SearchView = ({
  searchText,
  updateSearch,
  searchRecords,
}: SearchViewProps) => {
  return (
    <div>
      <h3>Search Student Records</h3>
      <input
        className="search"
        type="text"
        placeholder="Search by name or year group"
        value={searchText}
        onChange={updateSearch}
      />
      <button
        type="button"
        className="search-submit"
        onClick={() => searchRecords(searchText)}
      >
        <i className="fal fa-search"></i>
      </button>
    </div>
  );
};

export default SearchView;
