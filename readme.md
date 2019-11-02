## Grid

The grid system follows a hierarchy of `<Container />` > `<Grid />` > `<GridItem />`.

### Container

The container is an unopinionated optional wrapper for your content. It will maintain padding on the left and right for mobile devices and center content on larger devices.

```
  <Container>...content...</Container>
```

### Grid

The grid system in this project is a **Mobile First** system that utilizes [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). The minimum requirements for using the system is to define a `base` object.

```
  <Grid
    template={{
      base: {
        columns: 'string' ***required***
        rows: 'string' (optional)
        columnGap: number (optional) <--- gaps are multiplied by the baseUnit in _theme.js
        rowGap: number (optional) <--- gaps are caulated by the baseUnit in _theme.js
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

### Grid Item

`<GridItem>` is an optional component in the grouping and allows you to define content alignment.
