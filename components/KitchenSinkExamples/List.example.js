import React from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';
import { List, ListItem } from '../List';

const listItems = () => {
  let listItems = [];
  for (let i = 0; i < 5; i += 1) {
    listItems.push(
      <ListItem key={`listItem-${i}`} striped>
        <Typography variant="body1">List Item</Typography>
      </ListItem>
    );
  }

  return listItems;
};

const ListExample = () => (
  <Container>
    <Typography variant="h1">List and List Items</Typography>
    <List>{listItems()}</List>
  </Container>
);

export default ListExample;
