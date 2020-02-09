import { Fragment } from 'react';
import Link from 'next/Link';

import Avatar from '../Avatar';
import { List, ListItem } from '../List';
import Typography from '../Typography';

const SearchResults = ({ results }) => {
  if (!results.items && results.error) {
    return <Typography variant="h1">Error fetching results</Typography>;
  } else if (!results.items || results.items.length < 1) {
    return (
      <Fragment>
        <Typography variant="h1">Sorry no results were found</Typography>
      </Fragment>
    );
  } else {
    return (
      <List>
        {results.items.map(item => (
          <ListItem key={item.id} striped hover>
            <Link href={`/user/${item.id}`}>
              <a>
                <Avatar source={item.avatar_url} htmlAttributes={{ alt: `${item.login} avatar` }} />
                <Typography variant="body1">{item.login}</Typography>
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
};

export default SearchResults;
