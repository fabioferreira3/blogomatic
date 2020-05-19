import { createMuiTheme } from "@material-ui/core/styles"

type PreferenceT = "dark" | "light"

const UltimateHealthTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#c5fc44",
        light: "#ddfc8f",
        dark: "#acdb3f",
      },
      secondary: {
        main: "#9440c4",
        light: "#bf6fed",
        dark: "#7a38a0",
      },
      text: {
        primary: "#383838",
        secondary: "#fff",
      },
      info: {
        main: "#7c7c7c",
      },
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: "Fira Sans",
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightBold: 700,
      h1: {
        letterSpacing: 1,
        fontSize: 55,
        fontWeight: 700,
      },
      h2: {
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: 1,
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 1,
      },
      h4: {
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 1,
      },
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 14,
      },
      button: {
        letterSpacing: 1,
        fontWeight: 700,
        fontSize: 18,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": {
            fontDisplay: "swap",
          },
        },
      },
    },
  })
}

export default UltimateHealthTheme
