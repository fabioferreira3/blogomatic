import { createMuiTheme } from "@material-ui/core/styles"

type PreferenceT = "dark" | "light"

const UltimateHealthTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#d3ff6d",
      },
      secondary: {
        main: "#9440c4",
      },
      text: {
        primary: "#fff",
        secondary: "#2b2b2b",
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
        fontWeight: "bold",
        textTransform: "uppercase",
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
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: 1,
      },
      body1: {
        fontWeight: 700,
        fontSize: 20,
      },
      body2: {
        fontSize: 15,
        fontWeight: 500,
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
