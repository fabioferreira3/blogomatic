import { createMuiTheme } from "@material-ui/core/styles"

type PreferenceT = "dark" | "light"

const UltimateHealthTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#62d66c",
        light: "#6bef76",
        dark: "#56b95e",
      },
      secondary: {
        main: "#fb893f",
        light: "#fda56c",
        dark: "#e37e3d",
      },
      text: {
        primary: "#515151",
        secondary: "#fff",
      },
      info: {
        main: "#7c7c7c",
      },
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: "Acme",
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
        textTransform: "uppercase",
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
      },
      h4: {
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
      },
      body1: {
        fontSize: 16,
        fontFamily: "Pontano Sans",
      },
      body2: {
        fontSize: 14,
        fontFamily: "Pontano Sans",
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
