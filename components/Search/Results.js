import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import { List, ListItem } from '../List';
import Typography from '../Typography';
import Link from '../Link';

const SearchResults = ({ results }) => {
  console.log(results);
  if (results.items.length === 0) {
    return <Typography variant="h1">Sorry no results were found</Typography>;
  } else {
    return (
      <List>
        {results.items.map(item => (
          <ListItem key={item.id} striped>
            <Link href={`/user/${item.id}`}>
              <Avatar source={item.avatar_url} htmlAttributes={{ alt: `${item.login} avatar` }} />
              <Typography variant="body1">{item.login}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
};

export default SearchResults;
