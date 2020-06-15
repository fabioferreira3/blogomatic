import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import { navigate } from "gatsby"

import NavMenu from "../NavMenu/NavMenu"
import Logo from "../Logo/Logo"
import navBarStyles from "./NavBar.styles"

const NavBar: React.FC = () => {
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

export default NavBar
