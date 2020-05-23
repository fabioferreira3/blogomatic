import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import UltimateHealthTheme from "../themes/UltimateHealth"
import CafeNaVeiaTheme from "../themes/CafeNaVeia"
import PoupancaHojeTheme from "../themes/PoupancaHoje"
import textContent_EN from "../texts/en"
import textContent_PT from "../texts/pt"

export const RootContext: any = React.createContext({})

export const App: React.FC = props => {
  const prefersDarkMode = false
  let selectedTheme: any = null
  const textContent: any =
    process.env.GATSBY_LANGUAGE === "en" ? textContent_EN : textContent_PT
  switch (process.env.GATSBY_THEME) {
    case "ultimate":
      selectedTheme = UltimateHealthTheme(prefersDarkMode ? "dark" : "light")
      break
    case "cafe":
      selectedTheme = CafeNaVeiaTheme(prefersDarkMode ? "dark" : "light")
      break
    case "poupanca":
      selectedTheme = PoupancaHojeTheme(prefersDarkMode ? "dark" : "light")
      break
    default:
      break
  }

  const theme = React.useMemo(() => selectedTheme, [prefersDarkMode])

  return (
    <RootContext.Provider value={{ textContent }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </RootContext.Provider>
  )
}
