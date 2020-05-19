import React from "react"
import { AppBar, Grid } from "@material-ui/core"

import { NavMenu } from "../NavMenu/NavMenu"
import { navBarStyles } from "./NavBar.styles"
import { Logo } from "../Logo/Logo"

export const NavBar: React.FC = () => {
  const classes = navBarStyles()
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Grid container justify={"center"}>
        <Logo />
      </Grid>
      <NavMenu />
    </AppBar>
  )
}
