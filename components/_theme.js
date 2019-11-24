export const pxToRem = value => `${value / 16}rem`;

const variables = {
  baseUnit: 8,
  // https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
  breakpoints: {
    small: 576, // Small devices (landscape phones, 576px and up)
    medium: 768, // Medium devices (tablets, 768px and up)
    large: 992, // Large devices (desktops, 992px and up)
    xLarge: 1200 // Extra large devices (large desktops, 1200px and up)
  },
  colors: {
    primary: {
      default: '#8e1cfa',
      light: '#cb9ff8',
      dark: '#6610bd'
    },
    secondary: {
      default: '#62b1ea',
      dark: '#4e2aec',
      light: '#7491a3'
    },
    grayScale: {
      white: '#ffffff',
      grayOne: '#f4f4f4',
      grayTwo: '#e5e9e8',
      grayThree: '#333333',
      grayFour: '#303030',
      grayFive: '#212121',
      black: '#000000'
    },
    systemFeedback: {
      info: '#30accb',
      success: '#26b47f',
      error: '#ed4b48',
      warning: '#ffb400'
    }
  },
  typography: {
    headers: {
      family: 'Lato, sans-serif',
      h1: {
        size: pxToRem(60),
        lineHeight: pxToRem(70)
      },
      h2: {
        size: pxToRem(48),
        lineHeight: pxToRem(56)
      },
      h3: {
        size: pxToRem(36),
        lineHeight: pxToRem(44)
      },
      h4: {
        size: pxToRem(28),
        lineHeight: pxToRem(28)
      },
      weights: {
        default: 400,
        bold: 700
      }
    },
    body: {
      family: 'Roboto, sans-serif',
      size: {
        default: pxToRem(16),
        small: pxToRem(12),
        subtitle: pxToRem(20)
      },
      lineHeight: {
        default: pxToRem(24),
        small: pxToRem(14),
        subtitle: pxToRem(27)
      },
      weights: {
        light: 300,
        default: 400,
        bold: 700
      }
    }
  },
  transitions: {
    default: '0.5s',
    fast: '0.25s',
    slow: '1s'
  },
  zIndex: {
    one: 10,
    two: 20,
    three: 30,
    four: 40,
    five: 50,
    six: 60,
    seven: 70,
    eight: 80,
    nine: 90,
    ten: 100,
    eleven: 1100,
    twelve: 1200,
    thirteen: 1300,
    fourteen: 1400,
    fifteen: 1500,
    twenty: 2000,
    thirty: 3000
  }
};

export const theme = {
  variables: { ...variables },
  borderRadius: {
    default: pxToRem(variables.baseUnit * 2),
    small: pxToRem(variables.baseUnit),
    large: pxToRem(variables.baseUnit * 3)
  },
  appBar: {
    default: pxToRem(variables.baseUnit * 8),
    condensed: pxToRem(variables.baseUnit * 6)
  },
  section: {
    paddingTop: pxToRem(40),
    paddingBottom: pxToRem(40)
  }
};
