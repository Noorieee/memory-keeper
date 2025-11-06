import twColors from 'tailwindcss/colors'


export interface Colors {
  primary: Color
  text: Color
  surface: Color
  background: Color
  danger: Color
  success: Color
  warning: Color
  amber: Color
  pink: Color
  sky: Color
  emerald: Color
  violet: Color
  orange: Color
}

export type ColorKeys = keyof Colors
export type ColorKey = Colors[ColorKeys]

export interface Color {
  main: string
  dark: string
  light: string
}

export interface Sizing {
  sm: number
  md: number
  lg: number
}

export interface ExtendedSizing extends Sizing {
  xxs: number
  xs: number
  xl: number
  xxl: number
}

export type Radii = Sizing

export type FontSizes = ExtendedSizing

export type Spacing = ExtendedSizing

export interface FontFamilies {
  heading: string
  body: string
  handWritten: string
}

export interface Shadows {
  sm: string
  md: string
  lg: string
}

export interface Theme {
  colors: Colors
  spacing: Spacing
  radii: Radii
  fontSizes: FontSizes
  fontFamilies: FontFamilies
  shadows: Shadows
}

const colorLibrary = {
  violet: {
    '50': '#f7f7f8',
    '100': '#ecebef',
    '200': '#d4cfe2',
    '300': '#b2a9cb',
    '400': '#7f70a9',
    '500': '#5f5086',
    '600': '#4a3f69',
    '700': '#3b3253',
    '800': '#2d2640',
    '900': '#23202d',
    '950': '#131118',
  },
  purple: {
    '50': '#f7f6f8',
    '100': '#edebf0',
    '200': '#d8c6eb',
    '300': '#b899db',
    '400': '#8955c3',
    '500': '#68389f',
    '600': '#512c7d',
    '700': '#402262',
    '800': '#311b4b',
    '900': '#251933',
    '950': '#140e1b',
  },
}

export const theme: Theme = {
  colors: {
    primary: {
      main: colorLibrary.violet[500],
      dark: colorLibrary.violet[700],
      light: colorLibrary.violet[300],
    },
    surface: {
      main: colorLibrary.violet[900],
      dark: colorLibrary.violet[950],
      light: colorLibrary.violet[800],
    },
    text: {
      main: twColors.neutral[600],
      dark: twColors.neutral[900],
      light: twColors.neutral[200],
    },
    background: {
      main: colorLibrary.purple[900],
      dark: colorLibrary.purple[950],
      light: colorLibrary.purple[800],
    },
    danger: {
      main: twColors.amber[300],
      dark: twColors.amber[400],
      light: twColors.amber[200],
    },
    success: {
      main: twColors.emerald[300],
      dark: twColors.emerald[400],
      light: twColors.emerald[200],
    },
    warning: {
      main: twColors.red[300],
      dark: twColors.red[400],
      light: twColors.red[200],
    },
    amber: {
      main: twColors.amber[200],
      dark: twColors.amber[300],
      light: twColors.amber[100],
    },
    pink: {
      main: twColors.pink[200],
      dark: twColors.pink[300],
      light: twColors.pink[100],
    },
    sky: {
      main: twColors.sky[200],
      dark: twColors.sky[300],
      light: twColors.sky[100],
    },
    emerald: {
      main: twColors.emerald[200],
      dark: twColors.emerald[300],
      light: twColors.emerald[100],
    },
    violet: {
      main: colorLibrary.violet[500],
      dark: colorLibrary.violet[700],
      light: colorLibrary.violet[300],
    },
    orange: {
      main: twColors.orange[200],
      dark: twColors.orange[300],
      light: twColors.orange[100],
    },
  },
  spacing: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  radii: {
    sm: 8,
    md: 12,
    lg: 24,
  },
  fontSizes: {
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 18,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  fontFamilies: {
    heading: 'Caveat',
    body: 'Nunito',
    handWritten: 'Indie Flower',
  },
  shadows: {
    sm: 'rgba(99, 99, 99, 0.15) 0px 1px 4px 0px',
    md: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    lg: 'rgba(99, 99, 99, 0.25) 0px 5px 15px 0px',
  },
}
