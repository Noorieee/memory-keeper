import twColors from "tailwindcss/colors"

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
  xs: number
  xl: number
}

export interface Radii extends Sizing {}

export interface FontSizes extends ExtendedSizing {}

export interface Spacing extends ExtendedSizing {}

export interface FontFamilies {
  heading: string
  body: string
  handWritten: string
}

export interface Theme {
  colors: Colors
  spacing: Spacing
  radii: Radii
  fontSizes: FontSizes
  fontFamilies: FontFamilies
}

const brand = "violet"

export const theme: Theme = {
  colors:{
    primary: {
      main: twColors[brand][300],
      dark: twColors[brand][400],
      light: twColors[brand][200],
    },
    surface: {
      main: twColors.zinc[800],
      dark: twColors.zinc[900],
      light: twColors.zinc[700],
    },
    text: {
      main: twColors.violet[300],
      dark: twColors.violet[500],
      light: twColors.violet[200],
    },
    background: {
      main: twColors.zinc[900],
      dark: twColors.zinc[950],
      light: twColors.zinc[700],
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
      main: twColors.violet[200],
      dark: twColors.violet[300],
      light: twColors.violet[100],
    },
    orange: {
      main: twColors.orange[200],
      dark: twColors.orange[300],
      light: twColors.orange[100],
    }
  },
  spacing:{
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  radii:{
    sm: 8,
    md: 12,
    lg: 24
  },
  fontSizes:{
    xs: 12,
    sm: 16,
    md: 18,
    lg: 24,
    xl: 30,
  },
  fontFamilies:{
    heading: "Comic Sans MS",
    body: "Times New Roman",
    handWritten: "Times New Roman"
  }
}
