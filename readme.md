# Next GitHub Viewer

Next GitHub Viewer is a [Next.js](https://nextjs.org/), [Server-side Rendered](https://nextjs.org/features/server-side-rendering#benefits), [React](https://reactjs.org/) application that connects into the [RESTful GitHub API v3](https://developer.github.com/v3/)

## GitHub Etiquette

This project aims to fully utlize as much of the built in tooling GitHub now offers. One of those main tools is [GitHub Projects](https://help.github.com/en/github/managing-your-work-on-github/about-project-boards).

- Each task will need to be loaded into a Project
- Each task will need to be written down as a note in the `To Do` column
- Each note needs to be converted to an issue
- Once an issue is assigned a new issue branch will be created automatically using [create-issue-branch](https://github.com/settings/installations/5020192)
- Issues will be automated on the Project boards into the appropriate column

Pull Requests:
TODO

Hot Fixes:
TODO

Releasing:
TODO

## Installation

- `npm install`
- `npm run dev`
- Application will be available on `localhost:3000`

## Testing

Next GitHub Viewer uses

- [Jest](https://jestjs.io/docs/en/configuration): Testing Framework
- [React Testing Library](https://github.com/testing-library/react-testing-library): Testing Utilities
- [Cypress.io](https://www.cypress.io/): Integration (E2E) testing

## Components

### Kitchen Sink

The "Kitchen Sink" is the testing sandbox for all components. Each UI Component is loaded in here for User Acceptance Testing

`localhost:3000/kitchen-sink`

### File Structure

Components are built in a dedicated directory with the following minimum file structure

- `index.js` (Entry Point)
- `ComponentName.js` (Actual Component)
- `ComponentName.style.js` (Component Styles using Styled Components)
- `ComponentName.spec.js` (Component Unit Test(s))
- Optional:
  - `__snapshots__`
  - `ComponentName.styles.helpers.js`

### Icons

This project uses [react-icons](https://www.npmjs.com/package/react-icons). For UI elements preferred icon set is [Ionicons](https://react-icons.netlify.com/#/icons/io)

### Grid System

The grid system follows a hierarchy of `<Container />` > `<Grid />` > `<GridItem />`. The Grid System is based off [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/)

#### Container

The container is an unopinionated optional wrapper for your content. It will maintain padding on the left and right for mobile devices and center content on larger devices.

```
  <Container>...content...</Container>
```

#### Grid

The grid system in this project is a **Mobile First** system that utilizes CSS Grid. The minimum requirements for using the system is to define a `base` object.

```
  <Grid
    template={{
      base: {
        columns: 'string' ***required***
        rows: 'string' (optional)
        columnGap: number (optional) <--- gaps are multiplied by the baseUnit in _theme.js
        rowGap: number (optional) <--- gaps are caulated by the baseUnit in _theme.js
        areas: '"area area area" "other other other"' (optional)
      }
    }}
  >...</Grid>
```

The base object will be used from the smallest viewport size to the largest. As the viewport increases viewport objects are available to customize how you see fit.

```
<Container>
  <Grid
    template={{
      base: {...}
      small: {...}
      medium: {...}
      large: {...}
      xLarge: {...}
    }}
  >...<Grid>
</Container>
```

Breakpoints are defined in the `/components/_theme.js` file.

#### Grid Item

TODO: Need to have nested structure for GridItems

`<GridItem>` is an optional component in the grouping and allows you to define content alignment.

```
  <GridItem
    gridArea=String (Optional)
  >
```

### Avatar

The Avatar component is a simple element that renders an image and html attributes

```
  <Avatar
    source="http://placehold.it/300x300"
    htmlAttributes={{
      alt: "placeholder image" <--- Required
      width: 300 <--- Optional
      height: 300 <--- Optional
    }}
  >
```

### Link

The Link component is a styled wrapper around the [Next.js `<Link />` Component](https://nextjs.org/learn/basics/navigate-between-pages/using-link)

### List

List is a complex component consisting of `<List/>` and `<ListItem />`

```
  <List>
    <ListItem
      striped <--- Optional, will alternate background colors
    >
      {children}
    </ListItem>
  </List>
```

### Stat

Stat is a simple component consisting of a title and figure to render prominant statistics

```
 <Stat
  title=String <--- Required
  figure=Node <--- Required
/>
```

### Typography

Typography encapsulates all font that will be used in the applciation. You must pass in a `variant` string which will render the desired HTML font element (`<h1>`, `<h2>`, etc.). Failure to pass in a `variant` will render a `<span>`

```
  <Typography
    variant=String <--- Required, h1 | h2 | h3 | h4 | subtitle1 | body1
    bold=Boolean <--- Optional, Will make font bold TODO: need to verify this is functional and update to "weight"
    transform=String <--- Optional, uses CSS text-transform property TODO: need to verify this is functional
    small=Boolean <--- Optional, TODO: Verify this is functional and needed could be removed
  >
    {children}
  </Typography>
```

### Hero

Hero is the primary portion on top of the screen when implemented. The `Hero` can accept either a `title` or `children`.

```
  <Hero
    dividerOpacity=Number <--- configures the &::after background which sits between the hero background and the hero content
    title=String <--- Adds title text front and center of the Hero
  >
    {children}
  </Hero>
```
