import React from "react";

const SearchBar = ({ updateSearch, search, handleSearchClick }) => {
  return (
    <React.Fragment>
      <form
        onSubmit={handleSearchClick}
        className="d-flex align-items-center justify-content-center"
      >
        <input
          className="border border-3 border-top-0 border-start-0 border-end-0"
          type="search"
          placeholder="Search your fav color..."
          aria-label="Search"
          value={search}
          style={{ outline: "none" }}
          onChange={(e) => updateSearch(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => handleSearchClick(e)}
        >
          Search{" "}
        </button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
