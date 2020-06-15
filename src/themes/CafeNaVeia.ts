import { createMuiTheme } from "@material-ui/core/styles"

type PreferenceT = "dark" | "light"

const CafeNaVeiaTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#61C6FF",
        light: "#94d8fc",
        dark: "#35a2dd",
      },
      secondary: {
        main: "#FF0154",
        light: "#ff5b8f",
        dark: "#c90442",
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
      h1: {
        fontSize: 40,
        fontWeight: 700,
      },
      h2: {
        fontSize: 35,
        fontWeight: 700,
      },
      h3: {
        fontSize: 30,
        fontWeight: 700,
      },
      h4: {
        fontSize: 25,
        fontWeight: 700,
        letterSpacing: 0,
      },
      body1: {
        fontSize: 20,
      },
      body2: {
        fontSize: 18,
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
          h1: {
            textAlign: "left",
            fontFamily: "Hind !important",
            fontSize: "40px !important",
            fontWeight: "bold !important",
          },
          h2: {
            textAlign: "left",
            fontFamily: "Hind !important",
            fontSize: "35px !important",
            fontWeight: "bold !important",
          },
          h3: {
            textAlign: "left",
            fontFamily: "Hind !important",
          },
          h4: {
            textAlign: "left",
            fontSize: "25px !important",
            fontFamily: "Hind !important",
            letterSpacing: "0px !important",
            textTransform: "none !important",
          },
        },
      },
    },
  })
}

export default CafeNaVeiaTheme
