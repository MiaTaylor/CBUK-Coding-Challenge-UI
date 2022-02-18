import React from "react";
import Filter from "./Filter";

const Search = () => {
  return (
    <div>
      <form>
        <input
          className="search"
          type="text"
          placeholder="Search student records"
        />
        <button type="submit" className="search-submit">
          <i className="fal fa-search"></i>
        </button>
      </form>
      <Filter />
    </div>
  );
};

export default Search;
