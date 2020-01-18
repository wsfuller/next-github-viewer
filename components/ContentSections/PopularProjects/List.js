import { FaFreeCodeCamp } from 'react-icons/fa';
import { DiBootstrap, DiReact, DiVisualstudio } from 'react-icons/di';

import { Row, GridItem, Grid } from '../../Grid';
import Card from '../../Card';
import Pill from '../../Pill';

const List = ({ data }) => (
  <Grid
    template={{
      base: {
        columns: 'repeat(1, 1fr)',
        columnGap: 4,
        rowGap: 4
      },
      medium: {
        columns: 'repeat(2, 1fr)',
        columnGap: 2,
        rowGap: 2
      },
      large: {
        columns: 'repeat(4, 1fr)',
        columnGap: 2,
        rowGap: 2
      }
    }}
  >
    {data.map(project => {
      console.log('project breh: ', project);
      return (
        <GridItem>
          <Card key={project.id}>
            {renderIcon(project.name)}
            {/* <img src="http://placehold.it/250x250" alt="placeholder" /> */}
            <Card.Content>
              <Card.Title title={formatName(project.name)} />
              <Pill value="3,569" />
            </Card.Content>
          </Card>
        </GridItem>
      );
    })}
  </Grid>
);

function renderIcon(name) {
  const iconMapping = {
    vscode: <DiVisualstudio />,
    bootstrap: <DiBootstrap />,
    freeCodeCamp: <FaFreeCodeCamp />,
    react: <DiReact />
  };

  return iconMapping[name];
}

function formatName(name) {
  const nameMapping = {
    vscode: 'Visual Studio Code',
    bootstrap: 'Bootstrap',
    react: 'React'
  };

  const formattedName = nameMapping[name] ? nameMapping[name] : name;

  return formattedName;
}

export default List;
