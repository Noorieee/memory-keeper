import twColors from "tailwindcss/colors"

export interface Colors {
  primary: Color
  secondary: string
  text: string
  background: string
}

export interface Color {
  main: string
  dark: string
  light: string
}

export interface Spacing extends ExtendedSizing {}

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

export interface FontFamilies {
  primary: string
  secondary: string
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
    primary:{
      main: twColors[brand][500],
      dark: twColors[brand][950],
      light: twColors[brand][100]
    },
    secondary: twColors[brand][800],
    text: twColors.stone[50],
    background: twColors.stone[950],
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
    primary: "Comic Sans MS",
    secondary: "Times New Roman"
  }

}

// export const lightTheme: Theme = {
//   primary: "",
//   secondary: "",
//   text: "",
//   background: ""
// }