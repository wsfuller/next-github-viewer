import React from "react";

import Link from "next/link";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <ul>
      {console.log(results)}
      {results.items.map(item => (
        <li key={item.id}>{item.login}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
