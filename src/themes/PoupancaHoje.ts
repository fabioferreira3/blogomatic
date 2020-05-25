import { createMuiTheme } from "@material-ui/core/styles"

type PreferenceT = "dark" | "light"

const PoupancaHojeTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#00a651",
        light: "#02cd65",
        dark: "#018843",
      },
      secondary: {
        main: "#444545",
        light: "#616363",
        dark: "#2b2c2c",
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
      fontFamily: "Hind",
      h1: {
        fontSize: 40,
        fontWeight: 700,
        letterSpacing: 1,
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
        fontSize: 18,
        textAlign: "justify"
      },
      body2: {
        fontSize: 14,
        textAlign: "justify"
      },
      button: {
        letterSpacing: 1,
        fontWeight: 700,
        fontSize: 18,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          h1: {
            textAlign: "left"
          },
          h2: {
            textAlign: "left"
          },
          h3: {
            textAlign: "left"
          },
          h4: {
            textAlign: "left"
          },
        },
      },
    },
  })
}

export default PoupancaHojeTheme
