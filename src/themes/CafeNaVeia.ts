import { createMuiTheme } from "@material-ui/core/styles"

type PreferenceT = "dark" | "light"

const CafeNaVeiaTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#FF0154",
        light: "#ff5b8f",
        dark: "#c90442",
      },
      secondary: {
        main: "#61C6FF",
        light: "#94d8fc",
        dark: "#35a2dd",
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
        fontSize: 35,
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
        fontSize: 18,
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

export default CafeNaVeiaTheme
