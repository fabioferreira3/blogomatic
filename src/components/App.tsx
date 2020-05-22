import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import UltimateHealthTheme from "../themes/UltimateHealth"
import CafeNaVeiaTheme from "../themes/CafeNaVeia"

export const App: React.FC = props => {
  const prefersDarkMode = false
  let selectedTheme: any = null
  switch (process.env.GATSBY_THEME) {
    case "ultimate":
      selectedTheme = UltimateHealthTheme(prefersDarkMode ? "dark" : "light")
      break
    case "cafe":
      selectedTheme = CafeNaVeiaTheme(prefersDarkMode ? "dark" : "light")
      break
  }

  const theme = React.useMemo(() => selectedTheme, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}
