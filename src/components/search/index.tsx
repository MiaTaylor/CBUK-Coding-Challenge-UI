import { useState } from "react";
import SearchView from "./View";

interface SearchProps {
  searchRecords: (searchText: string) => void;
}

const Search = ({ searchRecords }: SearchProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchView
      searchText={searchText}
      updateSearch={updateSearch}
      searchRecords={searchRecords}
    />
  );
};

export default Search;
