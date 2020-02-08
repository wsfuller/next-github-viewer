import { MdGroupAdd } from 'react-icons/md';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { DiBootstrap, DiReact, DiVisualstudio } from 'react-icons/di';

import { theme } from '../../_theme';
import numberWithCommas from '../../../common/numberWithCommas';

import { Row, GridItem, Grid } from '../../Grid';
import Card from '../../Card';
import Pill from '../../Pill';
import StyledIcon from './Icon.styles';

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
      return (
        <GridItem key={project.id}>
          <Card>
            {renderIcon(project.name)}
            <Card.Content>
              <Card.Title title={formatName(project.name)} />
              <Pill value={numberWithCommas(project.subscribers_count)} icon={<MdGroupAdd />} />
            </Card.Content>
          </Card>
        </GridItem>
      );
    })}
  </Grid>
);

function renderIcon(name) {
  const iconColor = theme.variables.colors.secondary.default;
  const iconMapping = {
    vscode: <DiVisualstudio color={iconColor} />,
    bootstrap: <DiBootstrap color={iconColor} />,
    freeCodeCamp: <FaFreeCodeCamp color={iconColor} />,
    react: <DiReact color={iconColor} />
  };

  return <StyledIcon>{iconMapping[name]}</StyledIcon>;
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
