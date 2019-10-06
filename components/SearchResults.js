import React from 'react';

import Link from 'next/link';

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <ul>
      {results.items.map(item => (
        <li key={item.id}>
          <Link href={`/profile/${item.id}`}>
            <a>{item.login}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
