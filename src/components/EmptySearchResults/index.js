import React from "react";

function EmptySearchResults({ searchText }) {
  return (
    <h4 className="color-gradient center">No results found for {searchText}</h4>
  );
}

export { EmptySearchResults };
