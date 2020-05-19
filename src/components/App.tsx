import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import UltimateHealthTheme from "../themes/UltimateHealth"

export const App: React.FC = props => {
  const prefersDarkMode = false
  const theme = React.useMemo(
    () => UltimateHealthTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}
