import { Fragment } from 'react';

import { Row, GridItem, Grid } from '../../Grid';
import Card from '../../Card';
import Pill from '../../Pill';

const List = ({ data }) => (
  <Fragment>
    {data.map(project => {
      console.log('project breh: ', project);
      return (
        <Card key={project.id}>
          <img src="http://placehold.it/250x250" alt="placeholder" />
          <Card.Content>
            <Card.Title title={project.name} />
            <Pill value="3,569" />
          </Card.Content>
        </Card>
      );
    })}
  </Fragment>
);

export default List;
