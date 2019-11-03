import React from 'react';

const GridNestedExample = () => (
  <Container>
    <Grid
      template={{
        base: {
          areas: '"header header header header" "main main.sidebar"'
        }
      }}
    >
      <GridItem gridArea="header">
        <Typography variant="h1">Avatar</Typography>
      </GridItem>
      <GridItem gridArea="main">
        <Grid
          template={{
            base: {
              columns: 'repeat(4, 1fr)',
              rows: 'auto',
              columnGap: 1,
              rowGap: 1
            }
          }}
        >
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
        </Grid>
      </GridItem>
      <GridItem gridArea="sidebar">Sidebar</GridItem>
    </Grid>
  </Container>
);

export default GridNestedExample;
