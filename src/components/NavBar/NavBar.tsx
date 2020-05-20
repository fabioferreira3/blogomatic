import React from "react"
import { AppBar, Grid } from "@material-ui/core"
import { navigate } from "gatsby"

import { NavMenu } from "../NavMenu/NavMenu"
import { navBarStyles } from "./NavBar.styles"
import { Logo } from "../Logo/Logo"

export const NavBar: React.FC = () => {
  const classes = navBarStyles()
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Grid container justify={"center"}>
        <Grid
          container
          justify={"center"}
          item
          xs={12}
          sm={6}
          className={classes.wrapper}
          onClick={() => navigate("/")}
        >
          <Logo />
        </Grid>
      </Grid>
      <NavMenu />
    </AppBar>
  )
}
